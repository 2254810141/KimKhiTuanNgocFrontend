import api from '../utils/axiosConfig'

export async function loginUser(payload, isAdmin = false) {
  const endpoint = isAdmin ? 'admin/login' : 'login'
  const response = await api.post(`/api/User/${endpoint}`, payload)
  return response.data
}

export async function registerUser(payload) {
  const response = await api.post('/api/User/register', payload)
  return response.data
}

export async function logoutUser(refreshToken) {
  if (!refreshToken) {
    return null
  }
  const response = await api.post('/api/User/logout', { refreshToken })
  return response.data
}

