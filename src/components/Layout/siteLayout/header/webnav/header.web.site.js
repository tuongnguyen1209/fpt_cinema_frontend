import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Input, Menu, Row } from "antd";
import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { APP_SITE_MENU } from "../../../../../config/app.config";
import Login from "../../../../molecules/modal-login/login";
import { HeaderCustom } from "./Customheader.syle";


const menuUserLogin = () => {
  return (
    <Menu>
      <Menu.Item key="1">
        <Link to="">Trang cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="">Lịch sử mua vé</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link to="">Đăng xuất</Link>
      </Menu.Item>
    </Menu>
  );
};

const HeaderWebSite = () => {
  const isLogin = false;

  const [closeModal, setCloseModal] = useState("hide-modal");


  const handleCloseModal = () => {
      setCloseModal("hide-modal")

  } 
  const handleOpenModal = () => {
      setCloseModal("modal")
  }

  return (
    <HeaderCustom>
      <Row>
        <Col span={17} className="wrap-logo">
          <h2 className="logo">POLY CINEMA</h2>
        </Col>
        <Col span={4} className="searchwrap">
          <Input.Search placeholder="Tìm kiếm phim" />
        </Col>
        <Col span={3} className="wrap-login">
          {isLogin ? (
            <>
              <Dropdown overlay={menuUserLogin}>
                <Button>
                  UserName <DownOutlined />
                </Button>
              </Dropdown>
            </>
          ) : (
            <Button className="btn-login" type="primary" size="large" onClick={handleOpenModal}>
              Đăng nhập
            </Button>
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
                  {el.submenu.map((e, i) => (
                    <Menu.Item key={i} className="menu-item">
                      <Link to={e.url}>{e.name}</Link>
                    </Menu.Item>
                  ))}
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

      {<Login closeModal={closeModal} handleCloseModal={handleCloseModal}  setCloseModal={setCloseModal}/>}
    </HeaderCustom>
  );
};

export default HeaderWebSite;
