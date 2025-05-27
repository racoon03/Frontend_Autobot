import React, { useState } from "react";
import { Select, DatePicker } from "antd";
//import moment from "moment";

const { Option } = Select;

function PersonalInfomation() {
  const [profitFilterType, setProfitFilterType] = useState<string>("all");
  const [profitDate, setProfitDate] = useState<moment.Moment | null>(null);// eslint-disable-line
    //vo hieu hoa bien chua can dung

  const [serviceFilterType, setServiceFilterType] = useState<string>("all");
  const [serviceDate, setServiceDate] = useState<moment.Moment | null>(null);// eslint-disable-line

  const handleProfitFilterChange = (value: string) => {
    setProfitFilterType(value);
    setProfitDate(null);
  };

  const handleProfitDateChange = (date: moment.Moment | null) => {
    setProfitDate(date);
  };

  const handleServiceFilterChange = (value: string) => {
    setServiceFilterType(value);
    setServiceDate(null);
  };

  const handleServiceDateChange = (date: moment.Moment | null) => {
    setServiceDate(date);
  };

  return (
    <div className="bg-[#1a2a44] text-white font-sans min-h-screen px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Info + Robot */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
          {/* Left - Info */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Thông tin tài khoản */}
            <div>
              <h1 className="text-[#00c4ff] text-2xl font-bold mb-2">THÔNG TIN TÀI KHOẢN</h1>
              <div className="bg-[#2a3b5a] rounded-lg p-4 space-y-1">
                <p>Tên: Minh</p>
                <p>Số dư tài khoản: 0587398313</p>
                <p>Email: ducminh200092@gmail.com</p>
              </div>
            </div>

            {/* Lợi nhuận*/}
            <div>
              <h1 className="text-[#00c4ff] text-2xl font-bold mb-2">LỢI NHUẬN</h1>
              <div className="mb-3">
                <Select value={profitFilterType} style={{ width: 160 }} onChange={handleProfitFilterChange}>
                  <Option value="all">Tất cả</Option>
                  <Option value="year">Theo năm</Option>
                  <Option value="month">Theo tháng</Option>
                  <Option value="day">Theo ngày</Option>
                </Select>
                {profitFilterType === 'year' && <DatePicker picker="year" onChange={handleProfitDateChange} className="ml-3" />}
                {profitFilterType === 'month' && <DatePicker picker="month" onChange={handleProfitDateChange} className="ml-3" />}
                {profitFilterType === 'day' && <DatePicker onChange={handleProfitDateChange} className="ml-3" />}
              </div>

              <div className="bg-[#2a3b5a] rounded-lg shadow-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#00c4ff] text-[#1a2a44]">
                    <tr>
                      <th className="p-2">NSLĐV</th>
                      <th className="p-2">GIÁ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center hover:bg-[#3a4b6a] transition">
                      <td className="p-2">10/07/2024 14:50:33</td>
                      <td className="p-2">100.000</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-center items-center py-2 gap-2">
                  <button className="bg-[#00c4ff] text-[#1a2a44] px-3 py-1 rounded">{"<"}</button>
                  <span>1 trên 14</span>
                  <button className="bg-[#00c4ff] text-[#1a2a44] px-3 py-1 rounded">{">"}</button>
                </div>
                <div className="text-right text-sm italic pr-2 py-2">
                  <p>Tổng lợi nhuận: 100.000 VND</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Robot */}
          <div className="w-full lg:w-1/3 flex-shrink-0 self-center">
            <img
              src="/src/assets/iconbot.png"
              alt="Robot"
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Bottom Section: Gói dịch vụ */}
        <div>
          <h1 className="text-[#00c4ff] text-2xl font-bold mb-4">GÓI DỊCH VỤ</h1>
          <div className="mb-3">
            <Select value={serviceFilterType} style={{ width: 160 }} onChange={handleServiceFilterChange}>
              <Option value="all">Tất cả</Option>
              <Option value="year">Theo năm</Option>
              <Option value="month">Theo tháng</Option>
              <Option value="day">Theo ngày</Option>
            </Select>
            {serviceFilterType === 'year' && <DatePicker picker="year" onChange={handleServiceDateChange} className="ml-3" />}
            {serviceFilterType === 'month' && <DatePicker picker="month" onChange={handleServiceDateChange} className="ml-3" />}
            {serviceFilterType === 'day' && <DatePicker onChange={handleServiceDateChange} className="ml-3" />}
          </div>

          <div className="bg-[#2a3b5a] rounded-lg shadow-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#00c4ff] text-[#1a2a44] text-center">
                <tr>
                  <th className="p-3">Ngày Thanh Toán</th>
                  <th className="p-3">Giá</th>
                  <th className="p-3">Ngày Bắt Đầu</th>
                  <th className="p-3">Ngày Kết Thúc</th>
                  <th className="p-3">Trạng Thái Thanh Toán</th>
                  <th className="p-3">Trạng Thái Gói</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="hover:bg-[#3a4b6a] transition">
                  <td className="p-3">27/05/2025</td>
                  <td className="p-3">100.000 VND</td>
                  <td className="p-3">27/05/2025</td>
                  <td className="p-3">27/06/2025</td>
                  <td className="p-3">
                    <button className="bg-green-600 px-4 py-1 rounded font-medium">Đã Thanh Toán</button>
                  </td>
                  <td className="p-3">
                    <button className="bg-green-500 px-4 py-1 rounded font-medium">Hoạt Động</button>
                  </td>
                </tr>
                <tr className="hover:bg-[#3a4b6a] transition">
                  <td className="p-3">27/04/2025</td>
                  <td className="p-3">150.000 VND</td>
                  <td className="p-3">27/04/2025</td>
                  <td className="p-3">27/05/2025</td>
                  <td className="p-3">
                    <button className="bg-orange-500 px-4 py-1 rounded font-medium">Chưa Thanh Toán</button>
                  </td>
                  <td className="p-3">
                    <button className="bg-red-500 px-4 py-1 rounded font-medium">Hết Hạn</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfomation;