import api from '../utils/axiosConfig'

export async function getCart() {
  const response = await api.get('/api/Cart')
  const data = response.data
  return Array.isArray(data) ? data : []
}

export async function addCartItem(payload) {
  const response = await api.post('/api/Cart/add', payload)
  return response.data
}

export async function updateCartItem(payload) {
  const response = await api.put('/api/Cart/update', payload)
  return response.data
}

export async function removeCartItem(productId) {
  const response = await api.delete(`/api/Cart/remove/${productId}`)
  return response.data
}

export async function clearCart() {
  const response = await api.delete('/api/Cart/clear')
  return response.data
}
