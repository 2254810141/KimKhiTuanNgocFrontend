import api from '../utils/axiosConfig'

export async function checkoutCod(payload) {
  const response = await api.post('/api/Order/checkout/cod', payload)
  return response.data
}

export async function checkoutCodGuest(payload) {
  const response = await api.post('/api/Order/checkout/cod/guest', payload)
  return response.data
}

export async function getMyOrders() {
  const response = await api.get('/api/Order/my')
  const data = response.data
  return Array.isArray(data) ? data : []
}

export async function cancelMyOrder(orderId) {
  const response = await api.patch(`/api/Order/my/${orderId}/cancel`)
  return response.data
}

export async function lookupOrdersByEmail(payload) {
  const response = await api.post('/api/Order/lookup', payload)
  const data = response.data
  return Array.isArray(data) ? data : []
}

