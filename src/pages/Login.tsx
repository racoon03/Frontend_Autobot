import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Đăng nhập:', values);
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
      {/* KHỐI LOGIN CHÍNH */}
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

          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#111827' }}>Đăng nhập</h2>
          <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6b7280' }}>
            Chào mừng bạn đến với Autobot
          </p>

          <Form layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
              <Input
                size="large"
                placeholder="Số điện thoại"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Đăng nhập
              </Button>
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b7280' }}>
              <span>
                Bạn chưa có tài khoản?{' '}
                <a href="#" style={{ color: '#2563eb', fontWeight: 500 }}>Đăng ký</a>
              </span>
              <a href="#" style={{ color: '#2563eb', fontWeight: 500 }}>Quên mật khẩu</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
