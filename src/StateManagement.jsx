import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const myContextApi = React.createContext();

const StateManagement = ({ children }) => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [places, setPlaces] = useState([9.0765, 7.3986]);
  const [cityName, setCityName] = useState("Abuja")

  const SECRET_KEY = "zMoLGLWZ8qa2RCpIpd0gJEMfhqrBQJsa";
  const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

  const fields = [
    "precipitationIntensity",
    "precipitationType",
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "cloudCover",
    "cloudBase",
    "cloudCeiling",
    "weatherCode",
  ];

  const units = "metric";

  const timesteps = ["current", "1h", "1d"];

  const now = new Date();
  const startTime = new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString();
  const endTime = new Date(
    now.getTime() + 15 * 24 * 60 * 60 * 1000
  ).toISOString();

  const timezone = "Africa/Lagos";

  const url = `${getTimelineURL}?apikey=${SECRET_KEY}&location=${places}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}`;

  const fetchWeatherData = () => {
    const updatedUrl = `${getTimelineURL}?apikey=${SECRET_KEY}&location=${places}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}`;
    return axios.get(updatedUrl, { method: "GET", compress: true });
  };


 const {
   isLoading,
   data: testing,
   isError,
   error,
   isFetching,
 } = useQuery(["testing", places], fetchWeatherData, {
   cacheTime: 604800000,
   staleTime: 604800000,
   refetchOnMount: false,
   refetchOnWindowFocus: false,
 });


  const currentWeather = testing?.data?.data?.timelines[2];
  const hourlyWeather = testing?.data?.data?.timelines[1];
  const dailyWeather = testing?.data?.data?.timelines[0];

  console.log(hourlyWeather);

  const [currentWeatherDetails, setCurrentWeatherDetails] = useState({
    temperature: "",
    temperatureApparent: "",
    cloudCover: "",
    weatherCode: "",
    windDirection: "",
    precipitationIntensity: "",
    precipitationType: "",
    windSpeed: "",
    windGust: "",
  });

  const [hourlyWeatherDetails, setHourlyWeatherDetails] = useState({
    temperature: "",
    temperatureApparent: "",
    cloudCover: "",
    weatherCode: "",
    windDirection: "",
    precipitationIntensity: "",
    precipitationType: "",
    windSpeed: "",
    windGust: "",
  });

  const [dailyWeatherDetails, setDailyWeatherDetails] = useState({
    temperature: "",
    temperatureApparent: "",
    cloudCover: "",
    weatherCode: "",
    windDirection: "",
    precipitationIntensity: "",
    precipitationType: "",
    windSpeed: "",
    windGust: "",
  });

  useEffect(() => {
    currentWeather?.intervals?.map((data) => {
      setCurrentWeatherDetails({
        temperature: data?.values?.temperature,
        temperatureApparent: data?.values?.temperatureApparent,
        cloudCover: data?.values?.cloudCover,
        weatherCode: data?.values?.weatherCode,
        windDirection: data?.values?.windDirection,
        precipitationIntensity: data?.values?.precipitationIntensity,
        precipitationType: data?.values?.precipitationType,
        windSpeed: data?.values?.windSpeed,
        windGust: data?.values?.windGust,
      });
    });
  }, [currentWeather, places]);

  useEffect(() => {
    hourlyWeather?.intervals?.map((data) => {
      setHourlyWeatherDetails({
        temperature: data?.values?.temperature,
        temperatureApparent: data?.values?.temperatureApparent,
        cloudCover: data?.values?.cloudCover,
        weatherCode: data?.values?.weatherCode,
        windDirection: data?.values?.windDirection,
        precipitationIntensity: data?.values?.precipitationIntensity,
        precipitationType: data?.values?.precipitationType,
        windSpeed: data?.values?.windSpeed,
        windGust: data?.values?.windGust,
      });
    });
  }, [hourlyWeather, places]);

  useEffect(() => {
    dailyWeather?.intervals?.map((data) => {
      setDailyWeatherDetails({
        temperature: data?.values?.temperature,
        temperatureApparent: data?.values?.temperatureApparent,
        cloudCover: data?.values?.cloudCover,
        weatherCode: data?.values?.weatherCode,
        windDirection: data?.values?.windDirection,
        precipitationIntensity: data?.values?.precipitationIntensity,
        precipitationType: data?.values?.precipitationType,
        windSpeed: data?.values?.windSpeed,
        windGust: data?.values?.windGust,
      });
    });
  }, [dailyWeather, places]);

  return (
    <myContextApi.Provider
      value={{
        setCreateUser,
        createUser,
        hourlyWeather,
        currentWeatherDetails,
        hourlyWeatherDetails,
        dailyWeatherDetails,
        isLoading,
        testing,
        isError,
        error,
        isFetching,
        places,
        setPlaces,
        cityName,
        setCityName,
      }}
    >
      {children}
    </myContextApi.Provider>
  );
};

export { StateManagement, myContextApi };
