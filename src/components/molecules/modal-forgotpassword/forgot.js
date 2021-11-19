import { MailOutlined,CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from "react";
import Title from "../title_component/title";
import { ForgotStyle } from "./forgotStyle";



const Forgot = ({closeModalForgot, handleCloseModalForgot}) => {
    const [form] = Form.useForm();
    

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <ForgotStyle>
            <div className="container">
                <div className={closeModalForgot}>
                    <div className="box-register">
                        <div className="box-content">
                            <Title title1={"Quên mật khẩu"}/>
                            <p className="title-help">Vui lòng nhập email tài khoản của bạn. Chúng tôi sẽ giúp bạn lấy lại tài khoản</p>
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
                                        />
                                    </Form.Item>
                                    
                        
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Gửi mã xác nhận qua email
                                        </Button>
                                    </Form.Item>
                                </Form>
        
                        </div>
                        <span onClick={handleCloseModalForgot} className="close-modal"><CloseOutlined /></span>
                    </div>
                </div>
            </div>
        </ForgotStyle>
    )
}

export default Forgot;

