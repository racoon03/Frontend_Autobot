import { LockOutlined, UserOutlined, MailOutlined, SafetyOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Quên mật khẩu:', values);
    // Thêm logic xử lý quên mật khẩu ở đây
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6', // xám nền ngoài giống Figma
        fontFamily: 'system-ui, -apple-system, Helvetica, Arial, sans-serif',
      }}
    >
      {/* KHỐI CHÍNH */}
      <div
        style={{
          width: '900px',
          height: '550px',
          display: 'flex',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        }}
      >
        {/* TRÁI - ẢNH */}
        <div style={{ flex: 1, position: 'relative' }}>
          <img
            src="src\assets\1000_F_1369373417_m2Oa554rcYSDHPXowqTv2XnqbdfWhnJY.jpg"
            alt="bg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(30, 64, 175, 0.5)',
            }}
          />
        </div>

        {/* PHẢI - FORM */}
        <div
          style={{
            flex: 1,
            padding: '50px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <img src="src\assets\iconbothi.jpg" alt="logo" style={{ width: '60px'}} />
            <h1 style={{ fontFamily: 'Orbitron, sans-serif' , fontSize: '26px', margin: 0, fontWeight: 400, color: '#111827' }}>
              TradingBot
            </h1>
          </div>

          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#111827' }}>Quên mật khẩu</h2>
          <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6b7280' }}>
            Nhập email để nhận mã xác minh
          </p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!', type: 'email' }]}
            >
              <Input
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="verifyCode"
              rules={[{ required: true, message: 'Vui lòng nhập mã xác minh!' }]}
            >
              <Input
                size="large"
                placeholder="Mã xác minh"
                prefix={<SafetyOutlined />}
                addonAfter={<Button>Gửi mã</Button>}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Đặt lại mật khẩu
              </Button>
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b7280' }}>
              <Link to="/login" style={{ color: '#2563eb', fontWeight: 500 }}>Quay lại đăng nhập</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 