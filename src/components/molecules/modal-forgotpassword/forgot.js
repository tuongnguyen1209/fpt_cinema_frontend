import { ArrowLeftOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
import { ForgotStyle } from "./forgotStyle";



const Forgot = () => {
    const [form] = Form.useForm();
    

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <ForgotStyle>
            <div className="container">
                    <div className="container_background">
                        <div className="form_cotainer">
                            <h3 class="title">Quên mật khẩu</h3>
                            <p className="note_forgot">Điền địa chỉ email của bạn và chúng tôi sẽ gửi thông tin để giúp bạn lấy lại mật khẩu!</p>
                                <Form
                                    form={form}
                                    name="register"
                                    onFinish={onFinish}
                                    scrollToFirstError
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
                                        prefix={<MailOutlined  className="site-form-item-icon" />} 
                                        type="email"
                                        placeholder="Nhập email của bạn" 
                                        className="input_element"
                                        />
                                    </Form.Item>
                    
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Gửi mã xác nhận qua email
                                        </Button>
                                    </Form.Item>
                                    <div className="prev_login"><Link to="/login"><ArrowLeftOutlined /></Link></div>
                                </Form>
                        </div>
                    </div>
                    <div className="logo"><Link to="/">POLY CINEMA</Link></div>
                </div>
        </ForgotStyle>
    )
}

export default Forgot;

