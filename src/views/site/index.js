import { Grid, Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import FooterSite from "../../components/Layout/siteLayout/footer/footer.site";
import HeaderSite from "../../components/Layout/siteLayout/header";
import BuyTicketSite from "./page_buyticket/buy_ticket.site";
import Home from "./home/home.site";
import PageMovie from "./page_movie/page_movie";
import PageSupport from "./page_support/page_support";
import PageDetailMovie from "./page_detailmovie/page_detailmovie";
import PageMember from "./page_member/page_member";
import PageBlog from "./page_blog/page_blog";
import PageSettingAccount from "./page_setting_account/page_setting_account";
import PageBookTicketFood from "./page_bookticket_food/page_bookticket_food";
import Register from "../../components/molecules/modal-register/register";
import Forgot from "../../components/molecules/modal-forgotpassword/forgot";
import Login from "../../components/molecules/modal-login/login";
import NotFound from "../site/page_not-found";
const { Header, Content, Footer } = Layout;

const { useBreakpoint } = Grid;


const isLogin = true;

const Site = () => {

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout style={{ width: "100%" }}>
      <Header
        style={{ background: "#ffff", height: "max-content", padding: 0 }}
      >
        <HeaderSite isMobile={isMobile} />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/buyticket">
            <BuyTicketSite />
          </Route>
          <Route path="/pagemovie">
            <PageMovie />
          </Route>
          <Route path="/pageblog">
            <PageBlog />
          </Route>
          <Route path="/pagesupport">
            <PageSupport />
          </Route>
          <Route path="/detailmovie">
            <PageDetailMovie />
          </Route>
          <Route path="/member">
            {isLogin ? (<PageSettingAccount />) : (<PageMember />) }
          </Route>
          <Route path="/bookticket-food">
            <PageBookTicketFood />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Content>
      <Footer style={{ padding: 0 }}>
        <FooterSite />
      </Footer>
    </Layout>
  );
};

export default Site;
