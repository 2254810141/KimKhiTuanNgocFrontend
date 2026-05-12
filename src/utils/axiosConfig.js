import axios from 'axios'
import { API_BASE_URL } from './apiBaseUrl'
import { getAuthSession, clearAuthSession, saveAuthSession, isAccessTokenExpired } from './authSession'

// Tạo Axios instance với config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 👈 QUAN TRỌNG: Gửi cookies/tokens tự động
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅ Flag để tránh infinite loop khi refresh token
let isRefreshing = false
let failedQueue = []

const refreshApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

const AUTH_ENDPOINTS = ['/api/User/login', '/api/User/admin/login', '/api/User/register', '/api/User/admin/register', '/api/User/refresh']

const isAuthEndpoint = (url = '') => AUTH_ENDPOINTS.some((endpoint) => url.includes(endpoint))

const redirectToLogin = () => {
  if (typeof window === 'undefined') {
    return
  }

  const isAdminRoute = window.location.pathname.startsWith('/admin')
  window.location.href = isAdminRoute ? '/admin/login' : '/login'
}

const refreshAccessToken = async () => {
  const currentSession = getAuthSession()
  if (!currentSession?.refreshToken) {
    throw new Error('Missing refresh token')
  }

  const response = await refreshApi.post('/api/User/refresh', {
    refreshToken: currentSession.refreshToken,
  })

  const data = response?.data
  if (!data?.accessToken || !data?.refreshToken) {
    throw new Error('Invalid refresh token response')
  }

  const nextSession = {
    ...currentSession,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    expiresAt: data.expiresAt,
    user: data.user ?? currentSession.user,
  }

  saveAuthSession(nextSession)
  return data.accessToken
}

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

// Interceptor: Thêm Authorization token từ session
api.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {}
    const session = getAuthSession()
    const hasToken = Boolean(session?.accessToken && session.accessToken.trim())
    const shouldRefresh = hasToken && isAccessTokenExpired(session) && session?.refreshToken && !isAuthEndpoint(config.url)

    if (shouldRefresh) {
      if (isRefreshing) {
        const token = await new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
        config.headers.Authorization = `Bearer ${token}`
      } else {
        isRefreshing = true
        try {
          const newAccessToken = await refreshAccessToken()
          processQueue(null, newAccessToken)
          config.headers.Authorization = `Bearer ${newAccessToken}`
        } catch (refreshError) {
          processQueue(refreshError, null)
          clearAuthSession()
          redirectToLogin()
          throw refreshError
        } finally {
          isRefreshing = false
        }
      }
    } else if (hasToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    } else {
      delete config.headers.Authorization
    }
    
    // Xử lý FormData: không set Content-Type để browser tự set multipart/form-data
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = undefined
    }
    
    return config
  },
  (error) => Promise.reject(error)
)

// Interceptor: Xử lý errors chung
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const status = error.response?.status

    if (status !== 401 || !originalRequest) {
      return Promise.reject(error)
    }

    if (isAuthEndpoint(originalRequest.url) || originalRequest._retry) {
      return Promise.reject(error)
    }

    const session = getAuthSession()
    if (!session?.refreshToken) {
      clearAuthSession()
      redirectToLogin()
      return Promise.reject(error)
    }

    originalRequest._retry = true

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      })
        .then((token) => {
          originalRequest.headers = originalRequest.headers ?? {}
          originalRequest.headers.Authorization = `Bearer ${token}`
          return api(originalRequest)
        })
        .catch((queueError) => Promise.reject(queueError))
    }

    isRefreshing = true
    try {
      const newAccessToken = await refreshAccessToken()
      originalRequest.headers = originalRequest.headers ?? {}
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
      processQueue(null, newAccessToken)
      return api(originalRequest)
    } catch (refreshError) {
      processQueue(refreshError, null)
      clearAuthSession()
      redirectToLogin()
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  }
)

export default api




