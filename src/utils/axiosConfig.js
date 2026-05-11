import axios from 'axios'
import { API_BASE_URL } from './apiBaseUrl'
import { getAuthSession, clearAuthSession } from './authSession'

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

const processQueue = (error) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve()
    }
  })
  
  isRefreshing = false
  failedQueue = []
}

// Interceptor: Thêm Authorization token từ session
api.interceptors.request.use(
  (config) => {
    const session = getAuthSession()
    // ✅ Luôn luôn gửi token, ngay cả khi nó tồn tại
    if (session?.accessToken && session.accessToken.trim()) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    } else {
      // ⚠️ Nếu không có token, xóa Authorization header để tránh gửi "Bearer undefined"
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
  (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      // ✅ Log chi tiết để debug
      const session = getAuthSession()
      console.error('401 Unauthorized')
      console.error('Session:', session ? 'Exists' : 'None')
      console.error('Token:', session?.accessToken ? 'Present' : 'Missing')
      console.error('Requested URL:', error.config?.url)
      
      // ⚠️ Nếu đang refresh token, queue lại request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        }).then(() => api(originalRequest))
      }

      // ✅ Nếu có refreshToken, thử refresh
      if (session?.refreshToken && !originalRequest._retry) {
        isRefreshing = true
        originalRequest._retry = true

        // Ở đây bạn có thể gọi API refresh token nếu backend hỗ trợ
        // const refreshPromise = api.post('/api/User/refresh-token', { refreshToken: session.refreshToken })
        // refreshPromise.then(response => { ... }).catch(error => { ... })
        
        // Hiện tại, vì không có endpoint refresh, chúng ta clear session
        console.warn('Token refresh not implemented, clearing session')
        clearAuthSession()
        processQueue(error)
        
        // Redirect to login
        window.location.href = '/login'
      } else {
        // Không có refreshToken, clear session
        clearAuthSession()
      }
    }
    
    return Promise.reject(error)
  }
)

export default api




