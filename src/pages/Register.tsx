import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';

const Register: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Đăng ký:', values);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        fontFamily: 'system-ui, -apple-system, Helvetica, Arial, sans-serif',
      }}
    >
      {/* KHỐI REGISTER CHÍNH */}
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

          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#111827' }}>Đăng ký</h2>
          <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6b7280' }}>
            Tạo tài khoản mới tại Tradingbot
          </p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
            >
              <Input
                size="large"
                placeholder="Họ và tên"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email!' },
                  { type: 'email', message: 'Email không hợp lệ!' }
                ]}
                style={{ flex: 1 }}
              >
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<MailOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                style={{ flex: 1 }}
              >
                <Input
                  size="large"
                  placeholder="Số điện thoại"
                  prefix={<PhoneOutlined />}
                />
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                style={{ flex: 1 }}
              >
                <Input.Password
                  size="large"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật khẩu không khớp!'));
                    },
                  }),
                ]}
                style={{ flex: 1 }}
              >
                <Input.Password
                  size="large"
                  placeholder="Xác nhận mật khẩu"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Đăng ký
              </Button>
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '13px', color: '#6b7280' }}>
              <span>
                Đã có tài khoản?{' '}
                <a href="/login" style={{ color: '#2563eb', fontWeight: 500 }}>Đăng nhập</a>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register; 