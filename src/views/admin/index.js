import React from "react";
import { Breadcrumb, Layout } from "antd";
import SlideAdmin from "../../components/Layout/adminLayout/slide";
import HeaderAdmin from "../../components/Layout/adminLayout/headerAdmin";
import { Switch, Route } from "react-router-dom";
import { ADMIN_PREFIX_PATH } from "../../config/app.config";
import ListMovie from "./movie/listMovie.admin";
import AddMovie from "./movie/addMovie.admin";

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
                component={AddMovie}
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
