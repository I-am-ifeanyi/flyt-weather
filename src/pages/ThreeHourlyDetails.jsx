import React, { useState, useContext, useEffect } from "react";
import { myContextApi } from "../StateManagement";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import wallpaper from "/wallpaper2.png";

const ThreeHourlyDetails = () => {
  const navigate = useNavigate();
  const { threeHourlyDetails } = useParams();

  const [timeFrame, setTimeFrame] = useState({
    isToday: true,
    isHourly: false,
    isDaily: false,
  });
  const { isToday, isHourly, isDaily } = timeFrame;
  const {
    createUser,
    setLongitude,
    setLatitude,
    setCityName,
    cityName,
    currentWeatherData,
    threeHourlyWeatherData,
  } = useContext(myContextApi);

  const toggleToday = () => {
    setTimeFrame({
      isToday: true,
      isHourly: false,
      isDaily: false,
    });
  };
  const toggleHourly = () => {
    setTimeFrame({
      isToday: false,
      isHourly: true,
      isDaily: false,
    });
  };
  const toggleDaily = () => {
    setTimeFrame({
      isToday: false,
      isHourly: false,
      isDaily: true,
    });
  };

  const date = new Date();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    
    console.log(threeHourlyDetails, "useParams");


  return (
    <div className="bg-[#431098] h-screen text-gray-200">
      {threeHourlyWeatherData?.list?.filter((data) =>
        console.log(data?.dt === threeHourlyDetails)
      )}
      <div className="w-full h-80 rounded-b-3xl">
        <img src={wallpaper} alt="" className="" />
        <AiOutlineArrowLeft
          size={30}
          className="absolute top-5 left-5"
          onClick={() => navigate("/home")}
        />
        <div className="flex items-center justify-between px-5 absolute top-44 w-full">
          <div className="h-36 flex flex-col justify-between w-3/4">
            <h1 className="text-4xl font-bold">
              {Math.round(currentWeatherData?.main?.temp)}&deg;C
            </h1>
            <p className="text-3xl font-bold">{cityName}</p>
            <p className="font-semibold">{date.toDateString()}</p>
          </div>
          <div className="relative h-36 flex flex-col justify-center items-center w-1/4 ">
            <img
              src={`/${currentWeatherData?.weather[0]?.icon}.png`}
              alt=""
              className="w-[100px] h-[100px] mt-2 bg-red-200 rounded-xl border-2"
            />
            <p className="font-bold tracking-widest text-center text-lg">
              {currentWeatherData?.weather[0]?.description[0].toUpperCase()}
              {currentWeatherData?.weather[0]?.description.substring(1)}
            </p>
          </div>
        </div>
        <div className="p-5 grid grid-cols-3 gap-5">
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Temperature</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.temp)}&deg;C
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Feels Like</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.feels_like)}&deg;C
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Humidity</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.humidity)}%
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Pressure</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.pressure)} Pa
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Wind Speed</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.wind?.speed)} km/h
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Wind Degree</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.wind?.deg)}&deg;
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Max Temp</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.temp_max)}&deg;C
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Clouds</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.clouds?.all)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#9F7ADD] text-[14px]">Min Temp</p>
            <p className="font-bold">
              {" "}
              {Math.round(currentWeatherData?.main?.temp_min)}&deg;C
            </p>
          </div>
        </div>
        <div className="mx-5 bg-[#622FB5] p-5 rounded-t-xl  h-[150px] flex flex-col items-center gap-10">
          <div className="flex justify-between w-full border-2 border-[#431098] rounded-2xl items-center font-bold tracking-widest">
            <button
              className={`${
                isToday ? "bg-[#431098]" : "bg-transparent"
              } w-1/3 rounded-2xl shadow-lg`}
              onClick={toggleToday}
            >
              Today
            </button>
            <button
              className={`${
                isHourly ? "bg-[#431098]" : "bg-transparent"
              } w-1/3 rounded-2xl shadow-lg`}
              onClick={toggleHourly}
            >
              Hourly
            </button>
            <button
              className={`${
                isDaily ? "bg-[#431098]" : "bg-transparent"
              } w-1/3 rounded-2xl shadow-lg`}
              onClick={toggleDaily}
            >
              Daily
            </button>
          </div>
          <div className="flex justify-between items-center w-full text-lg font-bold">
            <p className="">Now</p>
            <img
              src={`/${currentWeatherData?.weather[0]?.icon}.png`}
              alt=""
              className="w-[50px] h-[50px] border rounded-xl bg-red-200"
            />
            <p className="">
              {currentWeatherData?.weather[0]?.description[0].toUpperCase()}
              {currentWeatherData?.weather[0]?.description.substring(1)}
            </p>
            <p> {Math.round(currentWeatherData?.main?.temp)}&deg;C</p>
          </div>
        </div>
      </div>
      <div className="relative top-[450px]">
        <Footer />
      </div>
    </div>
  );
};

export default ThreeHourlyDetails;