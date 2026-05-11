import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/productApi'
import ProductGrid from './ProductGrid'
import { getCategories } from '../../services/categoryApi'
import BannerPopup from './BannerPopup'
import ZaloButton from './ZaloButton'

const PAGE_SIZE = 8

function HomePage({ onAddToCart = () => {} }) {
  const [featured, setFeatured] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        const [productData, categoryData] = await Promise.all([getProducts(), getCategories()])
        if (mounted) {
          setFeatured(productData.filter((item) => item.isActive))
          setCategories(categoryData.filter((item) => item.isActive).slice(0, 6))
        }
      } catch {
        if (mounted) {
          setFeatured([])
          setCategories([])
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  const totalPages = Math.max(1, Math.ceil(featured.length / PAGE_SIZE))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE
  const paginatedFeatured = featured.slice(startIndex, startIndex + PAGE_SIZE)

  const goToPage = (page) => {
    setCurrentPage(Math.min(totalPages, Math.max(1, page)))
  }

  return (
    <>
      <div className="space-y-8 sm:space-y-10">
        <BannerPopup />
        <section className="container-app overflow-hidden rounded-2xl bg-amber-200 text-zinc-900 shadow-panel">
          <div className="grid gap-4 bg-brand-grid bg-grid p-4 sm:p-6 lg:grid-cols-2 lg:gap-6 lg:p-10">
            <div className="lg:col-span-2 overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/djbupbycd/image/upload/v1777999107/banner1_nj1g6x.png"
                alt="Banner Kim Khí Tuấn Ngọc"
                className="h-40 w-full object-cover object-center sm:h-52 lg:h-58"
              />
            </div>
            <div className="space-y-4 sm:space-y-5">
              <span className="inline-flex rounded-full border border-amber-700 bg-amber-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Kim Khí Tuấn Ngọc
              </span>
              <h1 className="text-xl font-black leading-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                Dụng cụ cầm tay và thiết bị cơ khí chính hãng cho thợ chuyên nghiệp
              </h1>
              <p className="text-sm text-zinc-600 lg:text-base">
                Chuyên DCK, DCA, Weldcom... giá cạnh tranh, hỗ trợ kỹ thuật, giao nhanh toàn quốc.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/products"
                  className="inline-flex justify-center rounded-lg bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700"
                >
                  Xem tất cả sản phẩm
                </Link>
                <Link
                  to="/products"
                  className="inline-flex justify-center rounded-lg border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-700 transition hover:border-amber-600 hover:text-amber-600"
                >
                  Xem danh mục
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-2 text-xs text-zinc-500 sm:grid-cols-3">
                <div>Hàng chính hãng có hóa đơn VAT</div>
                <div>Tư vấn đúng máy theo nhu cầu</div>
                <div>Hỗ trợ bảo hành nhanh</div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-400 bg-amber-100 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-widest text-amber-700">Danh mục sản phẩm</p>
              <div className="mt-3 space-y-3 sm:mt-4">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="flex items-center justify-between rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm transition hover:border-amber-500 hover:bg-amber-50"
                    >
                      <span className="text-zinc-700">{category.name}</span>
                    </Link>
                  ))
                ) : (
                  <div className="rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm text-zinc-500">
                    Chưa có danh mục nào.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="container-app space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Sản phẩm nổi bật</p>
              <h2 className="text-xl font-black text-zinc-900 sm:text-2xl">Bán chạy tại cửa hàng</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
              Xem tất cả -&gt;
            </Link>
          </div>

          {isLoading ? (
            <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center text-zinc-500 shadow-sm sm:p-8">
              Đang tải sản phẩm...
            </div>
          ) : (
            <div className="space-y-4">
              <ProductGrid products={paginatedFeatured} onAddToCart={onAddToCart} />

              {featured.length > 0 && totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2" role="navigation" aria-label="Phân trang sản phẩm nổi bật">
                  <button
                    type="button"
                    className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-50"
                    onClick={() => goToPage(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                  >
                    Trước
                  </button>

                  <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <button
                        key={page}
                        type="button"
                        className={`h-9 min-w-9 rounded-md border px-3 text-sm font-semibold transition ${
                          page === safeCurrentPage
                            ? 'border-amber-700 bg-amber-700 text-white'
                            : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100'
                        }`}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:opacity-50"
                    onClick={() => goToPage(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                  >
                    Sau
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

      </div>
      <ZaloButton />
    </>
  )
}

export default HomePage
