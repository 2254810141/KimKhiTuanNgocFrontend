import { API_BASE_URL } from './apiBaseUrl'

export const PLACEHOLDER_IMAGE = '/product-placeholder.svg'

export function toAbsoluteImageUrl(path) {
  if (!path) return PLACEHOLDER_IMAGE
  if (path.startsWith('http://') || path.startsWith('https://')) return path

  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${API_BASE_URL}/${normalized}`
}

export function formatVnd(price) {
  return `${Number(price ?? 0).toLocaleString('vi-VN')}d`
}

export function roundMoney(value) {
  return Math.round(Number(value ?? 0))
}

export function getVatRate(item) {
  if (item?.isVatExempt) return 0
  return Number(item?.vatRate ?? 10)
}

export function getVatLabel(item) {
  if (item?.isVatExempt) {
    return 'Miễn thuế VAT'
  }

  const vatRate = getVatRate(item)
  return `Giá chưa bao gồm ${vatRate}% VAT`
}

export function calculateVatTotals(items = []) {
  const initial = { subTotal: 0, totalVat: 0, grandTotal: 0 }

  const totals = items.reduce((acc, item) => {
    const price = Number(item?.price ?? 0)
    const quantity = Number(item?.quantity ?? 0)
    const lineBase = roundMoney(price * quantity)
    const vatRate = getVatRate(item)
    const lineVat = item?.isVatExempt ? 0 : roundMoney((lineBase * vatRate) / 100)

    acc.subTotal += lineBase
    acc.totalVat += lineVat
    acc.grandTotal += lineBase + lineVat
    return acc
  }, initial)

  return {
    subTotal: roundMoney(totals.subTotal),
    totalVat: roundMoney(totals.totalVat),
    grandTotal: roundMoney(totals.subTotal + totals.totalVat),
  }
}

export function mapProductDto(item) {
  const id = item.id ?? item.Id ?? item.productId ?? item.ProductId
  const name = item.name ?? item.Name ?? item.productName ?? item.ProductName ?? 'Sản phẩm'
  const image = item.image ?? item.Image ?? item.productsImages ?? item.ProductsImages
  const categoryId = item.categoryId ?? item.CategoryId ?? 0
  const brandId = item.brandId ?? item.BrandId ?? 0
  const price = Number(item.price ?? item.Price ?? 0)
  const vatRate = Number(item.vatRate ?? item.VatRate ?? 10)
  const isVatExempt = Boolean(item.isVatExempt ?? item.IsVatExempt)
  const isContactPrice = Boolean(item.isContactPrice ?? item.IsContactPrice)
  const isActive = item.isActive ?? item.IsActive ?? true
  const description = item.description ?? item.Description ?? ''

  return {
    id: String(id ?? ''),
    name,
    price,
    image: toAbsoluteImageUrl(image),
    isContactPrice,
    isActive,
    vatRate: isVatExempt ? 0 : vatRate,
    isVatExempt,
    categoryId: Number(categoryId ?? 0),
    brandId: Number(brandId ?? 0),
    description,
    displayPrice: isContactPrice ? 'Liên hệ' : formatVnd(price),
    vatLabel: getVatLabel({ vatRate, isVatExempt }),
  }
}

