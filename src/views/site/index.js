import { Grid, Layout } from "antd";
import React from "react";
import { Switch, Route } from "react-router-dom";
import FooterSite from "../../components/Layout/siteLayout/footer/footer.site";
import HeaderSite from "../../components/Layout/siteLayout/header";
import Home from "./home/home.site";

const { Header, Content, Footer } = Layout;

const { useBreakpoint } = Grid;

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
      <Footer style={{ padding: 5 }}>
        <FooterSite />
      </Footer>
    </Layout>
  );
};

export default Site;
