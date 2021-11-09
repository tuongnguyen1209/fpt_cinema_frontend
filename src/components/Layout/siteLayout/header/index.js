import React from "react";
import PropTypes from "prop-types";
import HeaderWebSite from "./webnav/header.web.site";
import HeaderMobileSite from "./mobilenav/heder.mobile.site";

const HeaderSite = ({ isMobile }) => {
  console.log(isMobile);
  return isMobile ? <HeaderMobileSite /> : <HeaderWebSite />;
};

HeaderSite.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

HeaderSite.defaultProps = {
  isMobile: false,
};

export default HeaderSite;
