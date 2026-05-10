import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function StoreLayout({ cartCount = 0 }) {
  const { pathname } = useLocation()
  const showLookupButton = pathname !== '/order-lookup'

  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header cartCount={cartCount} />
      <main className="flex-1 py-8">
        <Outlet />
      </main>
      {showLookupButton && (
        <Link
          to="/order-lookup"
          aria-label="Tra cứu đơn hàng"
          className="fixed bottom-4 right-4 z-50 inline-flex max-w-[calc(100vw-1rem)] items-center gap-2 rounded-full bg-amber-700 px-4 py-2 text-[11px] font-bold text-white shadow-xl transition hover:bg-amber-800 sm:bottom-5 sm:right-5 sm:max-w-[calc(100vw-2.5rem)] sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="truncate">Tra cứu đơn hàng</span>
        </Link>
      )}
      <Footer />
    </div>
  )
}

export default StoreLayout

