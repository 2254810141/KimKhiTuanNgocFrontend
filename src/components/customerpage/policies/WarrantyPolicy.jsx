import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          Hướng dẫn bảo hành
        </h1>
        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="mb-4">1. Bảo hành</p>
          <p className="mb-4">Bảo hành sản phẩm là việc khắc phục những lỗi hỏng hóc, sự cố kỹ thuật xảy ra do lỗi của nhà sản xuất.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">2. Quy định về bảo hành</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Sản phẩm được bảo hành miễn phí nếu còn trong thời hạn bảo hành, tính từ ngày giao hàng.</li>
            <li>Thời hạn bảo hành được ghi trên Phiếu Bảo hành và theo quy định của từng hãng sản xuất đối với các sự cố kỹ thuật.</li>
            <li>Sản phẩm phải có Phiếu Bảo hành và tem bảo hành của công ty trên sản phẩm.</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">3. Những trường hợp không được bảo hành</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Sản phẩm đã quá thời hạn bảo hành ghi trên phiếu hoặc mất Phiếu Bảo hành.</li>
            <li>Tem niêm phong bảo hành bị rách, vỡ, bị dán đè hoặc bị sửa đổi.</li>
            <li>Phiếu bảo hành không ghi rõ số Serial và ngày mua hàng.</li>
            <li>Số máy trên sản phẩm không xác định được hoặc sai so với số máy ghi trên phiếu bảo hành.</li>
            <li>Sản phẩm bị hư hỏng do tác động cơ học: rơi, vỡ, va đập, trầy xước, móp méo, ẩm ướt, hoen rỉ, chảy nước hoặc do hỏa hoạn, thiên tai.</li>
            <li>Sản phẩm có dấu hiệu hư hỏng do chuột bọ hoặc côn trùng xâm nhập.</li>
            <li>Sử dụng không đúng hướng dẫn, sai điện áp quy định.</li>
            <li>Tự ý tháo dỡ, sửa chữa bởi cá nhân hoặc kỹ thuật viên không được ủy quyền.</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">4. Địa điểm bảo hành</h2>
          <p className="mb-4">Tất cả các sản phẩm đều được bảo hành tại trung tâm bảo hành của hãng. Nhân viên công ty có thể hướng dẫn Quý khách hàng đến hãng hoặc thay mặt Quý khách liên hệ tới trung tâm bảo hành của hãng để thực hiện bảo hành.</p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
