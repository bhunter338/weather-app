import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [city, setCity] = useState("");
  return (
    <div className="searchBar">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter a city eg. Istanbul"
        />
        <button className="search-btn"></button>
      </form>
    </div>
  );
};

export default SearchBar;
