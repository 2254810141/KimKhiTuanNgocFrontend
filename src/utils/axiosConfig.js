import axios from 'axios'
import { API_BASE_URL } from './apiBaseUrl'
import { getAuthSession } from './authSession'

// Tạo Axios instance với config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 👈 QUAN TRỌNG: Gửi cookies/tokens tự động
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor: Thêm Authorization token từ session
api.interceptors.request.use(
  (config) => {
    const session = getAuthSession()
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
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
    if (error.response?.status === 401) {
      // Authentication lỗi - có thể redirect tới login
      console.error('Unauthorized - redirecting to login')
      // window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api


