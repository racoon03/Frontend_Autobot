import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined, SafetyOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { useMessage } from '../App';

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const antMessage = useMessage();

  const [showVerificationField, setShowVerificationField] = useState(false);
  const [emailToVerify, setEmailToVerify] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialRegisterValues, setInitialRegisterValues] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    if (!showVerificationField) {
      setIsSubmitting(true);
      setInitialRegisterValues(values);

      try {
        await authService.sendRegisterCode(values.email);
        setEmailToVerify(values.email);
        setShowVerificationField(true);
        if (antMessage) {
          antMessage.success(`Mã xác nhận đã được gửi đến ${values.email}. Vui lòng kiểm tra email của bạn.`);
        }
      } catch (error: any) {
        console.error('Error sending verification code:', error);
        if (antMessage) {
          antMessage.error(error.message || 'Gửi mã xác nhận thất bại.');
        }
      } finally {
        setIsSubmitting(false);
      }

    } else {
      setIsSubmitting(true);
      try {
        const registrationData = {
          ...initialRegisterValues,
          token: values.verificationCode
        };
        
        await authService.register(
          registrationData.fullName,
          registrationData.email,
          registrationData.phone,
          registrationData.password,
          registrationData.token
        );

        if (antMessage) {
          antMessage.success('Đăng ký thành công! Vui lòng đăng nhập.');
        }
        navigate('/login');

      } catch (error: any) {
        console.error('Error verifying code or finalizing registration:', error);
        if (antMessage) {
          antMessage.error(error.message || 'Xác nhận mã thất bại.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleSendCode = async () => {
    if (!emailToVerify) {
      if (antMessage) {
        antMessage.warning('Vui lòng hoàn thành bước 1 trước.');
      }
      return;
    }
    setIsSendingCode(true);
    try {
      await authService.sendRegisterCode(emailToVerify);
      if (antMessage) {
        antMessage.success(`Mã xác nhận đã được gửi lại đến ${emailToVerify}.`);
      }
    } catch (error: any) {
      console.error('Error resending verification code:', error);
      if (antMessage) {
        antMessage.error(error.message || 'Gửi lại mã xác nhận thất bại.');
      }
    } finally {
      setIsSendingCode(false);
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
          <Link to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img src="src\assets\iconbothi.jpg" alt="logo" style={{ width: '60px'}} />
              <h1 style={{ fontFamily: 'Orbitron, sans-serif' , fontSize: '26px', margin: 0, fontWeight: 400, color: '#111827' }}>
                TradingBot
              </h1>
            </div>
          </Link>

          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#111827' }}>Đăng ký</h2>
          <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6b7280' }}>
            {showVerificationField ? `Mã xác nhận đã gửi đến ${emailToVerify}` : 'Tạo tài khoản mới tại Tradingbot'}
          </p>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            {!showVerificationField && (
              <>
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
              </>
            )}

            {showVerificationField && (
              <Form.Item
                name="verificationCode"
                rules={[{ required: true, message: 'Vui lòng nhập mã xác nhận!' }]}
              >
                <Input
                  size="large"
                  placeholder="Mã xác nhận"
                  prefix={<SafetyOutlined />}
                  addonAfter={<Button type="primary" onClick={handleSendCode} loading={isSendingCode}>Gửi mã</Button>}
                />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={isSubmitting}>
                {showVerificationField ? 'Xác nhận đăng ký' : 'Đăng ký'}
              </Button>
            </Form.Item>

            {!showVerificationField && (
              <div style={{ display: 'flex', justifyContent: 'center', fontSize: '13px', color: '#6b7280' }}>
                <span>
                  Đã có tài khoản?{' '}
                  <Link to="/login" style={{ color: '#2563eb', fontWeight: 500 }}>Đăng nhập</Link>
                </span>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register; 