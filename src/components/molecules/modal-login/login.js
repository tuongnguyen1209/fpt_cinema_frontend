import { FacebookFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Space } from "antd";
import React, { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../../config/app.config";
import {
  FACEBOOK_APP_ID,
  GOOGL_AUTH_CLIENT_ID,
} from "../../../config/auth.config";
import { LoginAction } from "../../../redux/action/user.action";
import authService from "../../../serivces/auth.service";
import { LoginStyle } from "./loginStyle";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const userSelector = useSelector((state) => state.user);

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
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    // setShowloginButton(false);
    // setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  const responseFacebook = (response) => {
    console.log(response);
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
                  <ReactFacebookLogin
                    appId={FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    size="small"
                    callback={responseFacebook}
                    textButton=" Login Facebook"
                    icon={<FacebookFilled />}
                  />

                  {/* <Button
                      icon={<GooglePlusSquareFilled />}
                      type="primary"
                      danger
                    >
                      Google
                    </Button> */}
                  <GoogleLogin
                    clientId={GOOGL_AUTH_CLIENT_ID}
                    buttonText="LOGIN GOOGLE"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    className="btn-google"
                    style={{ color: "black" }}
                  />
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
