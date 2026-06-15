import React from 'react';

const PaymentGuide = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          Hướng dẫn thanh toán
        </h1>
        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="mb-4">Để thuận tiện nhất cho việc thanh toán của Quý khách, <strong>Tuấn Ngọc</strong> xin đưa ra các hình thức thanh toán sau đây để Quý khách chọn lựa:</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">1. Thanh toán bằng tiền mặt</h2>
          <p className="mb-2">Nếu địa điểm thanh toán cũng là địa điểm giao hàng, nhân viên chúng tôi sẽ thu tiền ngay lúc giao hàng.</p>
          <p className="mb-2">Trường hợp địa điểm thanh toán khác với địa điểm giao hàng, chúng tôi sẽ thu tiền trước khi giao hàng.</p>
          <p className="mb-4">Đối với địa điểm giao hàng nằm ở ngoại thành TPHCM hoặc các tỉnh, chúng tôi sẽ giao hàng sau khi nhận được tiền hoặc sau khi nhận được thông báo đã nhận tiền từ phía ngân hàng.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">2. Chuyển tiền qua Ngân hàng</h2>
          <p className="mb-2">Quý khách có nhu cầu thanh toán qua Ngân hàng vui lòng chuyển tiền cho chúng tôi theo những thông tin sau:</p>

          <div className="bg-amber-50 p-4 rounded border border-amber-100 max-w-xl">
            <p className="font-semibold">CÔNG TY TNHH KIM KHÍ TUẤN NGỌC</p>
            <p><strong>Ngân hàng:</strong> Ngân hàng TMCP Á Châu (ACB) – PGD Võ Văn Vân</p>
            <p><strong>Số tài khoản:</strong> 49279787</p>
          </div>

          <p className="mt-6 text-sm text-gray-600">Lưu ý: Sau khi chuyển khoản, Quý khách vui lòng giữ biên lai và thông báo cho chúng tôi (qua số điện thoại hoặc email) kèm thông tin đơn hàng để chúng tôi tiện đối soát và xử lý giao hàng nhanh chóng.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentGuide;
