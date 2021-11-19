import { CloseOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LoginStyle } from './loginStyle';
import Forgot from '../modal-forgotpassword/forgot';
import { TitleStyle } from '../title_component/title-style';
import Register from '../modal-register/register';


const Login = ({closeModal, handleCloseModal, setCloseModal}) => {

    // mở modal quên mật khẩu
    const [openModalForgot, setOpenModalForgot] = useState(false);

    // đóng modal quên mật khẩu
    const [closeModalForgot, setcloseModalForgot] = useState("hide-modal");


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    // mở modal đăng ký
    const [openModalRegister, setOpenModalRegister] = useState(false);

    const [closeModalRegister, setcloseModalRegister] = useState("hide-modal");

    const handleOpenModal = (e) => {
        e.preventDefault();
        setOpenModalForgot(true)
        setCloseModal("hide-modal");
        setcloseModalForgot("modal");
    }

    const handleCloseModalForgot = () => {
        setcloseModalForgot("hide-modal");
    }

    const [state, setState] = useState("span");
    const [state2, setState2] = useState("span2");

    
    const ChangeBtn = (e) => {
        e.preventDefault();
        setState("span");
        setOpenModalRegister(false);
        setCloseModal("modal");
    };
    const ChangeBtn2 = (e) => {
        e.preventDefault();
        setState2("span2");
        setOpenModalRegister(true);
        setCloseModal("hide-modal");
        setcloseModalRegister("modal");
    };
    return (
        <LoginStyle>
            <div className="container">
                <div className={closeModal}>
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
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>                                   
                                        <Checkbox>Ghi nhớ</Checkbox>
                                    </Form.Item>
                                    <Link className="login-form-forgot" to="" onClick={handleOpenModal}>
                                        Quên mật khẩu
                                    </Link>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                            </Form>
        
                        </div>
                        <span className="close-modal" onClick={handleCloseModal}><CloseOutlined /></span>
                    </div>
                </div>
            </div>

            {openModalForgot ? <Forgot closeModalForgot={closeModalForgot} handleCloseModalForgot={handleCloseModalForgot} /> : "" }

            {openModalRegister ? <Register closeModalRegister={closeModalRegister} setcloseModalRegister={setcloseModalRegister} setCloseModal={setCloseModal}/> : "" }
        </LoginStyle>
    )
}

export default Login;

