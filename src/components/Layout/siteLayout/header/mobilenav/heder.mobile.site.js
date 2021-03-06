import { CloseOutlined, DashboardOutlined } from "@ant-design/icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Drawer, Row, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ADMIN_PREFIX_PATH,
  APP_SITE_MENU,
} from "../../../../../config/app.config";
import { logoutAction } from "../../../../../redux/action/user.action";

const CustomMenu = styled.div`
  .menu-site {
    background-color: #000;
  }
`;

const HeaderMobileSite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const userdata = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <Row>
        <Col span={12} style={{ textAlign: "center" }}>
          <h2 className="logo">Cinema</h2>
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <Button
            onClick={() => setIsVisible(!isVisible)}
            type="primary"
            size="large"
            style={{
              width: 100,
              background: "#29323d",
              borderColor: "#29323d",
            }}
          >
            <FontAwesomeIcon icon={!isVisible ? faBars : faTimes} />
          </Button>
        </Col>
        <Drawer
          visible={isVisible}
          onClose={() => setIsVisible(false)}
          placement="left"
          closeIcon={<CloseOutlined style={{ color: "white" }} />}
          headerStyle={{
            backgroundColor: "black",
          }}
          bodyStyle={{
            background: "#000",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 className="logo">Cinema</h2>
          </div>
          <CustomMenu>
            <Menu theme="dark" className="menu-site">
              {APP_SITE_MENU.map((el, ind) => (
                <Menu.Item key={ind} className="menu-item">
                  <Link to={el.url} onClick={() => setIsVisible(false)}>
                    {el.name}
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Divider />
              {userdata.isLogin ? (
                <>
                  <Menu.Item key="u-1" className="menu-item">
                    <Link to="">Trang c?? nh??n</Link>
                  </Menu.Item>
                  <Menu.Item key="u-2" className="menu-item">
                    <Link to="">L???ch s??? mua v??</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  {userdata.user.administration === "1" && (
                    <Menu.Item key="admin">
                      <Link to={`${ADMIN_PREFIX_PATH}/`}>
                        <Button icon={<DashboardOutlined />} type="link">
                          Admin
                        </Button>
                      </Link>
                    </Menu.Item>
                  )}
                  <Menu.Item key="u-3" className="menu-item">
                    <Link
                      to=""
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >
                      ????ng xu???t
                    </Link>
                  </Menu.Item>
                </>
              ) : (
                <Menu.Item key="idlogn" className="menu-item">
                  <Link to="" onClick={() => setIsVisible(false)}>
                    ????ng nh???p
                  </Link>
                </Menu.Item>
              )}
            </Menu>
          </CustomMenu>
        </Drawer>
      </Row>
    </div>
  );
};

export default HeaderMobileSite;
