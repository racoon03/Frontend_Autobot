//import React from "react";

export default function TradingBotInfo() {
  return (
    <div className="bg-[#1A2238] text-white font-sans">
      <div className="mx-60">


      <div className="text-center py-6">
        <h2 className="text-2xl font-bold uppercase">
          Chào mừng bạn đến với Bot đầu tư chứng khoán
        </h2>
      </div>

      <section className="p-8 space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-24 ">
          <p className="ml-24">
            Trong thời đại công nghệ 4.0, việc ứng dụng trí tuệ nhân tạo (AI) và máy học (machine learning) vào đầu tư chứng khoán đã trở nên phổ biến và đem lại nhiều lợi ích đáng kể cho nhà đầu tư. Bot Đầu Tư Chứng Khoán là một công cụ mạnh mẽ giúp bạn tối ưu hóa danh mục đầu tư và gia tăng lợi nhuận với sự hỗ trợ của công nghệ hiện đại nhất, đặc biệt được phát triển trên nền tảng Amibroker.
          </p>
          <img src="src/assets/info4.png" alt="AI Bot" className="w-[480px] h-[240px]" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-24">
          <img src="src/assets/info6.png" alt="Chart" className="w-[480px] h-[240px] object-cover rounded" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Phân Tích Dữ Liệu Nhanh Chóng Và Chính Xác</h3>
            <p>
              Sử dụng Amibroker, một trong những nền tảng phân tích kỹ thuật hàng đầu, Bot tận dụng các thuật toán tiên tiến để phân tích hàng triệu điểm dữ liệu từ thị trường chứng khoán toàn cầu.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-24">
          <img src="src/assets/info1.png" alt="Automation" className="w-[480px] h-[240px] object-cover rounded" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Giao Dịch Tự Động Và Linh Hoạt</h3>
            <p>
              Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-24">
          <img src="src/assets/info.png" alt="Risk" className="w-[480px] h-[240px] object-cover rounded" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Giảm Thiểu Rủi Ro</h3>
            <p>
              Với khả năng phân tích rủi ro và quản lý danh mục đầu tư một cách hiệu quả, Bot giúp bạn giảm thiểu rủi ro và bảo vệ lợi nhuận của mình.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-24">
          <img src="src/assets/info3.png" alt="Support" className="w-[480px] h-[240px] object-cover rounded" />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold">Hỗ Trợ 24/7</h3>
            <p>
              Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường.
            </p>
          </div>
        </div>
      </section>

      {/* Bot Stats Section */}
      <section className="p-8 text-center">
        <h3 className="text-2xl font-bold">Thông Số Lệnh Bot</h3>
        <table className="mt-4 mx-auto text-left border-collapse w-full max-w-xl">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border">Tên Bot</th>
              <th className="p-2 border">Số Lệnh</th>
              <th className="p-2 border">Lợi Nhuận</th>
              <th className="p-2 border">Tỉ Lệ Thắng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800">
              <td className="p-2 border">Bot VIP</td>
              <td className="p-2 border">50</td>
              <td className="p-2 border">100</td>
              <td className="p-2 border">95</td>
            </tr>
          </tbody>
        </table>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Đăng ký ngay 🤖</button>
      </section>
      </div>
    </div>
  );
}
