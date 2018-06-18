import React from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class ListISPs extends React.Component {
  render() {
    return this.props.isps.map((item, index) => {
      return (
        <div key={index}>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">{item.name}</p>
            </header>
            <div className="card-content">
              <div className="content">
                {item.description.substr(0, 250)}
                {item.description.length > 250 ? "..." : ""}
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                Starting from ₹{item.lowest_price}
              </div>
              <div className="card-footer-item">Upto {item.max_speed} MBps</div>
            </footer>
          </div>
          <br />
        </div>
      );
    });
  }
}
