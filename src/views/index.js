import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingAdmin from "../components/molecules/loadingAdmin/LoadingAdmin";
import { ADMIN_PREFIX_PATH, AUTH_PREFIX_PATH } from "../config/app.config";
import Auth from "./auth";
import Site from "./site";

const Admin = React.lazy(() => import("./admin"));

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
  return (
    <Suspense fallback={<LoadingAdmin />}>
      <Switch>
        <PrivateRoute
          path={ADMIN_PREFIX_PATH}
          isAuthenticated={
            user.isLogin && `${userdata.user.administration}` === "1"
          }
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
    </Suspense>
  );
}

export default Views;
