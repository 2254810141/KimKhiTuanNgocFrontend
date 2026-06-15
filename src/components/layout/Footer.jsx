import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-amber-700 bg-amber-900 text-amber-100">
      <div className="container-app grid gap-7 py-8 sm:py-10 md:grid-cols-4">
        <div>
          <p className="text-base font-extrabold text-amber-400 sm:text-lg">Kim Khí Tuấn Ngọc</p>
          <p className="mt-2 text-sm text-amber-200">
            Chuyên dụng cụ cầm tay, máy hàn, máy công trình và vật tư kim khí chính hãng.
          </p>
          <p className="mt-2 text-sm text-amber-200">
            22/2B Đường Cây Cám, Phường Bình Tân, TP Hồ Chí Minh
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-bold uppercase tracking-wide text-amber-50">Danh mục</p>
          <Link to="/products" className="block hover:text-amber-300">
            Tất cả sản phẩm
          </Link>
          <Link to="/contact" className="block hover:text-amber-300">
            Liên hệ tư vấn
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-bold uppercase tracking-wide text-amber-50">Chính sách bán hàng</p>
          <Link to="/huong-dan-mua-hang" className="block hover:text-amber-300">
            Hướng dẫn mua hàng
          </Link>
          <Link to="/huong-dan-thanh-toan" className="block hover:text-amber-300">
            Hướng dẫn thanh toán
          </Link>
          <Link to="/van-chuyen-va-giao-nhan" className="block hover:text-amber-300">
            Vận chuyển và giao nhận
          </Link>
          <Link to="/kiem-tra-va-doi-tra-hang" className="block hover:text-amber-300">
            Kiểm tra và đổi trả hàng
          </Link>
          <Link to="/huong-dan-bao-hanh" className="block hover:text-amber-300">
            Hướng dẫn bảo hành
          </Link>
          <Link to="/chinh-sach-bao-mat" className="block hover:text-amber-300">
            Chính sách bảo mật dữ liệu cá nhân
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-bold uppercase tracking-wide text-amber-50">Hỗ trợ</p>
          <a href="tel:0933901128" className="block hover:text-amber-300">
            Hotline: 0933901128
          </a>
          <a href="mailto:kimkhituanngoc@gmail.com" className="block hover:text-amber-300">
            kimkhituanngoc@gmail.com
          </a>
          <p className="text-amber-200">08:00 - 17:00 (T2 - T6)</p>
        </div>
      </div>

      <div className="border-t border-amber-700 py-4 text-center text-xs text-amber-200">
        <div className="container-app flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-2">
          <span>© 2026 Kim Khí Tuấn Ngọc. All rights reserved.</span>
          <span>Giao nhanh nội thành - Hỗ trợ kỹ thuật tận nơi</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

