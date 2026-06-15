import React from 'react';
import Picture1 from '../../../assets/Picture1.png';

const BuyingGuide = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          HƯỚNG DẪN MUA HÀNG
        </h1>

        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="text-lg font-semibold">Quý khách có thể mua hàng trên website thông qua hai hình thức chính:</p>

          <ol className="list-decimal ml-6 mt-4 space-y-4">
            <li>
              <h2 className="text-xl font-medium">Đặt hàng trực tiếp qua website</h2>
              <p>
                Quý khách có thể chọn các sản phẩm theo danh mục hoặc tìm kiếm trực tiếp. Để thêm sản
                phẩm vào đơn hàng, nhấn "Mua" hoặc vào trang chi tiết sản phẩm và chọn "Thêm vào giỏ hàng".
              </p>

              <p>
                Khi đã chọn nhiều sản phẩm, vui lòng nhấn "Cập nhật" trong giỏ hàng để kiểm tra số lượng
                và tổng tiền chính xác. Nếu muốn thay đổi sản phẩm, sử dụng chức năng "Bỏ ra" rồi chọn lại.
              </p>

              <p>
                Sau khi hoàn thiện lựa chọn, điền đầy đủ thông tin người nhận, chọn Điều lệ giao hàng và
                Phương thức thanh toán, rồi nhấn "Hoàn tất" để gửi đơn hàng. Chúng tôi sẽ kiểm tra và xác
                nhận lại với Quý khách trong thời gian sớm nhất.
              </p>

              <p className="text-sm text-gray-600">
                Lưu ý: Mọi thông tin cá nhân sẽ được bảo mật. Nếu thông tin cung cấp không rõ ràng hoặc sai,
                chúng tôi có quyền từ chối hoặc hủy đơn hàng.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-medium">Đặt hàng qua điện thoại</h2>
              <p>
                Nếu Quý khách cần hỗ trợ nhanh chóng, vui lòng gọi tới số <strong>0933 901 128</strong>. Đội ngũ
                nhân viên của chúng tôi sẵn sàng tư vấn và tiếp nhận đơn hàng thay Quý khách.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-medium">Hình thức thanh toán</h2>
              <p>
                Chúng tôi hỗ trợ nhiều hình thức thanh toán để Quý khách lựa chọn (thanh toán khi nhận hàng,
                chuyển khoản ngân hàng, hoặc thanh toán trực tuyến). Vui lòng chọn phương thức phù hợp khi
                hoàn tất đơn hàng.
              </p>

              <figure className="my-4">
                <img src={Picture1} alt="Hình thức thanh toán" className="max-w-md mx-auto rounded" />
                <figcaption className="text-sm text-center text-gray-600 mt-2">Các phương thức thanh toán phổ biến</figcaption>
              </figure>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuide;
