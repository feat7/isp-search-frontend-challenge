import React from "react";
import { Route, Switch } from "react-router";
import Home from "../screens/Home";
import ISPDetail from "../screens/ISPDetail";
// import DevTools from "mobx-react-devtools";

const MainRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/isp-detail/:id"
          render={props => <ISPDetail {...props} />}
        />
      </Switch>
    </div>
  );
};

export default MainRoutes;
