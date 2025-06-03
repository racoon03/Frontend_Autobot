import { Card, Table } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { priceBotService, type PriceBot } from '../services/priceBotService';

export default function About() {
//table---------------------------------------------------------------------
  const [botListData, setBotListData] = useState<PriceBot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBotData = async () => {
      try {
        setLoading(true);
        const data = await priceBotService.getAllPriceBots();
        setBotListData(data); 
        setError(null); 
      } catch (err) {
        console.error("Failed to fetch bot list:", err);
        setError("Không thể tải danh sách bot. Vui lòng thử lại sau.");
        setBotListData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBotData(); 
  }, []); 

  const columns = [
    {
      title: 'Mã Bot',
      dataIndex: 'botTradingId',
      key: 'botTradingId',
    },
    {
      title: 'Mô Tả Gói',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Thời Hạn (Tháng)',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Giá Gốc (VNĐ)',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => price.toLocaleString('vi-VN'),
    },
    {
      title: 'Giảm Giá',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount: number) => `${discount}%`,
    },
 
    {
      title: 'Giá Sau Giảm (VNĐ)',
      key: 'finalPrice',
      render: (record: PriceBot) => {
        const finalPrice = record.price * (1 - record.discount / 100);
        return finalPrice.toLocaleString('vi-VN');
      }
    }
  ];


  const dataSource = botListData.map(bot => ({
    ...bot,
    key: `${bot.botTradingId}-${bot.month}-${bot.price}`,
  }));

  return (
    <div className="mx-0 my-0 px-0 py-0">
        <div className="bg-[url('src/assets/abouttest.jpg')] h-[75vh] bg-cover flex items-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-start ml-8">
            <h2 className="text-3xl text-white font-bold uppercase">
              Chào mừng bạn đến với Bot đầu tư chứng khoán
            </h2>
          </div>
        </div>

        <div className="bg-white py-10 px-5 space-y-10">
          <h2 className="text-2xl font-bold uppercase text-black text-center">
            Tại Sao Chọn Bot Đầu Tư Chứng Khoán?
          </h2>
        </div>


          {/* block 1 */}
          <div className="block-animate-on-scroll h-[75vh] flex flex-col md:flex-row justify-center md:space-x-8 items-start px-4 py-8 bg-gray-300 mb-40 pt-28">
            <img
              src="src/assets/info6.png"
              alt="Block 1"
              className="p-4 h-[300px] sm:h-[400px] md:h-[500px]" 
              />
            <div className="pt-16">
              <Card className="w-[70vh] h-[300px] rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2">
                  Phân Tích Dữ Liệu Nhanh Chóng Và Chính Xác
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Sử dụng Amibroker, một trong những nền tảng phân tích kỹ thuật hàng đầu, bot tận dụng các thuật toán tiên tiến để phân tích hàng triệu điểm dữ liệu từ thị trường chứng khoán toàn cầu. Nhờ khả năng xử lý mạnh mẽ và công nghệ hiện đại, bot giúp bạn đánh giá xu hướng thị trường, xác định cơ hội đầu tư tiềm năng và đưa ra quyết định chính xác trong thời gian thực, tối ưu hóa lợi nhuận.
                </p>
              </Card>
            </div>
          </div>

          {/* block 2 */}
          <div className="block-animate-on-scroll flex flex-col md:flex-row-reverse justify-center md:space-x-8 items-start px-4 py-8 bg-white mb-40">
            <img
              src="src/assets/info1.png"
              alt="Block 2"
              className="p-4 h-[300px] sm:h-[400px] md:h-[500px]"
            />
            <div className="pt-16">
              <Card className="w-[70vh] h-[300px] rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2">
                  Giao Dịch Tự Động Và Linh Hoạt
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn. Với tính năng linh hoạt, bot có thể điều chỉnh chiến lược theo điều kiện thị trường, giúp tối ưu hóa lợi nhuận và giảm thiểu rủi ro một cách hiệu quả.
                </p>
              </Card>
            </div>
          </div>

          {/* block 3 */}
          <div className="block-animate-on-scroll h-[75vh] flex flex-col md:flex-row justify-center md:space-x-8 items-start px-4 py-8 bg-gray-300 mb-40 pt-28">
            <img
              src="src/assets/info.png"
              alt="Block 3"
              className="p-4 h-[300px] sm:h-[400px] md:h-[500px]"
            />
            <div className="pt-16">
              <Card className="w-[70vh] h-[300px] rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-2">Giảm Thiểu Rủi Ro</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Với khả năng phân tích rủi ro và quản lý danh mục đầu tư một cách hiệu quả, bot giúp bạn giảm thiểu rủi ro và bảo vệ lợi nhuận của mình. Bằng cách theo dõi biến động thị trường và áp dụng các chiến lược điều chỉnh phù hợp, bot giúp bạn duy trì sự ổn định tài chính và tối ưu hóa danh mục đầu tư, đảm bảo an toàn trước những biến động không lường trước.
                </p>
              </Card>
            </div>
          </div>

          {/* block 4 */}
          <div className="block-animate-on-scroll flex flex-col md:flex-row-reverse justify-center md:space-x-8 items-start px-4 py-8 bg-white">
            <img
              src="src/assets/info3.png"
              alt="Block 4"
              className="p-4 h-[300px] sm:h-[400px] md:h-[500px]"
            />
            <div className="pt-16">
              <Card className="w-[70vh] h-[300px] rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Hỗ Trợ 24/7</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường. Với khả năng giám sát tự động và cập nhật liên tục, bot đảm bảo bạn không bỏ lỡ bất kỳ cơ hội đầu tư nào. Dù ngày hay đêm, bot vẫn duy trì hiệu suất tối ưu, giúp bạn phản ứng nhanh chóng trước mọi thay đổi và đưa ra quyết định chính xác.
                </p>
              </Card>
            </div>
          </div>

          <div className="mx-8 items-center">

            <h2 className="text-2xl text-center font-bold text-black mb-6 mt-24">
              Bảng Giá Các Gói Bot
            </h2>

            {loading && <p className="text-black text-center">Đang tải dữ liệu...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && (
              <Table
                columns={columns}
                dataSource={dataSource}
                components={{
                  header: {
                    cell: (props: any) => (
                      <th
                        {...props}
                        style={{
                          textAlign: 'center',
                          padding: '12px 8px',
                          backgroundColor: '#f0f0f0',
                          fontWeight: 'bold',
                        }}
                      />
                    ),
                  },
                  body: {
                    cell: (props: any) => ( 
                      <td
                        {...props}
                        style={{
                          textAlign: 'center',
                          padding: '12px 8px',
                        }}
                      />
                    ),
                  },
                }}
                bordered
                pagination={{ pageSize: 5 }} 
              />
            )}
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