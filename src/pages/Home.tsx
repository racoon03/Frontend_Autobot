//import React from 'react';
//import Slider from 'react-slick';
import { Button, Card, message } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { paymentService } from "../services/paymentService";
import { authService } from "../services/authService";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { priceBotService, type PriceBot } from "../services/priceBotService";

const carouselImages = [
  "./src/assets/info6.png",
  "./src/assets/info1.png",
  "./src/assets/info2.png",
  "./src/assets/info3.png",
];

const carouselHeightClass = "h-[300px] sm:h-[400px] md:h-[500px] w-[1000px]";

interface SimpleImageCarouselProps {
  images: string[];
  heightClass?: string;
  autoPlayInterval?: number;
}

const SimpleImageCarousel: React.FC<SimpleImageCarouselProps> = ({
  images,
  heightClass = "h-64",
  autoPlayInterval,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const isLastSlide = prevIndex === images.length - 1;
      return isLastSlide ? 0 : prevIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (autoPlayInterval && autoPlayInterval > 0 && images.length > 1) {
      const timer = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlayInterval, images.length, goToNext]);

  if (!images || images.length === 0) {
    return (
      <div
        className={`w-full ${heightClass} bg-gray-700 flex items-center justify-center text-gray-400 rounded-lg`}
      >
        No images to display.
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heightClass} rounded-lg overflow-hidden shadow-xl`}
    >
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500 ease-in-out"
      ></div>
    </div>
  );
};

//--------------------------------------------------------------------------------------------------

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [priceBots, setPriceBots] = useState<PriceBot[]>([]);
  const [loading, setLoading] = useState(true);
  const autoPlayTime = 3000;

  useEffect(() => {
    const user = authService.getCurrentUser();
    setIsLoggedIn(!!user);

    const fetchPriceBots = async () => {
      try {
        const data = await priceBotService.getAllPriceBots();
        console.log(data);
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
        cancelUrl: `${window.location.origin}/cancel`, // URL khi hủy thanh toán
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
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Đã xảy ra lỗi khi tạo liên kết thanh toán.";
      message.error(errorMessage);
      console.error("Lỗi khi thanh toán:", error);
    }
  };

  //------------------------------------------------------------------------------------------------------------------------------
  const processStepsData = [
    {
      id: 1,
      icon: "🚀",
      title: "Giao Dịch Tự Động Và Linh Hoạt",
      content:
        "Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn.Bot không chỉ giúp bạn giao dịch tự động mà còn điều chỉnh lệnh linh hoạt theo biến động thị trường. Với khả năng cập nhật liên tục, bot đảm bảo hiệu suất tối ưu và giúp bạn tận dụng mọi cơ hội đầu tư.",
    },
    {
      id: 2,
      icon: "🚀",
      title: "Tự động thông báo",
      content:
        "Hệ thống tự động gửi cảnh báo tín hiệu đến người dùng giúp không bỏ lỡ cơ hội. Với công nghệ cảnh báo theo thời gian thực, bot sẽ thông báo ngay khi có tín hiệu quan trọng. Bạn có thể nhận thông báo qua nền tảng khác nhau, đảm bảo luôn cập nhật diễn biến thị trường nhanh chóng.",
    },
    {
      id: 3,
      icon: "🚀",
      title: "Hỗ Trợ 24/7",
      content:
        "Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường. Bất kể ngày hay đêm, bot luôn sẵn sàng theo dõi thị trường, giúp bạn không bỏ lỡ bất kỳ cơ hội đầu tư nào. Hệ thống liên tục cập nhật dữ liệu, đưa ra quyết định nhanh chóng và tối ưu hóa chiến lược giao dịch.",
    },
  ];

  interface ProcessStepCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
  }

  const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
    icon,
    title,
    content,
  }) => {
    return (
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-start space-x-4 md:space-x-5">
          <div className="flex-shrink-0 text-pink-500 text-3xl w-10 h-10 flex items-center justify-center mt-1">
            <span className="text-4xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans">
      {/*deoo biet sua sao cho vua */}
      <div className="bg-gray-200 text-gray-700 h-[75vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/*ben trai */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              HIỆU SUẤT ĐẦU TƯ CAO
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 mb-8 max-w-xl mx-auto lg:mx-0">
              Tự động giao dịch phái sinh
            </p>
            {!isLoggedIn && (
              <div className="flex justify-start gap-4">
                <Link to="/login">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Đăng nhập
                  </Button>
                </Link>

                <Link to="/register">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Đăng ký
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* ben phai */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="p-4 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
              <SimpleImageCarousel
                images={carouselImages}
                heightClass={carouselHeightClass}
                autoPlayInterval={autoPlayTime}
              />
            </div>
          </div>
        </div>
      </div>

      {/* tinh nang chinh*/}

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mb-20">
          <h2 className="text-center md:text-4xl font-bold text-gray-700 mb-10">
            Tính Năng Hệ Thống
          </h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* cot trai */}
            <div className="lg:w-5/12 xl:w-1/2 w-full px-4 py-8">
              <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Tối ưu hóa giao dịch với công nghệ tiên tiến
              </h2>
              <p className="text-left text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Hệ thống bot trading của chúng tôi giúp bạn giao dịch một cách
                tự động, hiệu quả và chính xác. Được thiết kế với các thuật toán
                hiện đại, bot có khả năng nhận diện tín hiệu thị trường, đặt
                lệnh nhanh chóng và theo dõi trạng thái giao dịch theo thời gian
                thực.
              </p>
              <p className="mt-4 text-left text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Các tính năng nổi bật: Giao dịch tự động: Bot sẽ phân tích xu
                hướng thị trường và thực hiện giao dịch theo các tín hiệu thông
                minh. Quản lý vị thế: Tích hợp chức năng hủy lệnh, đảo chiều vị
                thế và chốt lời theo từng chiến lược đặt trước. Theo dõi thị
                trường: Hiển thị tín hiệu giá, trạng thái lệnh và cập nhật danh
                sách giao dịch liên tục. Bảo mật và đăng nhập an toàn: Hệ thống
                xác thực giúp bạn đăng nhập và quản lý tài khoản một cách an
                toàn.
              </p>
            </div>

            {/* cot phai */}
            <div className="lg:w-7/12 xl:w-1/2 w-full flex flex-col space-y-8 md:space-y-10">
              {processStepsData.map((step) => (
                <ProcessStepCard
                  key={step.id}
                  icon={step.icon}
                  title={step.title}
                  content={step.content}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*bang gia dich vu */}
      <section className="bg-gray-300 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl font-bold text-gray-700 mb-10">
            Bảng giá dịch vụ
          </h2>

          {loading ? (
            <p className="text-center text-white">
              Đang tải dữ liệu gói dịch vụ...
            </p>
          ) : priceBots.length === 0 ? (
            <p className="text-center text-white">
              Không có dữ liệu gói dịch vụ.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
              {priceBots.map((pkg, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl shadow-lg w-full max-w-xs transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="text-center p-4">
                    {pkg.discount > 0 && (
                      <div className="relative w-14 h-14 ml-auto">
                        <div className="absolute inset-0 bg-red-600 rounded-full border-4 border-white border-dashed flex items-center justify-center">
                          <div className="text-right text-white">
                            <p className="text-xs font-bold">Giảm</p>
                            <p className="text-sm font-bold">{`${pkg.discount}%`}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <img
                      src="src/assets/iconbot.png"
                      alt="bot"
                      className="w-32 h-32 mx-auto mb-4"
                    />

                    <h3 className="text-xl font-semibold mb-2">{`${pkg.month} Tháng`}</h3>

                    <p className="text-lg font-bold text-green-700 mb-4">
                      {pkg.price.toLocaleString("vi-VN")} VND
                    </p>

                    {pkg.description && (
                      <p className="text-sm text-gray-600 mb-4">
                        {pkg.description}
                      </p>
                    )}

                    {isLoggedIn && (
                      <Button
                        type="primary"
                        className="bg-[#22D3EE]"
                        onClick={() =>
                          handleBuyNow(pkg.month, pkg.botTradingId)
                        }
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
