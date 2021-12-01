import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ADMIN_PREFIX_PATH, AUTH_PREFIX_PATH } from "../config/app.config";
import Admin from "./admin";
import Auth from "./auth";
import Site from "./site";

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${AUTH_PREFIX_PATH}/login`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function Views() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Switch>
        <PrivateRoute
          path={ADMIN_PREFIX_PATH}
          isAuthenticated={user.isLogin && user.user.administration === "1"}
        >
          <Admin />
        </PrivateRoute>

        <Route path={AUTH_PREFIX_PATH}>
          <Auth />
        </Route>
        <Route path="/">
          <Site />
        </Route>
      </Switch>
    </>
  );
}

export default Views;
