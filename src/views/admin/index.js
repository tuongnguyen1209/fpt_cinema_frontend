import { Breadcrumb, Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderAdmin from "../../components/Layout/adminLayout/headerAdmin";
import SlideAdmin from "../../components/Layout/adminLayout/slide";
import { ADMIN_PREFIX_PATH } from "../../config/app.config";
import HomeAdmin from "./home/home.admin";
import AddMovie from "./movie/addMovie.admin";
import EditMovie from "./movie/editMovie.admin";
import ListMovie from "./movie/listMovie.admin";
import AddSession from "./session/addSession.admin";
// import ListRoom from "./session/listRoom.admin";
import ListSession from "./session/listSession.admin";
import Tickets from "./ticket/ticket.admin";
import TicketDetail from "./ticket/ticketDetail.admin";
import ListUser from "./user/listUser.admin";

const { Content } = Layout;

const Admin = () => {
  return (
    <Layout>
      <SlideAdmin />
      <Layout>
        <HeaderAdmin />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Movie</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, backgroundColor: "#fff", minHeight: 360 }}>
            <Switch>
              <Route
                path={`${ADMIN_PREFIX_PATH}/`}
                component={HomeAdmin}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/movie`}
                component={ListMovie}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/movie/addmovie`}
                component={AddMovie}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/movie/:id`}
                component={EditMovie}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/session`}
                component={ListSession}
                exact
              />
              {/* <Route
                path={`${ADMIN_PREFIX_PATH}/room`}
                component={ListRoom}
                exact
              /> */}
              <Route
                path={`${ADMIN_PREFIX_PATH}/session/addsession`}
                component={AddSession}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/ticket`}
                component={Tickets}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/ticket/:id`}
                component={TicketDetail}
                exact
              />
              <Route
                path={`${ADMIN_PREFIX_PATH}/user`}
                component={ListUser}
                exact
              />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
