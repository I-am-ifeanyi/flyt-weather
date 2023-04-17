import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContextApi } from "../StateManagement";

import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillApple,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";

import cloud from "../images/intro--icons/cloud.png";

const Login = () => {
  const { email, password } = useContext(myContextApi);
  const [showPassword, setShowPassword] = useState(false);
  const [isAccountfound, setIsAccountFound] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const { loginEmail, loginPassword } = loginDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginEmail === email && loginPassword === password) {
      navigate("/home");
    } else setIsAccountFound(false);
    return setTimeout(() => {
      setLoginDetails({
        loginEmail: "",
        loginPassword: "",
      });
      setIsAccountFound(true);
    }, 3000);
  };

  const formHandler = (e) => {
    setLoginDetails(() => {
      return {
        ...loginDetails,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#622FB5] h-full p-6 text-gray-200">
      <div className="mt-5">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className={`text-lg mt-2 ${isAccountfound ? "block" : "hidden"}`}>
          Please enter your account details to proceed
        </p>
        {!isAccountfound && (
          <p className="mt-2 text-red-500 text-sm">
            Email or password wrong, please check and try again
          </p>
        )}
      </div>
      <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4">
          <label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 text-[16px] text-gray-800 rounded-md"
              name="loginEmail"
              onChange={formHandler}
              value={loginEmail}
              required
            />
          </label>
          <label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Your Password"
              className="w-full p-3 text-[16px] text-gray-800 rounded-md"
              name="loginPassword"
              onChange={formHandler}
              value={loginPassword}
              required
            />
            {showPassword ? (
              <AiOutlineEye
                className="float-right mr-5 text-gray-800 -mt-8 z-50 relative                "
                size={20}
                onClick={toggleShowPassword}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="float-right mr-5 text-gray-800 -mt-8 z-50 relative                "
                size={20}
                onClick={toggleShowPassword}
              />
            )}
          </label>
        </fieldset>
        <div>
          <p onClick={() => alert("Feature currently unavailable")}>
            Forgot Password?
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-[2px] w-full bg-gray-200"></div>{" "}
            <p className="text-xl">or</p>{" "}
            <div className="h-[2px] w-full bg-gray-200"></div>
          </div>
          <h1 className="text-center mt-4 text-2xl font-bold">Sign in with</h1>
          <div className="flex justify-around items-center mt-10 gap-28">
            <figure
              className="flex flex-col items-center"
              onClick={() => alert("Feature yet to be added ")}
            >
              <FcGoogle className="bg-gray-200 p-2 rounded-full" size={70} />
              <figcaption>Google</figcaption>
            </figure>
            <figure
              className="flex flex-col items-center"
              onClick={() => alert("Feature yet to be added ")}
            >
              <AiFillApple
                className="bg-gray-200 p-2 rounded-full text-gray-800"
                size={70}
              />
              <figcaption>Apple</figcaption>
            </figure>
          </div>
        </div>
        <button className="text-gray-200 mt-6 p-3 shadow-lg rounded-md font-bold text-xl bg-[#7F4CD2]">
          Submit
        </button>
      </form>
      <p
        className="mt-10 underline font-bold flex items-center justify-center gap-2"
        onClick={() => navigate("/signUp")}
      >
        I'm new here <BsArrowRight className="mt-2" />
      </p>
      <div className="">
        <img src={cloud} className="w-full -rotate-12 mt-10" />
      </div>
    </div>
  );
};

export default Login;
