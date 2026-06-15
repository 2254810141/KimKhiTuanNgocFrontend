import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          Kiểm tra và đổi trả hàng
        </h1>
        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="mb-4">Để đảm bảo quyền lợi của khách hàng, Kim Khí Tuấn Ngọc áp dụng chính sách kiểm tra và đổi trả hàng như sau:</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">Chính sách kiểm tra hàng</h2>
          <p className="mb-2">Khi nhận hàng, Quý khách có quyền kiểm tra hàng hóa theo thông tin đặt hàng, bao gồm kiểm tra ngoại quan, đóng gói, bao bì và mã sản phẩm.</p>
          <p className="mb-4">Đối với thiết bị dùng điện, Quý khách có thể cắm điện, khởi động để kiểm tra nhưng không được phép sử dụng. Đối với thiết bị sử dụng nhiên liệu, không được đổ nhiên liệu vào. Nếu khách hàng vi phạm quy định này thì sẽ không được đổi trả hàng.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">Điều kiện trả hàng - Đổi hàng</h2>
          <p className="mb-2">Tùy theo loại sản phẩm, chúng tôi áp dụng các chính sách đổi/trả khác nhau. Chúng tôi chấp nhận đổi/trả trong các trường hợp sau:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Sản phẩm bị lỗi do nhà sản xuất.</li>
            <li>Sản phẩm không đúng như mô tả trên website.</li>
            <li>Hàng không đúng chủng loại, mẫu mã như Quý khách đặt.</li>
            <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
            <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">Cách thức đổi hàng và trả hàng</h2>
          <p className="mb-2">Quý khách vui lòng thông báo chi tiết về tình trạng hàng và lý do đổi/trả qua:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Hotline: <strong>0933.901.128</strong></li>
            <li>Email: <strong>kimkhituanngoc@gmail.com</strong></li>
          </ul>

          <ol className="list-decimal ml-6 mb-4 space-y-2">
            <li>Quý khách chuyển hàng tới Văn phòng của chúng tôi bằng chuyển phát nhanh hoặc mang trực tiếp tới Văn phòng.</li>
            <li>Sau khi nhận được hàng, chúng tôi sẽ kiểm tra xem hàng có đủ điều kiện đổi/trả hay không (còn nguyên vẹn, chưa bóc tem của nhà sản xuất, có thể bán được).</li>
            <li>Chúng tôi sẽ gửi email hoặc điện thoại thông báo tới Quý khách về việc đồng ý đổi/trả hàng.</li>
            <li>Quý khách vui lòng thanh toán cước phí chuyển hàng (lần 2) cho đơn hàng này.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
