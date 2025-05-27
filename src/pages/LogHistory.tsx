import React, { useState } from 'react';
import { Select, DatePicker, Table } from 'antd';
import moment from 'moment';

const { Option } = Select;

const LogHistory: React.FC = () => {
  const [filterType, setFilterType] = useState('all'); // 'all', 'year', 'month', 'day'
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const handleFilterChange = (value: string) => {
    setFilterType(value);
    setSelectedDate(null); // Reset date when filter type changes
  };

  const handleDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
    // Here you would typically fetch data based on the selected date and filterType
    console.log('Selected date:', date ? date.format() : 'none', 'Filter type:', filterType);
  };

  // Placeholder data for the table (replace with actual data fetching later)
  const columns = [
    { title: 'THỜI GIAN', dataIndex: 'time', key: 'time' },
    { title: 'LOẠI LỆNH', dataIndex: 'type', key: 'type' },
    { title: 'GIÁ CHỐT', dataIndex: 'closePrice', key: 'closePrice' },
    { title: 'SL', dataIndex: 'sl', key: 'sl' },
    { title: 'SỐ HỢP ĐỒNG', dataIndex: 'contract', key: 'contract' },
    { title: 'GIÁ KHỚP', dataIndex: 'Price', key: 'matchPrice' },
    { title: 'LỢI NHUẬN', dataIndex: 'profit', key: 'profit' },
  ];

  const data = [
    // Example data rows (replace with actual data)
    { key: '1', time: '10/07/2024 14:30:53', type: 'SHORT', closePrice: 1324.2, sl: '-', contract: 1324.2, matchPrice: 100.000, profit: 300.000 },
    { key: '2', time: '10/07/2024 14:30:53', type: 'SHORT', closePrice: 1324.2, sl: '-', contract: 1324.2, matchPrice: 100.000, profit: 300.000 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2941a0' }} className='text-2xl font-bold mb-2'>LỊCH SỬ GIAO DỊCH</h1>

      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Select defaultValue="all" style={{ width: 120 }} onChange={handleFilterChange}>
          <Option value="all">Tất cả</Option>
          <Option value="year">Theo năm</Option>
          <Option value="month">Theo tháng</Option>
          <Option value="day">Theo ngày</Option>
        </Select>

        {filterType === 'year' && (
          <DatePicker picker="year" onChange={handleDateChange} />
        )}
        {filterType === 'month' && (
          <DatePicker picker="month" onChange={handleDateChange} />
        )}
        {filterType === 'day' && (
          <DatePicker onChange={handleDateChange} />
        )}
      </div>

      <Table columns={columns} dataSource={data} pagination={false} /> {/* Add pagination as needed */}
    </div>
  );
};

export default LogHistory; 