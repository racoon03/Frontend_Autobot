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
    <>
      <Header className="bg-blue-900 text-white px-6 py-10 sticky top-0 z-50 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <img src="src/assets/iconbot.png" alt="logo" className="h-20" />
          <span className="text-2xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>TradingBot</span>
        </div>
        <div className='flex items-center space-x-4 w-full max-w-3xl'>
            <Menu
            mode="horizontal"
            theme="dark"
            className="bg-blue-900 border-none flex-1 justify-center custom-menu"
            items={items}
            />

            <div className="flex flex-col items-center justify-center space-y-1">
            <Avatar icon={<UserOutlined />} className="bg-blue-500 cursor-pointer" />
            <span className="text-sm font-semibold">Đăng nhập</span>
            </div>           
        </div>

      </Header>

      <style>{`
            .custom-menu .ant-menu-title-content {
                position: relative;
                display: inline-block;
                color: transparent;
                background-image: linear-gradient(90deg, white 0%, white 50%, #60a5fa 50%, #60a5fa 100%);
                background-size: 200% 100%;
                background-clip: text;
                -webkit-background-clip: text;
                transition: background-position 0.5s ease;
            }

            .custom-menu .ant-menu-item:hover .ant-menu-title-content {
                background-position: -100% 0;
            }

            .custom-menu .ant-menu-item-selected .ant-menu-title-content {
                background-position: -100% 0;
            }
      `}</style>
    </>
  );
}

export default TradingBotHeader;