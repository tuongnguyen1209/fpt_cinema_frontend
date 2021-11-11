import { Layout } from "antd";
import React from "react";
import HeaderSite from "../../components/Layout/siteLayout/header/header.site";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home.site";
import BuyTicketSite from "./buyticket/buy_ticket.site";

const { Header, Content } = Layout;

const Site = () => {
  return (
    <Layout style={{ width: "100%" }}>
      <Header>
        <HeaderSite />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/buyticket">
            <BuyTicketSite />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default Site;
