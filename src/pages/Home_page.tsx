//import React from 'react';
import Slider from 'react-slick';
import { Button, Card } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    title: 'Tự động cảnh báo',
    content:
      'Hệ thống tự động gửi cảnh báo tín hiệu đến người dùng qua nhiều kênh: Email, Zalo, Telegram, giúp không bỏ lỡ cơ hội.',
  },
];

const FeatureCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
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
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#00D0FF]">Tính năng của hệ thống</h2>
      <Slider {...settings} className="feature-carousel">
        {features.map((item, index) => (
          <div key={index} className="px-4 transform-style">
            <Card
              className="rounded-2xl shadow-xl bg-[#00C853] text-white text-left mx-auto feature-card"
              bodyStyle={{ padding: '2rem' }}
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
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-[#0D1A3D] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">HIỆU SUẤT ĐẦU TƯ CAO</h1>
        <p className="text-xl mb-6">Tự động báo điểm mua bán phái sinh</p>
        <div className="flex justify-center gap-4">
          <Button type="primary" className="bg-green-600 hover:bg-green-700 px-6">Đăng nhập</Button>
          <Button type="default" className="bg-yellow-400 hover:bg-yellow-500 px-6">Đăng ký</Button>
        </div>
      </header>

      {/* Feature Carousel Section */}
      <FeatureCarousel />

      {/* Pricing Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">Bảng giá dịch vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
          {[
            { name: 'Gói 1 tháng', price: '2.700.000 VND' },
            { name: 'Gói 3 tháng', price: '7.200.000 VND' },
            { name: 'Gói 6 tháng', price: '12.600.000 VND' },
            { name: 'Gói 12 tháng', price: '21.600.000 VND' },
          ].map((pkg, idx) => (
            <Card key={idx} className="rounded-2xl shadow-lg">
              <div className="text-center p-4">
                <img src="src/assets/iconbot.png" alt="bot" className="w-32 h- mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-lg font-bold text-green-700 mb-4">{pkg.price}</p>
                <Button type="primary" className="bg-green-600 hover:bg-green-700">Mua ngay</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
