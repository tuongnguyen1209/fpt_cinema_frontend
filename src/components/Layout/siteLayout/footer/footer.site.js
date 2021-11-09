import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { WrapFooter } from "./footer.style";

const FooterSite = () => {
  return (
    <WrapFooter>
      <div>
        <TwitterCircleFilled />
        <InstagramFilled />
        <FacebookFilled />
      </div>
      <div>
        <h2 className="logo">CINEMA</h2>
      </div>
      <div>© Copyright 2021</div>
    </WrapFooter>
  );
};

export default FooterSite;
