import { BellTwoTone, DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { WrapHeader, WrapNotiItem } from "./headerAdmin.style";

const { Header } = Layout;

const menuDropdownUser = (
  <Menu>
    <Menu.Item key="0">
      <Link to="#">Trang cá nhân</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="#">Đổi mật khẩu</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to="#">Đăng xuất</Link>
    </Menu.Item>
  </Menu>
);
const menuNotification = () => (
  <Menu>
    <Menu.Item key="0">
      <WrapNotiItem>
        <p>This is first notification</p>
      </WrapNotiItem>
    </Menu.Item>
  </Menu>
);

const HeaderAdmin = () => {
  return (
    <Header style={{ backgroundColor: "#fff" }}>
      <WrapHeader>
        <div></div>
        <div className="wrap-right">
          <Dropdown
            overlay={menuNotification}
            trigger={["click"]}
            className="notification"
          >
            <Link
              to="#"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{
                display: "flex",
              }}
            >
              <Badge count={5}>
                <BellTwoTone style={{ fontSize: "20px" }} />
              </Badge>
            </Link>
          </Dropdown>
          <Dropdown overlay={menuDropdownUser} trigger={["click"]}>
            <Link
              to="#"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="https://res.cloudinary.com/myapp12091999/image/upload/v1632284952/s8o1mqxr/px9l71ycgoygl3611kbr.jpg"
                width="40px"
                alt="userimg"
                style={{ borderRadius: "50%" }}
              />
              Tuong Nguyen <DownOutlined />
            </Link>
          </Dropdown>
          ,
        </div>
      </WrapHeader>
    </Header>
  );
};

export default HeaderAdmin;
