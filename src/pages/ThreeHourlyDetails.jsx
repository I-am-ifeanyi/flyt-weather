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
  const { cityName, threeWeather } = useContext(myContextApi);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full h-screen md:flex flex-col items-center justify-center">
      <div className="bg-[#431098] text-gray-200 h-screen md:w-1/2 md:m-auto md:rounded-lg">
        {threeWeather[0]
          ?.filter((data) => data.dt == threeHourlyDetails)
          .map((data) => {
            return (
              <div className="w-full h-80 rounded-b-3xl" key={data.dt}>
                <img src={wallpaper} alt="" className="w-full md:h-[400px]" />
                <AiOutlineArrowLeft
                  size={30}
                  className="absolute top-5 left-5 md:relative md:-top-96"
                  onClick={() => navigate("/home")}
                />
                <div className="flex items-center justify-between md:px-32 md:justify-center px-5 absolute md:relative top-44 md:-top-80 py-2 w-full md:bg-[#9F7ADD] rounded-3xl">
                  {" "}
                  <div className="h-36 flex flex-col justify-between w-3/4">
                    <h1 className="text-4xl font-bold">
                      {Math.round(data?.main?.temp)}&deg;C
                    </h1>
                    <p className="text-3xl font-bold">{cityName}</p>
                    <p className="font-semibold">
                      {data.dt_txt.split(" ")[0]}
                      <br />
                      {data.dt_txt.split(" ")[1]}
                    </p>
                  </div>
                  <div className="relative h-36 flex flex-col justify-center items-center w-1/4 ">
                    <img
                      src={`/${data?.weather[0]?.icon}.png`}
                      alt=""
                      className="w-[100px] h-[100px] mt-2 bg-red-200 rounded-xl border-2"
                    />
                    <p className="font-bold tracking-widest text-center text-lg">
                      {data?.weather[0]?.description[0].toUpperCase()}
                      {data?.weather[0]?.description.substring(1)}
                    </p>
                  </div>
                </div>
                <div className="p-5 grid grid-cols-3 gap-5 md:-mt-[250px]">
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Temperature</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.temp)}&deg;C
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Feels Like</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.feels_like)}&deg;C
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Humidity</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.humidity)}%
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Pressure</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.pressure)} Pa
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Wind Speed</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.wind?.speed)} km/h
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Wind Degree</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.wind?.deg)}&deg;
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Ground Level</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.grnd_level)} ft
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Sea Level</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.sea_level)} ft
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Wind Gust</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.wind?.gust)} km/h
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Max Temp</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.temp_max)}&deg;C
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Clouds</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.clouds?.all)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[#9F7ADD] text-[14px]">Min Temp</p>
                    <p className="font-bold">
                      {" "}
                      {Math.round(data?.main?.temp_min)}&deg;C
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="md:hidden">
          {threeWeather[0] && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default ThreeHourlyDetails;
