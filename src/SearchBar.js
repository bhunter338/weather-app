import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="search">
        <input type="text" placeholder="Enter a city eg. Istanbul" />
        <button className="search-btn"></button>
      </div>
    </div>
  );
};

export default SearchBar;
