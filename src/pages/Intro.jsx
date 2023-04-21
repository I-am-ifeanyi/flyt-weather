import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import icon1 from "../images/intro--icons/icon1.png";
import icon2 from "../images/intro--icons/icon2.png";
import icon3 from "../images/intro--icons/icon3.png";
import icon4 from "../images/intro--icons/icon4.png";
import { myContextApi } from "../StateManagement";

const Intro = () => {
  const navigate = useNavigate();
  const {} = useContext(myContextApi);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-[#622FB5] h-screen md:h-[90vh] p-6 md:w-1/2 md:m-auto md:rounded-lg">
        <div className="flex flex-col md:mt-10">
          <figure className="w-full">
            <img
              src={icon2}
              alt="weather"
              className="w-[130px] h-[130px] md:w-[100px] md:h-[100px]"
            />
          </figure>
          <figure className="w-full">
            <img
              src={icon1}
              alt="weather"
              className="w-[130px] h-[130px] float-right md:w-[100px] md:h-[100px] md:-mt-24"
            />
          </figure>
          <figure className="w-full">
            <img
              src={icon4}
              alt="weather"
              className="w-[130px] h-[130px] md:w-[100px] md:h-[100px] md:ml-40 "
            />
          </figure>
          <figure className="w-full">
            {" "}
            <img
              src={icon3}
              alt="weather"
              className="w-[130px] h-[130px] float-right md:w-[100px] md:h-[100px] md:mr-32 md:-mt-24"
            />
          </figure>
        </div>
        <div className="text-gray-200 flex flex-col gap-2 tracking-wider md:mt-20">
          <h1 className="text-4xl font-bold">My Weather App</h1>
          <p className="text-lg">
            Check live weather updates all over the world with just one tap
          </p>
          <button
            className="bg-[#7F4CD2] p-2 rounded-xl text-2xl font-bold hover:bg-[#351b5d] shadow-lg mt-4"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
