import {
  FacebookFilled,
  GooglePlusSquareFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../../config/app.config";
import { LoginAction } from "../../../redux/action/user.action";
import authService from "../../../serivces/auth.service";
import { LoginStyle } from "./loginStyle";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const userSelector = useSelector((state) => state.user);
  console.log(userSelector);
  if (userSelector.isLogin) {
    history.replace("/");
  }

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const rs = await authService.login({
        username: values.email,
        password: values.password,
      });
      if (rs.status === "success") {
        dispatch(LoginAction(rs.data));
        message.success(`Hi, ${rs.data.full_name}`);
        message.success(`Welcome to Poly Cinema`);
        history.replace("/");
      } else {
        message.error("Sai username hoặc mật khẩu !!!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <LoginStyle>
      <div className="container_custom">
        <div className="container_background">
          <div className="form_cotainer">
            <h3 className="title">ĐĂNG NHẬP</h3>
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
                    message: "Chưa nhập email!",
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
                    message: "Chưa nhập mật khẩu!",
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={isLoading}
                >
                  Đăng nhập
                </Button>
              </Form.Item>

              <Link className="login-form-forgot" to="/forgot">
                Quên mật khẩu ?
              </Link>
              <div className="text_register">
                <span>
                  Bạn mới tham gia <b>Poly Cinema</b> ?
                </span>
                <Link to={`${AUTH_PREFIX_PATH}/register`}>
                  Đăng ký ngay !!!
                </Link>
              </div>
              <div className="login_facebook mt-4 ">
                <Space align="center" className="w-100 justify-content-center">
                  <Link to="">
                    <Button icon={<FacebookFilled />} type="primary">
                      Facebook
                    </Button>
                  </Link>
                  <Link to="">
                    <Button
                      icon={<GooglePlusSquareFilled />}
                      type="primary"
                      danger
                    >
                      Google
                    </Button>
                  </Link>
                </Space>
              </div>
              <div className="text-center">
                <Link to="/">
                  <Button type="link">Back to home</Button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="logo">
          <Link to="/">POLY CINEMA</Link>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
