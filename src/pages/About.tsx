import { Card, Table } from "antd";
import { Link } from "react-router-dom";


export default function About() {
  
  const dataSource = [
  {
    key: '1', 
    tenBot: 'Bot VIP',
    soLenh: 24,
    loiNhuan: '500',
    tiLeThang: '95%'
  },
  {
    key: '2',
    tenBot: 'Bot Thường',
    soLenh: 18,
    loiNhuan: '280',
    tiLeThang: '70%'
  },

];

  const columns = [
  { 
    title: 'Tên Bot',
    dataIndex: 'tenBot', 
    key: 'tenBot'
  },
  { 
    title: 'Số lệnh',
    dataIndex: 'soLenh',
    key: 'soLenh'
  },
  { 
    title: 'Lợi Nhuận',
    dataIndex: 'loiNhuan',
    key: 'loiNhuan'
  },
  { 
    title: 'Tỉ lệ thắng',
    dataIndex: 'tiLeThang',
    key: 'tiLeThang'
  },
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 container mx-auto px-4 py-12 md:px-20 lg:px-40 transition-transform duration-500 hover:scale-105">
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
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 container mx-auto px-4 py-12 md:px-20 lg:px-40 transition-transform duration-500 hover:scale-105">
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 container mx-auto px-4 py-12 md:px-20 lg:px-40 transition-transform duration-500 hover:scale-105">
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
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 container mx-auto px-4 py-12 md:px-20 lg:px-40 transition-transform duration-500 hover:scale-105">
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

        <div className="mx-8 items-center">
          <h2 className="text-2xl text-center font-bold text-center text-black mb-6 mt-24">
            Thông Số Lệnh Bot
          </h2>
          <Table
          columns={columns}
          dataSource={dataSource}
          components={{
            header: {
              cell: (props) => (
                <th 
                  {...props} 
                  style={{ 
                    textAlign: 'center',
                    padding: '12px 8px'
                  }} 
                />
              ),
            },
            body: {
              cell: (props) => (
                <td 
                  {...props} 
                  style={{ 
                    textAlign: 'center',
                    padding: '12px 8px'
                  }} 
                />
              ),
            },
          }}
          bordered
          />
          </div>
      </div>
        <div className="w-full flex justify-center mb-12">
          <Link to="/register">
            <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium">
              Đăng Ký Ngay
            </button>
          </Link>
        </div>
  </div>
    
  );
}
