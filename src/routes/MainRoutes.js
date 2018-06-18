import React from "react";
import { Route, Switch } from "react-router";
import Home from "../screens/Home";
// import DevTools from "mobx-react-devtools";

const MainRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default MainRoutes;