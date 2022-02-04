import React from "react";

const Card = ({ city, temp, description, icon, date, country }) => {
  return (
    <div className="card">
      <h2 className="city">
        <div>
          {city}
          <span>, {country}</span>
        </div>
      </h2>
      <div className="temp">
        {temp}
        <sup>°C</sup>
      </div>
      <img src={icon} alt="sun" />
      <h3 className="description">{description}</h3>
      <h3 className="date">{date}</h3>
    </div>
  );
};

export default Card;
