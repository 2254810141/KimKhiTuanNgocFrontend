import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container-app bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 mb-6 border-b-2 border-amber-500 pb-2">
          Chính sách bảo mật dữ liệu cá nhân
        </h1>
        <div className="prose prose-amber max-w-none text-gray-700">
          <p className="mb-4">Công ty cam kết bảo mật thông tin cá nhân của khách hàng. Quý khách vui lòng đọc kỹ “Chính sách bảo mật” dưới đây để hiểu rõ hơn về cam kết của chúng tôi nhằm bảo vệ quyền lợi của người truy cập.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">1. Thu thập thông tin cá nhân</h2>
          <p className="mb-2">Thông tin thu thập thông qua website <strong>kimkhituanngoc.com</strong> sẽ giúp chúng tôi:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Hỗ trợ khách hàng khi mua sản phẩm.</li>
            <li>Giải đáp thắc mắc của khách hàng.</li>
            <li>Cung cấp thông tin mới nhất về sản phẩm, dịch vụ trên website.</li>
            <li>Xem xét và cải thiện nội dung, giao diện website.</li>
            <li>Thực hiện các hoạt động tiếp thị và quảng bá liên quan đến sản phẩm, dịch vụ của công ty.</li>
          </ul>
          <p className="mb-4">Để sử dụng một số dịch vụ tại <strong>kimkhituanngoc.com</strong>, quý khách có thể được yêu cầu cung cấp thông tin cá nhân (họ tên, email, số điện thoại…). Tất cả thông tin phải chính xác và hợp pháp. Chúng tôi không chịu trách nhiệm về tính chính xác của thông tin do khách hàng khai báo.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">2. Sử dụng thông tin cá nhân</h2>
          <p className="mb-2">Công ty TNHH KIM KHÍ TUẤN NGỌC thu thập và sử dụng thông tin cá nhân của khách hàng theo đúng chính sách bảo mật này. Khi cần thiết, chúng tôi có thể sử dụng thông tin này để:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Liên hệ trực tiếp với khách hàng thông qua email, điện thoại hoặc thư tín.</li>
            <li>Gửi thông tin về đơn hàng, bảo hành sản phẩm.</li>
            <li>Cung cấp thông tin về các chương trình khuyến mãi, dịch vụ mới.</li>
            <li>Gửi thư mời tham gia sự kiện hoặc thông báo tuyển dụng (nếu khách hàng đăng ký nhận thông tin).</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">3. Chia sẻ thông tin cá nhân</h2>
          <p className="mb-4">Chúng tôi cam kết không tiết lộ thông tin cá nhân của khách hàng, ngoại trừ các trường hợp sau:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Khi có yêu cầu từ cơ quan pháp luật.</li>
            <li>Khi cần thiết để bảo vệ quyền lợi hợp pháp của công ty trước pháp luật.</li>
            <li>Khi có sự đồng ý của khách hàng.</li>
            <li>Khi hợp tác với bên thứ ba để nghiên cứu thị trường hoặc cung cấp dịch vụ theo yêu cầu của khách hàng (bên thứ ba này phải tuân thủ thỏa thuận bảo mật thông tin).</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">4. Truy cập và chỉnh sửa thông tin cá nhân</h2>
          <p className="mb-4">Khách hàng có thể truy cập và chỉnh sửa thông tin cá nhân của mình thông qua các liên kết hoặc hệ thống quản lý tài khoản trên <strong>kimkhituanngoc.com</strong>.</p>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">5. Bảo mật thông tin cá nhân</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Khi quý khách cung cấp thông tin cá nhân cho chúng tôi, đồng nghĩa với việc đồng ý với các điều khoản trong chính sách bảo mật này.</li>
            <li>Chúng tôi áp dụng các biện pháp bảo mật tiên tiến như SSL, PCI nhằm bảo vệ thông tin khỏi truy cập trái phép.</li>
            <li>Tuy nhiên, không có phương thức truyền tải dữ liệu nào qua Internet đảm bảo bảo mật tuyệt đối. Chúng tôi không chịu trách nhiệm nếu có truy cập trái phép xảy ra do sơ suất từ phía khách hàng (như chia sẻ thông tin tài khoản với người khác).</li>
            <li>Chúng tôi khuyến cáo khách hàng bảo mật thông tin tài khoản, mật khẩu và đăng xuất khỏi hệ thống sau khi sử dụng.</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">6. Quy định về Spam</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>kimkhituanngoc.com</strong> cam kết không gửi email spam.</li>
            <li>Nếu khách hàng nhận được email từ hệ thống nhưng không đăng ký trước đó, vui lòng liên hệ với chúng tôi hoặc nhấn vào liên kết hủy đăng ký trong email.</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">7. Thay đổi chính sách bảo mật</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Chúng tôi có quyền thay đổi nội dung chính sách này bất kỳ lúc nào mà không cần thông báo trước.</li>
            <li>Chính sách bảo mật này chỉ áp dụng trên <strong>kimkhituanngoc.com</strong> và không liên quan đến website của bên thứ ba có liên kết từ trang web này.</li>
            <li>Việc tiếp tục sử dụng website sau khi chính sách thay đổi có nghĩa là quý khách đồng ý với các nội dung được cập nhật.</li>
          </ul>

          <h2 className="text-xl font-semibold text-amber-800 mt-6 mb-2">8. Thông tin liên hệ</h2>
          <div className="bg-amber-50 p-4 rounded border border-amber-100 max-w-xl">
            <p className="mb-1"><strong>Công ty TNHH Kim Khí Tuấn Ngọc</strong></p>
            <p className="mb-1"><strong>Hotline:</strong> 0933901128</p>
            <p className="mb-0"><strong>Website:</strong> kimkhituanngoc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
