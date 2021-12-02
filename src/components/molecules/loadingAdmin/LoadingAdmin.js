import { Spin } from "antd";
import React from "react";
import { LoadingWrap } from "./loadingAdmin.style";

const LoadingAdmin = () => {
  return (
    <LoadingWrap>
      <div className="wrap-logo">
        <h2 className="logo">POLY CINEMA</h2>
      </div>
      <div className="wrap-spin">
        <Spin size="large" />
      </div>
      <div className="wrap_backdrop"></div>
    </LoadingWrap>
  );
};

export default LoadingAdmin;
