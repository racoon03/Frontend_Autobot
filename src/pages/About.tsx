import { Card, Table, Empty } from "antd";


export default function About() {

  const columns = [
    { title: 'Tên Bot',},
    { title: 'Số lệnh',},
    { title: 'Lợi Nhuận', },
    { title: 'Tỉ lệ thắng',},
  ];

  return (
    <div className="text-white font-sans">
      <div className="mx-0">
        <div className ="bg-[url('src/assets/abouttest.jpg')] bg-cover py-60">
          <div className="text-start ml-40">
            <h2 className="text-2xl font-bold uppercase">
              Chào mừng bạn đến với Bot đầu tư chứng khoán
            </h2>
          </div>
        </div>

    <div className="bg-gray-200 py-10 px-5 space-y-10">

      <h2 className="text-2xl font-bold uppercase text-black text-center my-24">
        Tại Sao Chọn Bot Đầu Tư Chứng Khoán?
      </h2>

        {/* block 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 container mx-auto px-4 md:px-20 lg:px-40 transition-transform duration-500 hover:scale-105">
          <img
            src="src/assets/info6.png"
            alt="Block 1"
            className="rounded-2xl w-full md:w-1/2 h-80 object-cover"
          />
          <Card
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">
              Phân Tích Dữ Liệu Nhanh Chóng Và Chính Xác
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Sử dụng Amibroker, một trong những nền tảng phân tích kỹ thuật hàng đầu, bot tận dụng các thuật toán tiên tiến để phân tích hàng triệu điểm dữ liệu từ thị trường chứng khoán toàn cầu. Nhờ khả năng xử lý mạnh mẽ và công nghệ hiện đại, bot giúp bạn đánh giá xu hướng thị trường, xác định cơ hội đầu tư tiềm năng và đưa ra quyết định chính xác trong thời gian thực, tối ưu hóa lợi nhuận.
            </p>
          </Card>
        </div>

        {/* block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 container mx-auto px-4 md:px-20 lg:px-40">
          <img
            src="src/assets/info1.png"
            alt="Block 2"
            className="rounded-2xl w-full md:w-1/2 h-80 object-cover"
          />
          <Card
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">
              Giao Dịch Tự Động Và Linh Hoạt
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn. Với tính năng linh hoạt, bot có thể điều chỉnh chiến lược theo điều kiện thị trường, giúp tối ưu hóa lợi nhuận và giảm thiểu rủi ro một cách hiệu quả.
            </p>
          </Card>
        </div>

              {/* block 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 container mx-auto px-4 md:px-20 lg:px-40">
          <img
            src="src/assets/info.png"
            alt="Block 3"
            className="rounded-2xl w-full md:w-1/2 h-80 object-cover"
          />
          <Card
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-bold mb-2">
              Giảm Thiểu Rủi Ro
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Với khả năng phân tích rủi ro và quản lý danh mục đầu tư một cách hiệu quả, bot giúp bạn giảm thiểu rủi ro và bảo vệ lợi nhuận của mình. Bằng cách theo dõi biến động thị trường và áp dụng các chiến lược điều chỉnh phù hợp, bot giúp bạn duy trì sự ổn định tài chính và tối ưu hóa danh mục đầu tư, đảm bảo an toàn trước những biến động không lường trước.
            </p>
          </Card>
        </div>

              {/* block 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 container mx-auto px-4 md:px-20 lg:px-40">
          <img
            src="src/assets/info3.png"
            alt="Block 4"
            className="rounded-2xl w-full md:w-1/2 h-80 object-cover"
          />
          <Card
            className="w-full md:w-1/2 rounded-2xl shadow-lg items-center"
          >
            <h2 className="text-xl font-bold mb-2">
              Hỗ Trợ 24/7
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường. Với khả năng giám sát tự động và cập nhật liên tục, bot đảm bảo bạn không bỏ lỡ bất kỳ cơ hội đầu tư nào. Dù ngày hay đêm, bot vẫn duy trì hiệu suất tối ưu, giúp bạn phản ứng nhanh chóng trước mọi thay đổi và đưa ra quyết định chính xác.
            </p>
          </Card>
        </div>

      </div>

      <div className="mx-8">
        <h2 className="text-2xl text-center font-bold text-center text-black mb-6 mt-24">
          Danh sách giao dịch
        </h2>
        <Table className = "bg-gray-200 text-center"
          columns={columns}
          dataSource={[]} 
          locale={{
            emptyText: (
              <Empty
                description="No Data"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            ),
          }}
          bordered
        />
        </div>
      </div>
    </div>
  );
}
