import React from 'react';
import { Layout } from 'antd';
import TradingBotHeader from './Header';
import TradingBotFooter from './Footer';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom'; // 👈 Thêm Outlet

const DefaultLayout: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      <TradingBotHeader />
      <Content className="m-4 p-4 drop-shadow rounded-lg bg-white">
        <Outlet /> {/* 👈 Thay thế children */}
      </Content>
      <TradingBotFooter />
    </Layout>
  );
};

export default DefaultLayout;
