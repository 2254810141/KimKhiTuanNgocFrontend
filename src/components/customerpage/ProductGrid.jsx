import { Link } from 'react-router-dom'

function ProductGrid({ products, onAddToCart = () => {} }) {
  return (
    <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Link to={`/products/${product.id}`} className="block bg-zinc-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover object-center transition duration-300 group-hover:scale-[1.03] min-[420px]:h-32 sm:h-44 lg:h-52"
            />
          </Link>

          <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-3 sm:p-4">
            <h3 className="min-h-10 text-sm font-semibold leading-snug text-zinc-900 sm:min-h-12">{product.name}</h3>
            <p className="text-lg font-bold text-red-700 sm:text-xl">{product.displayPrice}</p>
            <p className={`text-xs font-medium ${product.isVatExempt ? 'text-amber-700' : 'text-zinc-500'}`}>
              {product.vatLabel}
            </p>
            <p className="text-xs text-zinc-500">Mã SP: {product.id}</p>

            <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                to={`/products/${product.id}`}
                className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100 sm:flex-1"
              >
                Chi tiết
              </Link>
              {product.isContactPrice ? (
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 sm:flex-1"
                >
                  Liên hệ
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-800 sm:flex-1"
                  onClick={() => onAddToCart(product)}
                >
                  Thêm giỏ
                </button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProductGrid


