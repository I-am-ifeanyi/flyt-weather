import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { myContextApi } from "../StateManagement";
import Footer from "../components/Footer";
import Search from "../components/Search";

import place1 from "../images/home--images/place1.png";
import place2 from "../images/home--images/place2.svg";

const Home = () => {
  const {
    setLongitude,
    setLatitude,
    setCityName,
    cityName,
    currentWeatherData,

    threeHourlyWeatherData,
    isCurrentWeatherLoading,
    threeWeather,
    isThreeWeatherError,
    threeWeatherError,
    userName,
  } = useContext(myContextApi);
  const date = new Date();
   

  const handleOnSearchChange = (searchData) => {
    const lat = searchData?.value?.split(" ")[0];
    const long = searchData?.value?.split(" ")[1];
    setLatitude(lat);
    setLongitude(long);
    setCityName(searchData?.label);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const style = {
    backgroundImage: `url(wallpaper.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
  }

  if (!currentWeatherData) {
    <h1>Data is not available</h1>
  } else if (!threeHourlyWeatherData) {
    <h1>Data is not available</h1>
  }
    return (
      <div className="w-full h-screen md:flex flex-col items-center justify-center">
        <div className="bg-[#431098] text-gray-200 h-screen md:w-1/2 md:m-auto md:rounded-lg">
          <div
            className="w-full h-[300px] bg-[url(wallpaper.png)] rounded-b-3xl p-5 "
            style={style}
          >
            <div className="flex justify-between items-center md:mt-5">
              <h1 className="text-xl font-semibold">Hi, {userName}</h1>
              <div className="w-2/3">
                <Search onSearchChange={handleOnSearchChange} />
              </div>
            </div>
            <Link to="/current-weather-details">
              <div className="flex justify-between mt-28 md:mt-20 gap-5">
                <div className="w-2/3">
                  <h1 className="text-2xl font-bold">{cityName}</h1>
                  <p className="text-xs">{date.toLocaleDateString()}</p>
                  <p className="text-sm font-bold">
                    {Math.round(currentWeatherData?.main?.temp)}&#176;C/
                    {Math.round(currentWeatherData?.main?.feels_like)}&#176;C
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center bg-red-200 w-[130px] h-16 rounded-lg">
                    {!isCurrentWeatherLoading && (
                      <img
                        src={`${currentWeatherData?.weather[0]?.icon}.png`}
                        alt=""
                        className="w-[60px] h-[60px] mt-2"
                      />
                    )}
                    {isCurrentWeatherLoading ? (
                      <p className="text-xs text-gray-800">Loading ...</p>
                    ) : (
                      <h1 className="text-3xl font-bold text-gray-800">
                        {Math.round(currentWeatherData?.main?.temp)}&#176;C
                      </h1>
                    )}
                  </div>

                  <p className="flex font-semibold">
                    {currentWeatherData?.weather[0]?.description[0].toUpperCase()}
                    {currentWeatherData?.weather[0]?.description.substring(1)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex gap-6 justify-center p-5 md:-mt-16">
            <figure>
              <img
                src={place1}
                alt=""
                className="rounded-xl shadow-lg md:w-[150px] md:h-[150px]"
              />
              <figcaption className="relative -mt-52 md:-mt-36 p-2 font-bold text-center z-50">
                Onitsha 24&#176;C
              </figcaption>
            </figure>
            <figure className="md:w-[150px] md:h-[150px]">
              <img
                src={place2}
                alt=""
                className="rounded-xl shadow-lg md:w-full md:h-full"
              />
              <figcaption className="relative -mt-52 md:-mt-36 p-2 font-bold text-center z-50">
                Awka 24&#176;C
              </figcaption>
            </figure>
          </div>
          <div className="relative top-36 md:-top-5 p-5">
            <h1 className="font-bold text-lg">Three Hourly Weather Data</h1>
            <div className="flex gap-2 justify-around mt-2 overflow-x-scroll pb-2 px-3">
              {threeWeather[0]
                ?.map((data) => {
                  return (
                    <div
                      className="w-1/4 rounded-lg flex-shrink-0"
                      key={data.dt}
                    >
                      <Link to={`/home/${data.dt}`}>
                        <figure className=" bg-[#622FB5]  p-4  border flex flex-col items-center justify-center w-full rounded-lg">
                          <img
                            src={`${data?.weather[0]?.icon}.png`}
                            alt="Weather Icon"
                            className="w-[50px] h-[50px] mt-2"
                          />
                          <figcaption>
                            {Math.round(data?.main?.temp)}&#176;C
                          </figcaption>
                        </figure>{" "}
                      </Link>

                      <p className="text-center text-[10px]">
                        {data?.dt_txt.split(" ")[1]}
                        <br />
                        {data?.dt_txt.split(" ")[0]}
                      </p>
                    </div>
                  );
                })
                .sort((a, b) => a - b)}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Footer />
        </div>
      </div>
    );
};

export default Home;
