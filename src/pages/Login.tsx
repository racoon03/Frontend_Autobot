import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { useMessage, useAuth } from '../App';
import { LOGIN_SUCCESS } from '../services/authActions';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const antMessage = useMessage();
  const auth = useAuth();
  const [form] = Form.useForm();

  if (!auth) {
    console.error("Auth context not available in Login page.");
    return null;
  }

  const { dispatch } = auth;

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check for remembered phone number in local storage
    const rememberedPhone = localStorage.getItem('rememberedPhone');
    if (rememberedPhone) {
      form.setFieldsValue({
        phone: rememberedPhone,
        remember: true, // Also check the remember me box
      });
    }
  }, [form]); // Add form to dependency array

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
      const userData = await authService.login(values.phone, values.password);

      dispatch({ type: LOGIN_SUCCESS, payload: { user: userData } });

      // Handle remember me
      if (values.remember) {
        localStorage.setItem('rememberedPhone', values.phone);
      } else {
        localStorage.removeItem('rememberedPhone');
      }

      if (antMessage) {
        antMessage.success('Đăng nhập thành công!');
      }
      navigate('/');

    } catch (error: any) {
      console.error('Login failed:', error);
      if (antMessage) {
        antMessage.error(error.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      }
    } finally {
      setIsSubmitting(false);
    }
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
          <Link to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img src="src\assets\iconbothi.jpg" alt="logo" style={{ width: '60px'}} />
              <h1 style={{ fontFamily: 'Orbitron, sans-serif' , fontSize: '26px', margin: 0, fontWeight: 400, color: '#111827' }}>
                TradingBot
              </h1>
            </div>
          </Link>

          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#111827' }}>Đăng nhập</h2>
          <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6b7280' }}>
            Chào mừng bạn đến với Tradingbot
          </p>

          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
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
              <Button type="primary" htmlType="submit" size="large" block loading={isSubmitting}>
                Đăng nhập
              </Button>
            </Form.Item>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b7280' }}>
              <span>
                Bạn chưa có tài khoản?{' '}
                <Link to="/register" style={{ color: '#2563eb', fontWeight: 500 }}>Đăng ký</Link>
              </span>
              <Link to="/forgot-password" style={{ color: '#2563eb', fontWeight: 500 }}>Quên mật khẩu</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;