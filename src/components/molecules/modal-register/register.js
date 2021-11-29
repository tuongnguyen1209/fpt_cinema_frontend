import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../../config/app.config";
import userService from "../../../serivces/user.service";
import { RegisterStyle } from "./registerStyle";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    setIsLogin(true);
    const user = {
      full_name: values.fullname,
      email: values.email,
      phone: values.phone_number,
      password: values.password,
      status: "1",
    };
    try {
      const rs = await userService.create(user);
      console.log(rs);
      message.success("Tạo tài khoản thành công");
      history.replace(`${AUTH_PREFIX_PATH}/login`);
    } catch (error) {
      console.log(error.message);
      message.error("Email đã tồn tại");
    }
    setIsLogin(false);
  };

  return (
    <RegisterStyle>
      <div className="container_custom">
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
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Chưa nhập họ và tên!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
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
                    message: "Chưa nhập số điện thoại!",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
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
                    message: "Chưa nhập email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
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
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu không khớp!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error("Mật khẩu xác thực không khớp")
                      );
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
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Bạn chưa đồng ý!")),
                  },
                ]}
              >
                <Checkbox>
                  Tôi đã đọc và đồng ý với điều khoản của chương trình
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={isLogin}
                >
                  Đăng ký
                </Button>
              </Form.Item>
              <div className="prev_login">
                <Link to={`${AUTH_PREFIX_PATH}/login`}>
                  <ArrowLeftOutlined />
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="logo">
          <Link to="/">POLY CINEMA</Link>
        </div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
