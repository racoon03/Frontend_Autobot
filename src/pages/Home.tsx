//import React from 'react';
import Slider from 'react-slick';
import { Button, Card, message } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { paymentService } from '../services/paymentService';
import { authService } from '../services/authService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { priceBotService, type PriceBot } from '../services/priceBotService';

const features = [
  {
    title: 'Dễ sử dụng',
    content:
      'Giao diện trực quan, tự động đưa ra tín hiệu mua bán rõ ràng giúp nhà đầu tư ra quyết định trong thời gian ngắn nhất.',
  },
  {
    title: 'Bộ lọc chất lượng',
    content:
      'Lọc tín hiệu MUA/BÁN sớm nhất, realtime cho các mã thuận lợi cao nhất, đảm bảo tối ưu hóa lợi nhuận trên vốn đầu tư ban đầu.',
  },
  {
    title: 'Tự động thông báo',
    content:
      'Hệ thống tự động gửi cảnh báo tín hiệu đến người dùng qua nhiều kênh: Email, Zalo, Telegram, giúp không bỏ lỡ cơ hội.',
  },
  {
    title: 'Giao dịch tự động và linh hoạt',
    content:
      'Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn.',
  },
  {
    title: 'Hỗ Trợ 24/7',
    content:
      'Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường.',
  }
];

const FeatureCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#2E3A59] py-16 text-white text-center">
      <h2 className="text-white md:text-4xl font-bold mb-10 text-[#00D0FF]">Tính năng của hệ thống</h2>
      <Slider {...settings} className="feature-carousel">
        {features.map((item, index) => (
          <div key={index} className="px-4 transform-style">
            <Card
              className="rounded-2xl shadow-xl bg-[#668cff] text-white text-left mx-auto feature-card"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.content}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};


const HomePage = () => {

  //check login-------------------------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [priceBots, setPriceBots] = useState<PriceBot[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const user = authService.getCurrentUser();
      setIsLoggedIn(!!user);

  const fetchPriceBots = async () => {
        try {
          const data = await priceBotService.getAllPriceBots(); console.log(data);
          setPriceBots(data);
        } catch (error) {
          console.error("Error fetching price bots:", error);
          message.error("Không thể tải dữ liệu gói dịch vụ");
        } finally {
          setLoading(false);
        }
      };

    fetchPriceBots();
  }, []);


  const handleBuyNow = async (month: number, botTradingId: number) => {
  try {
    // 1. Kiểm tra xem người dùng đã đăng nhập chưa
    const user = authService.getCurrentUser();
    if (!user) {
      message.warning("Vui lòng đăng nhập để tiếp tục thanh toán.");
      return;
    }

    // 2. Chuẩn bị dữ liệu yêu cầu để tạo link thanh toán
    const request = {
      userId: user.userId,
      month: month,
      botTradingId: botTradingId,
      returnUrl: `${window.location.origin}/success`, // URL khi thanh toán thành công
      cancelUrl: `${window.location.origin}/cancel`,   // URL khi hủy thanh toán
    };
    // 3. Gọi API để tạo link thanh toáns
    const response = await paymentService.createPaymentLink(request);
    console.log(response);
    // 4. Chuyển hướng người dùng đếns trang thanh toán
    if (response) {
      // Mở link thanh toán trong một tab mới
      window.open(response.data, "_blank");
    } else {
      message.error("Không nhận được liên kết thanh toán từ máy chủ.");
    }
  } catch (error: any) {
    // 5. Xử lý lỗi nếu có
    const errorMessage = error.response?.data?.message || error.message || 'Đã xảy ra lỗi khi tạo liên kết thanh toán.';
    message.error(errorMessage);
    console.error('Lỗi khi thanh toán:', error);
  }
};
  


  return (
    <div className="font-sans">
      
      <header className="bg-[#0D1A3D] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HIỆU SUẤT ĐẦU TƯ CAO</h1>
        <p className="text-xl mb-6">Tự động báo điểm mua bán phái sinh</p>
      {!isLoggedIn && (
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <Button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium px-4">
              Đăng nhập
            </Button>
          </Link>

          <Link to="/register">
            <Button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium px-6">
              Đăng ký
            </Button>
          </Link>
        </div>
      )}
      </header>

      
      <FeatureCarousel />

            <section className="bg-[#0D1A3D] py-16 text-center">
        <div className="container mx-auto px-4"> 
          <h2 className="text-white md:text-4xl font-bold text-green-700 mb-10">Bảng giá dịch vụ</h2>
          
          {loading ? (
            <p className="text-center text-white">Đang tải dữ liệu gói dịch vụ...</p>
          ) : priceBots.length === 0 ? (
            <p className="text-center text-white">Không có dữ liệu gói dịch vụ.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
              {priceBots.map((pkg, idx) => (
                <Card key={idx} className="rounded-2xl shadow-lg w-full max-w-xs"> 
                  <div className="text-center p-4">
                    <img src="src/assets/iconbot.png" alt="bot" className="w-32 h-32 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{`${pkg.month} Tháng`}</h3>
                    <p className="text-lg font-bold text-green-700 mb-4">
                      {pkg.price.toLocaleString('vi-VN')} VND
                      {pkg.discount > 0 && (
                        <span className="ml-2 text-sm text-red-500">{`(Giảm ${pkg.discount}%)`}</span>
                      )}
                    </p>
                    {pkg.description && (
                      <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                    )}
                    {isLoggedIn && (
                      <Button 
                        type="primary" 
                        className="bg-[#22D3EE]"
                        onClick={() => handleBuyNow(pkg.month, pkg.botTradingId)}
                      >
                        Mua ngay
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
export default HomePage;
