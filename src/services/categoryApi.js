import api from '../utils/axiosConfig'

function mapCategory(item) {
  const id = item.id ?? item.Id ?? item.categoryId ?? item.CategoryId
  const name = item.name ?? item.Name ?? item.categoryName ?? item.CategoryName ?? 'Danh mục'
  const isActive = item.isActive ?? item.IsActive ?? true

  return {
    id: String(id ?? ''),
    name,
    isActive,
  }
}

export async function getCategories() {
  const response = await api.get('/api/Category')
  const data = response.data
  return Array.isArray(data) ? data.map(mapCategory) : []
}

