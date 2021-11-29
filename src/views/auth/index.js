import React from "react";
import { Route, Switch } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "../../config/app.config";
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
    </Switch>
  );
};

export default Auth;
