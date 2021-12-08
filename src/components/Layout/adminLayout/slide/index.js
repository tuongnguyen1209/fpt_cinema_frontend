import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import adminNavigation from "../../../../config/adminNavigation.config";
import { LogoWrap } from "./sliderAdmin.style";

const { Sider } = Layout;

const SlideAdmin = ({ getLocaltion }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      breakpoint="sm"
      theme="dark"
      style={{
        minHeight: "100vh",
      }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => {
        setCollapsed(!collapsed);
      }}
    >
      <LogoWrap>
        {!collapsed ? (
          <h2 className="logo">CINEMA</h2>
        ) : (
          <h2 className="logo">C</h2>
        )}
      </LogoWrap>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {adminNavigation.map((el) =>
          el.submenu ? (
            <Menu.SubMenu key={el.key} icon={el.icon} title={el.title}>
              {el.submenu.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path} onClick={() => getLocaltion(item)}>
                    {item.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={el.key} icon={el.icon}>
              <Link to={el.path} onClick={() => getLocaltion(el)}>
                {el.title}
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </Sider>
  );
};

export default SlideAdmin;
