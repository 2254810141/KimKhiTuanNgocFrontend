import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StoreLayout from './components/layout/StoreLayout'
import AdminLayout from './components/adminpage/AdminLayout'
import AdminLoginPage from './components/adminpage/AdminLoginPage'
import AdminRegisterPage from './components/adminpage/AdminRegisterPage'
import AdminProductPage from './components/adminpage/AdminProductPage'
import AdminCategoryPage from './components/adminpage/AdminCategoryPage'
import AdminBrandPage from './components/adminpage/AdminBrandPage'
import AdminOrderPage from './components/adminpage/AdminOrderPage'
import HomePage from './components/customerpage/HomePage'
import ProductPage from './components/customerpage/ProductPage'
import CartPage from './components/customerpage/CartPage'
import LoginPage from './components/customerpage/LoginPage'
import RegisterPage from './components/customerpage/RegisterPage'
import ForgotPasswordPage from './components/customerpage/ForgotPasswordPage'
import ProductDetailPage from './components/customerpage/ProductDetailPage'
import SearchResultsPage from './components/customerpage/SearchResultsPage'
import CategoryPage from './components/customerpage/CategoryPage'
import BrandPage from './components/customerpage/BrandPage'
import CheckoutPage from './components/customerpage/CheckoutPage'
import ContactPage from './components/customerpage/ContactPage'
import OrderHistoryPage from './components/customerpage/OrderHistoryPage'
import OrderLookupPage from './components/customerpage/OrderLookupPage'
import BuyingGuide from './components/customerpage/policies/BuyingGuide'
import PaymentGuide from './components/customerpage/policies/PaymentGuide'
import ShippingPolicy from './components/customerpage/policies/ShippingPolicy'
import ReturnPolicy from './components/customerpage/policies/ReturnPolicy'
import WarrantyPolicy from './components/customerpage/policies/WarrantyPolicy'
import PrivacyPolicy from './components/customerpage/policies/PrivacyPolicy'
import useCart from './hooks/useCart'
import useAuthSession from './hooks/useAuthSession'

function RequireAdmin({ children }) {
  const { session, isAdmin } = useAuthSession()
  if (!session || !isAdmin) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}

function GuestOnly({ children }) {
  const { session, isAdmin } = useAuthSession()
  if (session && isAdmin) {
    return <Navigate to="/admin/products" replace />
  }
  return children
}

function App() {
  const {
    cartItems,
    cartCount,
    refreshCart,
    handleAddToCart,
    handleRemoveItem,
    handleRemoveItems,
    handleUpdateQuantity,
    clearCart,
  } = useCart()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoreLayout cartCount={cartCount} />}>
          <Route index element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="products" element={<ProductPage onAddToCart={handleAddToCart} />} />
          <Route path="products/laptop" element={<Navigate to="/products" replace />} />
          <Route path="products/:productId" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="category/:id" element={<CategoryPage onAddToCart={handleAddToCart} />} />
          <Route path="brand/:id" element={<BrandPage onAddToCart={handleAddToCart} />} />
          <Route path="search" element={<SearchResultsPage onAddToCart={handleAddToCart} />} />
          <Route path="orders" element={<OrderHistoryPage />} />
          <Route path="order-lookup" element={<OrderLookupPage />} />
          <Route
            path="checkout"
            element={
              <CheckoutPage
                cartItems={cartItems}
                onClearCart={clearCart}
                onRemoveItems={handleRemoveItems}
                onRefreshCart={refreshCart}
              />
            }
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="huong-dan-mua-hang" element={<BuyingGuide />} />
          <Route path="huong-dan-thanh-toan" element={<PaymentGuide />} />
          <Route path="van-chuyen-va-giao-nhan" element={<ShippingPolicy />} />
          <Route path="kiem-tra-va-doi-tra-hang" element={<ReturnPolicy />} />
          <Route path="huong-dan-bao-hanh" element={<WarrantyPolicy />} />
          <Route path="chinh-sach-bao-mat" element={<PrivacyPolicy />} />
          <Route
            path="cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemoveItem={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
              />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route path="/admin/login" element={<GuestOnly><AdminLoginPage /></GuestOnly>} />
        <Route path="/admin/register" element={<GuestOnly><AdminRegisterPage /></GuestOnly>} />
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<AdminProductPage />} />
          <Route path="categories" element={<AdminCategoryPage />} />
          <Route path="brands" element={<AdminBrandPage />} />
          <Route path="orders" element={<AdminOrderPage />} />
        </Route>

        <Route path="*" element={null} />
      </Routes>
    </Router>
  )
}

export default App
