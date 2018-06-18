import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";
import { API_SERVER } from "../../config";
import Header from "../../components/Header";
import ListISPs from "../../components/ListISPs";
import SearchBox from "../../components/SearchBox";

@inject("store")
@observer
export default class HomeScreen extends Component {
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
    if (!this.props.store.ui.ISPsLoaded) return <div>Loading...</div>;
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column is-2">
            <div className="hero is-white">
              <div className="section">
                <div className="container">
                  <h1 className="title">Sort by</h1>
                  Sorted by {this.props.store.ui.sortBy} <br />
                  <a
                    className="has-text-primary"
                    onClick={() => (this.props.store.ui.sortBy = "name")}
                  >
                    Name
                  </a>{" "}
                  <a
                    className="has-text-primary"
                    onClick={() => {
                      this.props.store.ui.sortBy = "price";
                    }}
                  >
                    Price
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="section">
              <div className="container">
                <div className="has-text-centered">
                  <SearchBox />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="content">
                <ListISPs isps={this.props.store.ui.filteredISPs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
