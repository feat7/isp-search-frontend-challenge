import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";
import { API_SERVER } from "../../config";
import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";

@inject("store")
@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    if (!this.props.store.ui.ISPsLoaded) {
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
        <div className="section">
          <div className="container">
            <div className="has-text-centered">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            {ListISPs(this.props.store.ui.ISPsData)}
          </div>
        </div>
      </div>
    );
  }
}

const ListISPs = isps => {
  return isps.map((item, index) => {
    return (
      <div key={index}>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{item.name}</p>
          </header>
          <div class="card-content">
            <div class="content">{item.description}</div>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              Starting from ₹{item.lowest_price}
            </div>
            <div class="card-footer-item">Upto {item.max_speed} MBps</div>
          </footer>
        </div>
        <br />
      </div>
    );
  });
};
