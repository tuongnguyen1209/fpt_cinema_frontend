import { LockOutlined, UserOutlined,FacebookFilled} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
import { LoginStyle } from './loginStyle';


const Login = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    

    return (
        <LoginStyle>
            <div className="container">
                <div className="container_background">
                        <div className="form_cotainer">
                            <h3 class="title">ĐĂNG NHẬP</h3>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                >
                                <Form.Item
                                    name="email"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Chưa nhập email!',
                                    },
                                    ]}
                                >
                                    <Input 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    type="email"
                                    placeholder="Email"
                                    className="input_element"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Chưa nhập mật khẩu!',
                                    },
                                    ]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    className="input_element"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle >                                   
                                        <Checkbox>Ghi nhớ</Checkbox>
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Đăng nhập
                                    </Button>
                                </Form.Item>

                                <Form.Item>
                                    <Link className="login-form-forgot" to="/forgot">
                                        Quên mật khẩu ?
                                    </Link>
                                </Form.Item>

                                <div className="login_facebook"><FacebookFilled /><Link to="">Đăng nhập bằng tài khoản Facebook</Link></div>
                                <div className="text_register">
                                    <span>Bạn mới tham gia <b>Poly Cinema</b> ?</span>
                                    <Link to="/register">Đăng ký ngay !!!</Link>
                                </div>
                            </Form>
                        </div>
                                
                    </div>
                    <div className="logo"><Link to="/">POLY CINEMA</Link></div>
                </div>
        </LoginStyle>
    )
}

export default Login;

