import React from "react";
import icon from "./images/snow.png";

const Card = () => {
  return (
    <div className="card">
      <h2 className="city">Istanbul</h2>
      <div className="temp">
        7<sup>°C</sup>
      </div>
      <img src={icon} alt="sun" />
      <h3 className="description">heavy shower rain and drizzle</h3>
      <h3 className="date">Tue, February 1, 2022</h3>
    </div>
  );
};

export default Card;
