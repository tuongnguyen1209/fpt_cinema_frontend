import { Layout } from "antd";
import React from "react";
import HeaderSite from "../../components/Layout/siteLayout/header/header.site";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home.site";

const { Header, Content } = Layout;

const Site = () => {
  return (
    <Layout style={{ width: "100%" }}>
      <Header>
        <HeaderSite />
      </Header>
      <Content>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default Site;
