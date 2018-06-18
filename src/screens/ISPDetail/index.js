import React from "react";
import { inject, observer } from "mobx-react";
import Rating from "../../components/Rating";

@inject("store")
@observer
export default class ISPDetail extends React.Component {
  render() {
    const isp = this.props.store.ui.ISPsData.find(
      item => item.id === parseInt(this.props.match.params.id, 10)
    );
    if (typeof isp === "undefined" || !this.props.store.ui.fetchedFromPersist) {
      return (
        <div className="hero is-fullheight">
          <div className="hero-body container has-text-danger title">
            Loading...
          </div>
        </div>
      );
    }
    //Dynamic meta tags => 3 - title, 4 -image
    document.getElementsByTagName("meta")[3].content =
      isp.name + " - Get upto " + isp.max_speed + " MBps speed";
    document.getElementsByTagName("meta")[4].content = isp.image;

    return (
      <div className="hero">
        <div className="hero-body">
          <article className="media">
            <figure className="media-left">
              <p className="image is-128x128">
                <img src={isp.image} alt={isp.name} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <div className="title">{isp.name}</div>
                <div className="subtitle">Starts from ₹{isp.lowest_price}</div>
              </div>
            </div>
          </article>
          <Rating rating={isp.rating} />
          <div className="subtitle">Speed upto {isp.max_speed} MBps</div>
          <div>{isp.description}</div>
          <div>
            <i className="fa fa-phone" /> {isp.contact}
          </div>
          <div>
            <i className="fa fa-envelope" /> {isp.email}
          </div>
          <div>
            <i className="fa fa-link" /> {isp.url}
          </div>
        </div>
      </div>
    );
  }
}
