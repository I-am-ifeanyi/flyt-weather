import React, { useContext, useState } from "react";
import { myContextApi } from "../StateManagement";
import Footer from "../components/Footer";
import Search from "../components/Search";
import axios from "axios";
import { useQuery } from "react-query";

import { AiOutlineDown } from "react-icons/ai";

import place1 from "../images/home--images/place1.png";
import place2 from "../images/home--images/place2.svg";
import Iconweather1 from "../images/home--images/Iconweather1.png";
import Iconweather2 from "../images/home--images/Iconweather2.png";
import Iconweather3 from "../images/home--images/Iconweather3.png";
import Iconweather4 from "../images/home--images/Iconweather4.png";

const Home = () => {
  const {
    createUser,
    hourlyWeather,
    currentWeatherDetails,
    cityName,
    setCityName,
    places,
    setPlaces,
    hourlyWeatherDetails,
    dailyWeatherDetails,
    isLoading,
    data,
    isError,
    error,
    isFetching,
  } = useContext(myContextApi);
  const { name } = createUser;
  const date = new Date();
  const { temperature, temperatureApparent } = currentWeatherDetails;

  const dateStartRange = new Date(hourlyWeather?.startTime);
  const dateEndRange = new Date(hourlyWeather?.endTime);

  const handleOnSearchChange = (searchData) => {
    setPlaces(searchData?.value.split(" "));
  };
  console.log(places)

  return (
    <>
      <div className="bg-[#431098] h-screen text-gray-200 overflow-y-hidden">
        <div className="w-full h-80 bg-[url(wallpaper.png)] rounded-b-3xl p-5 ">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold w-1/3">Hi, {name}</h1>
            <div className="w-2/3">
              <Search onSearchChange={handleOnSearchChange} />
            </div>
          </div>
          <div className="flex justify-between mt-20">
            <div className="w-2/3">
              <h1 className="text-4xl font-bold">{cityName}</h1>
              <p>{date.toLocaleDateString()}</p>
              <p>{Math.round(temperatureApparent)}&#176;C</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                {Math.round(temperature)}&#176;C
              </h1>
              <p>Clear Sky</p>
            </div>
          </div>
         
        </div>
        <div className="flex gap-6 justify-center p-5">
          <figure>
            <img src={place1} alt="" className="rounded-xl shadow-lg" />
            <figcaption className="relative -mt-52 p-2 font-bold text-center z-50">
              Onitsha 24&#176;C
            </figcaption>
          </figure>
          <figure>
            <img src={place2} alt="" className="rounded-xl shadow-lg" />
            <figcaption className="relative -mt-52 p-2 font-bold text-center z-50">
              Awka 24&#176;C
            </figcaption>
          </figure>
        </div>
        <div className="relative top-44 p-5">
          <h1 className="font-bold text-lg mb-2">
            {dateStartRange.toDateString()} - {dateEndRange.toDateString()}
          </h1>
          <div className="flex overflow-x-scroll gap-2 w-full">
            {hourlyWeather?.intervals?.map((data) => {
              return (
                <div
                  className="w-1/5 flex-shrink-0 rounded-xl pb-4 flex flex-col items-center justify-center"
                  key={data.startTime}
                >
                  <figure className=" bg-[#622FB5]  p-4  border flex flex-col items-center justify-center w-full rounded-xl">
                    <img
                      src={Iconweather1}
                      alt=""
                      className="w-[50px] h-[50px] mt-2 ml-4"
                    />
                    <figcaption>
                      {Math.round(data?.values?.temperature)}&#176;C
                    </figcaption>
                  </figure>
                  <p className="text-center">
                    {data?.startTime.split("T")[1].split("+")[0].slice(0, -3)}
                  </p>
                  <p className="text-center text-[8px]">
                    {new Date(data?.startTime.substring(0, 10)).toDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
