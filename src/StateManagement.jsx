import React, { useState, useEffect } from "react";
import { useQueries, useQuery } from "react-query";
import axios from "axios";

const myContextApi = React.createContext();

const StateManagement = ({ children }) => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [latitude, setLatitude] = useState("9.0765");
  const [longitude, setLongitude] = useState("7.3986");
  const [cityName, setCityName] = useState("Abuja");
  const threeWeather = [];

  const weatherURL = "https://api.openweathermap.org/data/2.5";
  const apiKey = import.meta.env.VITE_API_KEY_ONE;


  const {
    isLoading: isCurrentWeatherLoading,
    data: currentWeatherData,
    isError: isCurrentWeatherError,
    error: currrentWeatherError,
  } = useQuery(["current-weather", latitude, longitude], () =>
    fetch(
      `${weatherURL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    ).then((res) => res.json())
  );

  const {
    isLoading: isThreeHourlyLoading,
    data: threeHourlyWeatherData,
    isError: isThreeWeatherError,
    error: threeWeatherError,
  } = useQuery(["three-hourly-weather", latitude, longitude], () =>
    fetch(
      `${weatherURL}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    ).then((res) => res.json())
  );

  threeWeather.push(threeHourlyWeatherData?.list);
  const storedObj = JSON.parse(localStorage.getItem("user"));

  let userName;
  let email;
  let password;
  if (storedObj) {
    userName = storedObj.name;
    email = storedObj.email;
    password = storedObj.password;
}

  return (
    <myContextApi.Provider
      value={{
        setCreateUser,
        createUser,
        cityName,
        setCityName,
        setLatitude,
        setLongitude,
        currentWeatherData,
        threeHourlyWeatherData,
        isCurrentWeatherLoading,
        threeWeather,
        isThreeWeatherError,
        threeWeatherError,
        userName,
        email,
        password,
      }}
    >
      {children}
    </myContextApi.Provider>
  );
};

export { StateManagement, myContextApi };
