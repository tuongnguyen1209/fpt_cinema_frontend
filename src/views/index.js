import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ADMIN_PREFIX_PATH } from "../config/app.config";
import Admin from "./admin";
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
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

function Views() {
  return (
    <>
      <Switch>
        <PrivateRoute path={ADMIN_PREFIX_PATH} isAuthenticated={true}>
          <Admin />
        </PrivateRoute>
        <Route path="/">
          <Site />
        </Route>
      </Switch>
    </>
  );
}

export default Views;
