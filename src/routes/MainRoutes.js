import React from "react";
import { Route, Switch } from "react-router";
import Home from "../screens/Home";
import ISPDetail from "../screens/ISPDetail";
import axios from "axios";
import { API_SERVER } from "../config";
import { inject } from "mobx-react";
// import DevTools from "mobx-react-devtools";

@inject("store")
export default class MainRoutes extends React.Component {
  constructor(props) {
    super(props);
    if (
      !this.props.store.ui.ISPsLoaded &&
      !this.props.store.ui.fetchedFromPersist
    ) {
      //Call API
      axios.get(`${API_SERVER}/isp`).then(response => {
        this.props.store.ui.ISPsData = response.data;
        this.props.store.ui.ISPsLoaded = true;
      });
    }
  }
  render() {
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
  }
}
