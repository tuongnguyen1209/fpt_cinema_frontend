import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
import { RegisterStyle } from './registerStyle';


const Register = () => {


    const [form] = Form.useForm();
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <RegisterStyle>
            <div className="container">
                    <div className="container_background">
                        <div className="form_cotainer">
                                <h3 class="title">ĐĂNG KÝ</h3>
                                <Form
                                    form={form}
                                    name="register"
                                    onFinish={onFinish}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                            name="username"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Chưa nhập họ và tên!',
                                            },
                                            ]}
                                        >
                                            <Input 
                                            prefix={<UserOutlined  className="site-form-item-icon" />} 
                                            type="text"
                                            placeholder="Họ và tên" 
                                            className="input_element"
                                            />
                                    </Form.Item>
                                    <Form.Item
                                            name="phone_number"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Chưa nhập số điện thoại!',
                                            },
                                            ]}
                                        >
                                            <Input 
                                            prefix={<PhoneOutlined  className="site-form-item-icon" />} 
                                            type="text"
                                            placeholder="Số điện thoại"
                                            className="input_element"
                                            />
                                    </Form.Item>
                                
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
                                        prefix={<MailOutlined  className="site-form-item-icon" />} 
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
                                        <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className="input_element"
                                        hasFeedback
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Mật khẩu không khớp!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                                }
                                
                                                return Promise.reject(new Error('Mật khẩu xác thực không khớp'));
                                            },
                                            }),
                                        ]}
                                    >
                                        <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        placeholder="Xác nhận mật khẩu"
                                        hasFeedback
                                        className="input_element"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                        {
                                            validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Bạn chưa đồng ý!')),
                                        },
                                        ]}
                                    >
                                        <Checkbox>
                                            Tôi đã đọc và đồng ý với điều khoản của chương trình
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Đăng ký
                                        </Button>
                                    </Form.Item>
                                    <div className="prev_login"><Link to="/login"><ArrowLeftOutlined /></Link></div>
                                </Form>
                        </div>
                    </div>
                    <div className="logo"><Link to="/">POLY CINEMA</Link></div>
                </div>
        </RegisterStyle>
    )
}

export default Register;

