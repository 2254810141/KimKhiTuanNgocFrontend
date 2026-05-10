import api from '../utils/axiosConfig'

function mapBrand(item) {
  const id = item.id ?? item.Id ?? item.brandId ?? item.BrandId
  const name = item.name ?? item.Name ?? item.brandName ?? item.BrandName ?? 'Thương hiệu'
  const isActive = item.isActive ?? item.IsActive ?? true

  return {
    id: String(id ?? ''),
    name,
    isActive,
  }
}

export async function getBrands() {
  const response = await api.get('/api/Brand')
  const data = response.data
  return Array.isArray(data) ? data.map(mapBrand) : []
}

