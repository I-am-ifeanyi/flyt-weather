import React, {useState} from "react";

import Footer from "../components/Footer";


import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import wallpaper from "/wallpaper2.png";
import sun from "/sun.png"

const Details = () => {
  const navigate = useNavigate();
  const [timeFrame, setTimeFrame] = useState({
    isToday: true,
    isHourly: false,
    isDaily: false
  })
  const { isToday, isHourly, isDaily } = timeFrame;

  const toggleToday = () => {
    setTimeFrame({
      isToday: true,
      isHourly: false,
      isDaily: false,
    });
  }
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

  return (
    <div className="bg-[#431098] h-screen text-gray-200 overflow-y-hidden">
      <div className="w-full h-80 rounded-b-3xl">
        <img src={wallpaper} alt="" className="" />
        <AiOutlineArrowLeft
          size={30}
          className="absolute top-5 left-5"
          onClick={() => navigate("/home")}
        />
        {/* temperature: "", temperatureApparent: "", cloudCover: "", weatherCode:
        "", windDirection: "", precipitationIntensity: "", precipitationType:
        "", windSpeed: "", windGust: "" */}
        <div className="flex items-center justify-between gap-[78px] px-5 absolute top-64">
          <div className="h-36 flex flex-col justify-between">
            <h1 className="text-6xl font-bold">30&deg;C</h1>
            <p className="text-3xl font-bold">Onitsha</p>
            <p className="font-semibold">20 Apr Wed, 20&deg;C/29&deg;C</p>
          </div>
          <div className="relative h-36 flex flex-col justify-between items-center">
            <img src={sun} alt="" className="" />
            <p className="font-bold tracking-widest">Clear Sky</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">Temperature</p>
              <p>800hcpa</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">Temperature Apparent</p>
              <p>2.0mm</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">Cloud Cover</p>
              <p>56%</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">weatherCode</p>
              <p>34</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">
                precipitationIntensity
              </p>
              <p>11km</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">windDirection</p>
              <p>4km/h</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">windSpeed</p>
              <p>4km/h</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">precipitationType</p>
              <p>34</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#9F7ADD] text-[14px]">windGust</p>
              <p>11km</p>
            </div>
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
          <div className="flex justify-between w-full text-lg font-bold">
            <p className="">Now</p>
            <img src={sun} alt="" className="w-[30px] h-[30px] " />
            <p className="">Clear</p>
            <p>24&deg;C</p>
          </div>
        </div>
      </div>
      <div className="relative top-[450px]">
        <Footer />
      </div>
    </div>
  );
};

export default Details;
