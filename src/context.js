import React, { useState, useContext, useEffect } from "react";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [city, setCity] = useState("Istanbul");
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setfetchedData] = useState({});
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e87121062193484b74e868bba5232a1`;

  useEffect(() => {
    FetchApi(currentUrl); //fetch on initial render
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    FetchApi(currentUrl);
  };

  const FetchApi = async (url) => {
    setIsLoading(true);
    console.log("url " + url);
    const response = await fetch(url);
    const data = await response.json();

    setfetchedData(data);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{ handleSubmit, city, setCity, isLoading, fetchedData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
