import React from "react";
import { Route, Switch } from "react-router-dom";
import Site from "./site";

function Views() {
  return (
    <>
      <Switch>
        <Route path="/admin"></Route>
        <Route path="/">
          <Site />
        </Route>
      </Switch>
    </>
  );
}

export default Views;
