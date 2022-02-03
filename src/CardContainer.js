import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "./context";
import Message from "./Message";

const CardContainer = () => {
  const { handleSubmit, setCity, city, fetchedData } = useGlobalContext();
  // console.log(isLoading);
  console.log(fetchedData);

  // if (!isLoading) {
  //   console.log(fetchedData);
  // }

  // if (isLoading) {
  //   return <h1 className="message">...Loading</h1>;
  // }

  return (
    <>
      <div className="searchBar">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city eg. Istanbul"
          />
          <button className="search-btn"></button>
        </form>
      </div>
      {fetchedData.cod !== 200 ? (
        <Message message={fetchedData.message}></Message>
      ) : (
        <div className="cardContainer">
          <Card></Card>
        </div>
      )}
    </>
  );
};

export default CardContainer;
