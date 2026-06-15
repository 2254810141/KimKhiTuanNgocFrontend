import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          Vận chuyển và giao nhận
        </h1>
        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="mb-4">Chính sách vận chuyển và giao nhận dưới đây mô tả các phương thức giao hàng, thời gian, phí vận chuyển và quy trình xử lý khi có phát sinh trong quá trình giao nhận.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">1. Các phương thức vận chuyển</h2>

          <h3 className="text-lg font-medium mt-4">Đơn hàng nội thành TP.HCM</h3>
          <p className="mb-2">Đối với các đơn hàng nội thành TP.HCM, chúng tôi sẽ giao trong ngày nếu Quý khách đặt hàng trước <strong>14:00</strong> cùng ngày. Nếu đặt sau 14:00 thì giao có thể thực hiện vào sáng ngày kế tiếp. (Trừ các ngày lễ, tết, thứ bảy, chủ nhật).</p>
          <p className="mb-4">Đơn hàng có thể được giao bởi nhân viên của công ty hoặc đơn vị vận chuyển tùy thuộc vào tình hình thực tế và thỏa thuận với khách hàng.</p>

          <h3 className="text-lg font-medium mt-4">Đơn hàng ngoại thành TP.HCM</h3>
          <p className="mb-2">Đối với vùng ngoại thành TP.HCM, chúng tôi sẽ sử dụng đơn vị vận chuyển (Grab, Be, ViettelPost, ...) hoặc chành xe tùy vị trí và tính chất đơn hàng. Thời gian giao thông thường từ <strong>1 đến 2 ngày</strong> (không tính lễ, tết, thứ bảy, chủ nhật).</p>

          <h3 className="text-lg font-medium mt-4">Đơn hàng đi tỉnh / thành phố khác</h3>
          <p className="mb-2">Đối với các đơn hàng giao tới tỉnh, thành khác, chúng tôi sẽ giao qua các đơn vị vận chuyển chuyên nghiệp (ViettelPost, GHTK, GHN, chành xe...). Thời gian giao hàng dự kiến từ <strong>3 đến 7 ngày</strong> tùy địa phương và điều kiện vận chuyển (không tính lễ, tết, thứ bảy, chủ nhật).</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">2. Các trường hợp phát sinh trong quá trình giao hàng</h2>
          <p className="mb-2">Trường hợp bất khả kháng (thiên tai, dịch họa, sự cố đột xuất): chúng tôi sẽ phối hợp với đơn vị vận chuyển để xử lý và thông báo kịp thời tới Quý khách. Nếu hàng hóa bị hư hỏng không thể sử dụng, chúng tôi sẽ tiến hành giao lại sản phẩm khác hoặc xử lý theo thỏa thuận với khách hàng.</p>

          <p className="mb-2">Nếu hàng hóa hư hỏng trong quá trình vận chuyển: khi nhận hàng, Quý khách cần kiểm tra kỹ ngoại quan và chi tiết bên trong. Quý khách nên quay video lúc nhận hàng và kiểm tra; sau đó phản hồi ngay với nhân viên giao hàng và thông báo cho chúng tôi. Chúng tôi sẽ xử lý khiếu nại dựa trên bằng chứng (video/hình ảnh) và báo cáo từ đơn vị vận chuyển. Nếu Quý khách không cung cấp video, hình ảnh nhận hàng, hoặc không có chứng kiến của nhân viên giao hàng thì chúng tôi có thể không chấp nhận khiếu nại.</p>

          <p className="mb-2">Trường hợp giao hàng trễ: chúng tôi xin lỗi và sẽ thông báo lý do cùng thời gian giao mới nhất. Nếu trễ do lỗi chủ quan của công ty, chúng tôi sẽ có phương án bồi thường phù hợp. Nếu trễ do nguyên nhân khách quan hoặc do đơn vị vận chuyển, mong Quý khách thông cảm. Trong trường hợp đơn hàng trễ hơn <strong>5 ngày</strong> so với cam kết do lỗi của công ty, Quý khách có quyền yêu cầu hủy đơn hàng (nếu không có hợp đồng khác được ký kết).</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">3. Phí vận chuyển</h2>
          <p className="mb-2">Miễn phí giao hàng: Chúng tôi miễn phí giao hàng cho các đơn hàng từ <strong>5.000.000₫</strong> trong nội thành TP.HCM với bán kính dưới <strong>10 km</strong>.</p>
          <p className="mb-2">Tính phí vận chuyển: Phí vận chuyển sẽ được tính dựa trên khối lượng/khối (tùy đơn vị vận chuyển), khoảng cách giao hàng và phương thức vận chuyển. Chúng tôi sẽ thông báo mức phí cụ thể cho Quý khách trước khi giao; khi Quý khách đồng ý, đơn hàng sẽ được xử lý theo mức phí và đơn vị vận chuyển đã chọn.</p>

          <p className="mt-6 text-sm text-gray-600">Lưu ý: Thời gian và phí giao hàng có thể thay đổi tùy theo điều kiện thực tế (lễ, tết, thời tiết, tình trạng giao thông). Mọi thắc mắc xin liên hệ Hotline: <strong>0933.901.128</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
