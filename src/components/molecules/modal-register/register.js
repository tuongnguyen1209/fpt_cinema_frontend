import React, { useState } from "react";
import {RegisterStyle} from './registerStyle';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,MailOutlined ,PhoneOutlined,CloseOutlined} from '@ant-design/icons';
import { TitleStyle } from "../title_component/title-style";
import { Link } from "react-router-dom";


const Register = ({closeModalRegister ,setcloseModalRegister,setCloseModal}) => {

    console.log(closeModalRegister);

    const [form] = Form.useForm();
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [state, setState] = useState("span");
    const [state2, setState2] = useState("span2");

    
    const ChangeBtn = (e) => {
        e.preventDefault();
        setState("span");
        setCloseModal("modal")
        setcloseModalRegister("hide-modal");
    };

    const handleCloseModalRegister = () => {
        setcloseModalRegister("hide-modal");
    }
    const ChangeBtn2 = (e) => {
        e.preventDefault();
        setState2("span2");
    };

    return (
        <RegisterStyle>
            <div className="container">
                <div className={closeModalRegister}>
                    <div className="box-register">
                        <div className="box-content">
                        <TitleStyle >   
                             <div className="title">
                                <span className={state}>
                                    <Link to="" onClick={ChangeBtn}>
                                        Đăng nhập
                                    </Link>
                                </span>
                                <span className={state2}>
                                    <Link to="" onClick={ChangeBtn2}>
                                        Đăng ký
                                    </Link>
                                </span>
                                <div className="line">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </TitleStyle>
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
                                </Form>
        
                        </div>
                        {<span onClick={handleCloseModalRegister} className="close-modal"><CloseOutlined /></span>}
                    </div>
                </div>
            </div>
        </RegisterStyle>
    )
}

export default Register;

