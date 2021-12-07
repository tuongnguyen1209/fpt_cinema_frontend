import React from "react";
import { Route, Switch } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../config/app.config";
import FogotPass from "./fogotPassword/fogotPass.auth";
import LoginAuth from "./login/Login.auth";
import RegirterAuth from "./register/register.auth";

const Auth = () => {
  return (
    <Switch>
      <Route path={`${AUTH_PREFIX_PATH}/login`} exact>
        <LoginAuth />
      </Route>
      <Route path={`${AUTH_PREFIX_PATH}/register`} exact>
        <RegirterAuth />
      </Route>
      <Route path={`${AUTH_PREFIX_PATH}/fogot`} exact>
        <FogotPass />
      </Route>
    </Switch>
  );
};

export default Auth;
