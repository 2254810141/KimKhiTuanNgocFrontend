import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById, getProducts } from '../../services/productApi'
import { getBrands } from '../../services/brandApi'

function ProductDetailPage({ onAddToCart = () => {} }) {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [brandName, setBrandName] = useState('Chính hãng')
  const [isLoading, setIsLoading] = useState(true)
  const [isRelatedLoading, setIsRelatedLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    ;(async () => {
      try {
        const data = await getProductById(productId)
        if (isMounted) {
          setProduct(data)
        }

        if (data?.brandId) {
          try {
            const brands = await getBrands()
            if (!isMounted) return

            const matchedBrand = brands.find((item) => String(item.id) === String(data.brandId))
            setBrandName(matchedBrand?.name ?? 'Chính hãng')
          } catch {
            if (isMounted) {
              setBrandName('Chính hãng')
            }
          }
        } else if (isMounted) {
          setBrandName('Chính hãng')
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Không thể tải chi tiết sản phẩm')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    })()

    return () => {
      isMounted = false
    }
  }, [productId])

  useEffect(() => {
    let isMounted = true

    if (!product?.categoryId) {
      setRelatedProducts([])
      setIsRelatedLoading(false)
      return () => {
        isMounted = false
      }
    }

    setIsRelatedLoading(true)

    ;(async () => {
      try {
        const products = await getProducts()
        if (!isMounted) return

        const sameCategoryProducts = products
          .filter(
            (item) =>
              item.isActive &&
              String(item.categoryId) === String(product.categoryId) &&
              String(item.id) !== String(product.id),
          )
          .slice(0, 12)

        setRelatedProducts(sameCategoryProducts)
      } catch {
        if (isMounted) {
          setRelatedProducts([])
        }
      } finally {
        if (isMounted) {
          setIsRelatedLoading(false)
        }
      }
    })()

    return () => {
      isMounted = false
    }
  }, [product])

  if (isLoading) {
    return (
      <section className="container-app rounded-xl border border-zinc-200 bg-white p-6 text-zinc-500 shadow-sm sm:p-8">
        Đang tải thông tin sản phẩm...
      </section>
    )
  }

  if (error) {
    return (
      <section className="container-app space-y-3 rounded-xl border border-red-200 bg-red-50 p-5 text-red-700 sm:p-6">
        <p>{error}</p>
        <Link to="/products" className="font-semibold underline">
          Quay lại danh sách
        </Link>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="container-app space-y-3 rounded-xl border border-zinc-200 bg-white p-5 text-zinc-600 shadow-sm sm:p-6">
        <p>Không tìm thấy sản phẩm.</p>
        <Link to="/products" className="font-semibold text-red-700 hover:text-red-800">
          Quay lại danh sách
        </Link>
      </section>
    )
  }

  if (!product.isActive) {
    return (
      <section className="container-app space-y-3 rounded-xl border border-zinc-200 bg-white p-5 text-zinc-600 shadow-sm sm:p-6">
        <p>Sản phẩm này hiện không còn hoạt động.</p>
        <Link to="/products" className="font-semibold text-red-700 hover:text-red-800">
          Quay lại danh sách
        </Link>
      </section>
    )
  }

  return (
    <section className="container-app">
      <div className="grid gap-5 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:grid-cols-2 lg:p-6">
        <div className="space-y-4">
          <div className="truncate text-xs text-zinc-500 sm:text-sm">
            <Link to="/products" className="font-medium text-zinc-600 hover:text-red-700">
              Sản phẩm
            </Link>{' '}
            / <span className="text-zinc-900">{product.name}</span>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
            <img src={product.image} alt={product.name} className="h-56 w-full object-cover object-center sm:h-72 lg:h-80" />
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
            <span className="rounded-full bg-zinc-100 px-3 py-1">Chính hãng</span>
            <span className="rounded-full bg-zinc-100 px-3 py-1">Bảo hành uy tín</span>
            <span className="rounded-full bg-zinc-100 px-3 py-1">Giao nhanh</span>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-xl font-black leading-tight text-zinc-900 sm:text-2xl">{product.name}</h1>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm text-zinc-500">Thông tin giá và VAT</p>
            <div className="mt-1 text-2xl font-black text-red-700 sm:text-3xl">{product.displayPrice}</div>
            <p className={`mt-2 text-sm font-medium ${product.isVatExempt ? 'text-amber-700' : 'text-zinc-500'}`}>
              {product.vatLabel}
            </p>
            {product.isContactPrice && <p className="mt-2 text-sm text-zinc-500">Sản phẩm này báo giá theo liên hệ.</p>}
          </div>

          <div className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600 leading-6">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-700">
              Thông số kỹ thuật
            </div>
            <p className="whitespace-pre-line">{product.description?.trim() || 'Chưa có thông số kỹ thuật cho sản phẩm này.'}</p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-700 mb-2">Thương hiệu</p>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                {brandName}
              </span>
              <span className="text-xs text-zinc-500">Hàng chất lượng cao</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 sm:w-auto sm:py-2"
            >
              Quay lại
            </Link>
            {product.isContactPrice ? (
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 sm:w-auto sm:py-2"
              >
                Liên hệ
              </Link>
            ) : (
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:w-auto sm:py-2"
                onClick={() => onAddToCart(product)}
              >
                Thêm vào giỏ hàng
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-zinc-900 sm:text-xl">Sản phẩm liên quan</h2>
            <p className="text-sm text-zinc-500">Cuộn ngang để xem thêm các sản phẩm có cùng danh mục.</p>
          </div>
        </div>

        {isRelatedLoading ? (
          <div className="text-sm text-zinc-500">Đang tải sản phẩm liên quan...</div>
        ) : relatedProducts.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedProducts.map((relatedProduct) => (
              <article
                key={relatedProduct.id}
                className="min-w-[230px] max-w-[230px] flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link to={`/products/${relatedProduct.id}`} className="block bg-white">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="h-40 w-full object-cover object-center"
                  />
                </Link>

                <div className="flex flex-col gap-2 p-3">
                  <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-snug text-zinc-900">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-base font-bold text-red-700">{relatedProduct.displayPrice}</p>
                  <p className="text-xs font-medium text-zinc-500">{relatedProduct.vatLabel}</p>
                  <div className="flex gap-2">
                    <Link
                      to={`/products/${relatedProduct.id}`}
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
                    >
                      Chi tiết
                    </Link>
                    {relatedProduct.isContactPrice ? (
                      <Link
                        to="/contact"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                      >
                        Liên hệ
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
                        onClick={() => onAddToCart(relatedProduct)}
                      >
                        Thêm giỏ
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-sm text-zinc-500">Chưa có sản phẩm cùng danh mục để hiển thị.</div>
        )}
      </div>
    </section>
  )
}

export default ProductDetailPage
