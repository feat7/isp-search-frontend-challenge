import React from "react";
import { inject } from "mobx-react";

@inject("store")
export default class SearchBox extends React.Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            onChange={event =>
              (this.props.store.ui.searchQuery = event.target.value)
            }
            value={this.props.store.ui.searchQuery}
            className="input"
            type="text"
            placeholder="Search.."
          />
        </div>
        <div className="control">
          <a className="button is-primary">Search</a>
        </div>
      </div>
    );
  }
}
