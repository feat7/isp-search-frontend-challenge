import React from "react";

const SearchBox = () => {
  return (
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Search.." />
      </div>
      <div class="control">
        <a class="button is-info">Search</a>
      </div>
    </div>
  );
};

export default SearchBox;
