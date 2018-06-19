import React from "react";
import { inject, observer } from "mobx-react";
import Rating from "../../components/Rating";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

@inject("store")
@observer
export default class ISPDetail extends React.Component {
  printDocument(isp) {
    const input = document.getElementById("print");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${isp.name}.pdf`);
    });
  }
  copyToClipboard = str => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

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
      <div className="section hero">
        <a
          className="has-text-right has-text-danger is-size-4"
          onClick={() => this.props.store.routing.goBack()}
        >
          X
        </a>
        <div className="hero-body">
          <div className="container">
            <div id="print" style={{ padding: 8, margin: 8 }}>
              <article className="media">
                <figure className="media-left">
                  <p className="image is-128x128">
                    <img src={isp.image} alt={isp.name} />
                  </p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <div className="title">{isp.name}</div>
                    <div className="subtitle">
                      Starts from ₹{isp.lowest_price}
                    </div>
                  </div>
                </div>
              </article>
              <Rating rating={isp.rating} />
              <div className="subtitle">Speed upto {isp.max_speed} MBps</div>
              <div>{isp.description}</div>
              <div>
                <i className="fa fa-phone" /> {isp.contact_no}
              </div>
              <div>
                <i className="fa fa-envelope" /> {isp.email}
              </div>
              <div>
                <i className="fa fa-link" />{" "}
                <a href={isp.url} target="_blank">
                  {isp.url}
                </a>
              </div>
            </div>
            <div className="button" onClick={() => this.printDocument(isp)}>
              <i className="fa fa-download" />&nbsp;Download
            </div>
            <div
              className="button"
              onClick={() => {
                this.copyToClipboard(window.location.href);
                alert("Url copied to clipboard");
              }}
            >
              <i className="fa fa-share" />&nbsp;Share
            </div>
          </div>
        </div>
      </div>
    );
  }
}
