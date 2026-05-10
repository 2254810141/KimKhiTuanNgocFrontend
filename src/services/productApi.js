import api from '../utils/axiosConfig'
import { mapProductDto } from '../utils/product'

export async function getProducts(keyword = '') {
  const trimmedKeyword = keyword.trim()
  
  // Nếu có keyword, sử dụng endpoint search; nếu không, sử dụng endpoint GetAll
  if (trimmedKeyword) {
    const response = await api.get('/api/Product/search', { params: { keyword: trimmedKeyword } })
    const data = response.data
    return Array.isArray(data) ? data.map(mapProductDto) : []
  } else {
    const response = await api.get('/api/Product')
    const data = response.data
    return Array.isArray(data) ? data.map(mapProductDto) : []
  }
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
