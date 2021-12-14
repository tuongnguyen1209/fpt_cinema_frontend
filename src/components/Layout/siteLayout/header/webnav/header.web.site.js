import {
  DashboardOutlined,
  DownOutlined,
  HistoryOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Dropdown, Input, Menu, Row, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADMIN_PREFIX_PATH,
  APP_SITE_MENU,
  AUTH_PREFIX_PATH,
} from "../../../../../config/app.config";
import { logoutAction } from "../../../../../redux/action/user.action";
import { HeaderCustom } from "./Customheader.syle";
import DropMenu from "./drop.menu.movie";

const HeaderWebSite = () => {
  const userdata = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const menuUserLogin = () => {
    return (
      <Menu>
        <Menu.Item key="1">
          <Link to="/member">
            <Button icon={<UserOutlined />} type="link">
              Trang cá nhân
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/member">
            <Button icon={<HistoryOutlined />} type="link">
              Lịch sử mua vé
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Divider />
        {`${userdata.user.administration}` === "1" && (
          <Menu.Item key="admin">
            <Link to={`${ADMIN_PREFIX_PATH}/`}>
              <Button icon={<DashboardOutlined />} type="link">
                Admin
              </Button>
            </Link>
          </Menu.Item>
        )}
        <Menu.Item key="3">
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              dispatch(logoutAction());
            }}
          >
            <Button type="link" icon={<LoginOutlined />}>
              Đăng xuất
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <HeaderCustom>
      <Row>
        <Col span={12} className="wrap-logo p-2">
          <h2 className="logo">POLY CINEMA</h2>
        </Col>
        <Col span={12} className="searchwrap p-2">
          <Input.Search
            size="large"
            placeholder="Tìm kiếm phim"
            className="mr-3"
          />

          {userdata.isLogin ? (
            <>
              <Dropdown overlay={menuUserLogin} trigger={["click"]}>
                <Button size="large" type="primary" className="btn-login">
                  {userdata.user?.full_name} <DownOutlined />
                </Button>
              </Dropdown>
            </>
          ) : (
            <Space>
              <Link to={`${AUTH_PREFIX_PATH}/login`}>
                <Button className="btn-login" type="primary" size="large">
                  Đăng nhập
                </Button>
              </Link>
              <Link to={`${AUTH_PREFIX_PATH}/register`}>
                <Button className="btn-login" type="primary" size="large">
                  Đăng Ký
                </Button>
              </Link>
            </Space>
          )}
        </Col>
        <Col span={24}>
          <Menu
            style={{ background: "#000" }}
            mode="horizontal"
            selectedKeys={[0]}
            theme="dark"
            className="menu-site"
          >
            {APP_SITE_MENU.map((el, ind) =>
              el.submenu ? (
                <Menu.SubMenu
                  key={ind}
                  className="menu-item"
                  title={el.name}
                  icon={<DownOutlined />}
                >
                  <DropMenu />
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={ind} className="menu-item">
                  <Link to={el.url}>{el.name}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Col>
      </Row>
    </HeaderCustom>
  );
};

export default HeaderWebSite;
