import React, { useState, useContext, useEffect } from "react";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("Istanbul");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const [IsSuccess, setIsSuccess] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setfetchedData] = useState({});
  const [forecastData, setforecastData] = useState({});

  const [mode, setMode] = useState(0);

  useEffect(() => {
    console.log("initial");
    FetchApi(); //fetch on initial render
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 0) {
      FetchApi();
    } else if (mode === 1) {
      FetchForecast();
    }
  };
  const navbarClick = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    // setName(city);
    if (e.target.id === "current") {
      FetchApi();
      setMode(0);
    } else if (e.target.id === "forecast") {
      FetchForecast();
      setMode(1);
    }
  };

  const FetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e87121062193484b74e868bba5232a1`;

    setIsLoading(true);
    console.log("url " + url);
    const response = await fetch(url);
    const data = await response.json();

    setfetchedData(data);
    setIsLoading(false);
  };

  const FetchForecast = async () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=9e87121062193484b74e868bba5232a1`
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (data.length === 0) {
          setIsSuccess(false);
          return;
        }
        setName(data[0].name);
        setCountry(data[0].country);

        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,hourly,current&units=metric&appid=9e87121062193484b74e868bba5232a1`;
        const response = await fetch(url);
        const forecastData = await response.json();
        setIsSuccess(true);
        setforecastData(forecastData);
      })
      .catch((error) => console.log(error));
  };

  // function handleErrors(response) {
  //   const json = response.json();
  //   console.log(json);
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }

  //   return json;
  // }

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        city,
        setCity,
        isLoading,
        fetchedData,
        navbarClick,
        mode,
        forecastData,
        name,
        country,
        IsSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
