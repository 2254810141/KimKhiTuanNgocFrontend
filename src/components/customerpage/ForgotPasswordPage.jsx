import '../../styles/AuthPage.css'

function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Quên mật khẩu</h1>
        <p className="auth-subtitle">Nhập email để nhận mã xác thực và đặt mật khẩu mới</p>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="forgot-email">Email</label>
            <input
              id="forgot-email"
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="verify-code">Mã xác thực</label>
            <input
              id="verify-code"
              type="text"
              name="verificationCode"
              placeholder="Nhập mã đã gửi tới email"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="new-password">Mật khẩu mới</label>
            <input
              id="new-password"
              type="password"
              name="newPassword"
              placeholder="Nhập mật khẩu mới"
              required
              minLength={6}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirm-password">Xác nhận mật khẩu mới</label>
            <input
              id="confirm-password"
              type="password"
              name="confirmNewPassword"
              placeholder="Nhập lại mật khẩu mới"
              required
              minLength={6}
            />
          </div>

          <div className="auth-actions">
            <button type="submit" className="auth-submit">
              Đặt lại mật khẩu
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default ForgotPasswordPage
