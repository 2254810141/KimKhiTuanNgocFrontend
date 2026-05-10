import api from '../utils/axiosConfig'
import { mapProductDto } from '../utils/product'

export async function getProducts(keyword = '') {
  const trimmedKeyword = keyword.trim()
  const params = trimmedKeyword ? { keyword: trimmedKeyword } : {}
  const response = await api.get('/api/Product/search', { params })
  const data = response.data
  return Array.isArray(data) ? data.map(mapProductDto) : []
}

export async function getProductById(productId) {
  try {
    const response = await api.get(`/api/Product/${productId}`)
    const data = response.data
    return data ? mapProductDto(data) : null
  } catch (error) {
    if (error.response?.status === 404) {
      return null
    }
    throw error
  }
}
