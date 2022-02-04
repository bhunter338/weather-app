import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "./context";
import Message from "./Message";
import snow from "./images/snow.png";
import rain from "./images/rain.png";
import fog from "./images/fog.png";
import sun from "./images/sun.png";
import thunderstorm from "./images/thunderstorm.png";
import clouds from "./images/clouds.png";

const CardContainer = () => {
  const {
    handleSubmit,
    setCity,
    city,
    fetchedData,
    mode,
    forecastData,
    name,
    IsSuccess,
    country,
  } = useGlobalContext();
  // const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(0);
  var data = [];
  console.log(fetchedData);

  var current = {};
  if (mode === 0) {
    if (fetchedData.cod === 200) {
      current = {
        id: 1,
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temp: Math.round(fetchedData.main.temp),
        description: fetchedData.weather[0].description,
        date: new Date().toLocaleDateString("en-us", {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
      var id = fetchedData.weather[0].id;
      if (id === 800) {
        current.icon = sun;
      } else if (id >= 600 && id <= 622) {
        current.icon = snow;
      } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        current.icon = rain;
      } else if (id >= 200 && id <= 232) {
        current.icon = thunderstorm;
      } else if (id >= 700 && id <= 781) {
        current.icon = fog;
      } else if (id >= 801 && id <= 804) {
        current.icon = clouds;
      }
      data.push(current);
      // setData(current);
    }
  } else {
    if (Object.keys(forecastData).length !== 0 && IsSuccess) {
      let forecast = forecastData.daily;

      forecast = forecast.slice(1, 5);
      forecast = forecast.map((item, index) => {
        return {
          id: index,
          city: name,
          country: country,
          temp: Math.round(item.temp.day),
          description: item.weather[0].description,
          weatherId: item.weather[0].id,
          date: new Date(item.dt * 1000).toLocaleDateString("en-us", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        };
      });
      console.log(forecast);

      forecast.forEach((item) => {
        let id = item.weatherId;
        if (id === 800) {
          item.icon = sun;
        } else if (id >= 600 && id <= 622) {
          item.icon = snow;
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
          item.icon = rain;
        } else if (id >= 200 && id <= 232) {
          item.icon = thunderstorm;
        } else if (id >= 700 && id <= 781) {
          item.icon = fog;
        } else if (id >= 801 && id <= 804) {
          item.icon = clouds;
        }
      });
      console.log(forecast);
      data = forecast;
    }
  }

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
      {fetchedData.cod !== 200 && mode === 0 ? (
        <Message message={fetchedData.message}></Message>
      ) : !IsSuccess && mode === 1 ? (
        <Message message="City Not Found!"></Message>
      ) : (
        <div className="cardContainer">
          {data.map((item) => {
            return <Card key={item.id} {...item}></Card>;
          })}
        </div>
      )}
    </>
  );
};

export default CardContainer;
