import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const items = [
  { key: '1', label: 'Trang chủ' },
  { key: '2', label: 'Giới thiệu' },
  { key: '3', label: 'Backtest' },
  { key: '4', label: 'Bảng giá dịch vụ' },
  { key: '5', label: 'Tải extension' },
];

function TradingBotHeader() {
    return (
        <Header className="bg-blue-900 text-white px-6 py-10 sticky top-0 z-50 flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                    <img src="src\assets\iconbot.png" alt="logo" className="h-20" />
                    <span className="text-2xl font-bold text-white">TradingBot</span>
                </div>

                <Menu
                    mode="horizontal"
                    theme="dark"
                    className="bg-blue-900 border-none flex-1 justify-center"
                    items={items}
                />

                <Avatar icon={<UserOutlined />} className="bg-blue-500 cursor-pointer" />
        </Header>
    );
}

export default TradingBotHeader;