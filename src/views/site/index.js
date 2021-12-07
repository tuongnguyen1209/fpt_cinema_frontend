import { Grid, Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FooterSite from "../../components/Layout/siteLayout/footer/footer.site";
import HeaderSite from "../../components/Layout/siteLayout/header";
import Register from "../../components/molecules/modal-register/register";
import NotFound from "../site/page_not-found";
import Home from "./home/home.site";
import PageBlog from "./page_blog/page_blog";
import PageBookTicketFood from "./page_bookticket_food/page_bookticket_food";
import BuyTicketSite from "./page_buyticket/buy_ticket.site";
import PageDetailMovie from "./page_detailmovie/page_detailmovie";
import PageMember from "./page_member/page_member";
import PageMovie from "./page_movie/page_movie";
import PageSettingAccount from "./page_setting_account/page_setting_account";
import PageSupport from "./page_support/page_support";
const { Header, Content, Footer } = Layout;

const { useBreakpoint } = Grid;

const Site = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // check login toggle page member
  const loginReducer = useSelector((state) => state.user);
  const isLogin = loginReducer.isLogin;

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
          <Route path="/detailmovie/:id">
            <PageDetailMovie />
          </Route>
          <Route path="/member">
            {isLogin ? <PageSettingAccount /> : <PageMember />}
          </Route>
          <Route path="/bookticket-food">
            <PageBookTicketFood />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/forgot">
            <Forgot />
          </Route> */}
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
