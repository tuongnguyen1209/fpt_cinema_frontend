import { Button, Col, Input, Row } from "antd";
import React from "react";
import { HeaderCustom } from "./Customheader.syle";

const HeaderSite = (props) => {
  return (
    // <Header className="header" style={{ background: "#fff" }}>
    <HeaderCustom>
      <Row>
        <Col span={16}>
          <h2 className="logo">CINEMA</h2>
        </Col>
        <Col span={4} className="searchwrap">
          <Input.Search />
        </Col>
        <Col span={4}>
          <div className="text-center">
            <Button>Login</Button>
          </div>
        </Col>
      </Row>
      {/* <Menu
        mode="horizontal"
        defaultSelectedKeys={[0]}
        theme="dark"
        style={{ background: "rgb(50,50,70)" }}
      >
        {APP_SITE_MENU.map((el, ind) => (
          <Menu.Item key={ind}>
            <Link to={el.url}>{el.name}</Link>
          </Menu.Item>
        ))}
      </Menu> */}
    </HeaderCustom>
    // </Header>
  );
};

HeaderSite.propTypes = {};

export default HeaderSite;
