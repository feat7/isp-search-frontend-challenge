import React from "react";

const SearchBox = () => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Search.." />
      </div>
      <div className="control">
        <a className="button is-primary">Search</a>
      </div>
    </div>
  );
};

export default SearchBox;
