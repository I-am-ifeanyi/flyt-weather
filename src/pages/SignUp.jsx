import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContextApi } from "../StateManagement";

import cloud from "../images/intro--icons/cloud.png";

const SignUp = () => {
  const { createUser, setCreateUser } = useContext(myContextApi);
  const navigate = useNavigate();
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { name, email, password } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setIsPasswordCorrect(false);
      setTimeout(() => {
        setCreateUser({
          name: "",
          email: "",
          password: "",
        });
      }, 3000);
    } else setIsPasswordCorrect(true);
    console.log(createUser);
    setIsFormSubmitted(true);
    localStorage.setItem("user", JSON.stringify(createUser));

    navigate("/login");

    return;
  };

  const formHandler = (e) => {
    setCreateUser(() => {
      return {
        ...createUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="bg-[#622FB5] h-screen p-6 text-gray-200">
      <h1
        className={`text-4xl font-bold ${
          isFormSubmitted ? "text-center" : "null"
        }`}
      >
        {!isFormSubmitted ? "Sign Up" : "You are Signed Up"}
      </h1>
      <p
        className={`${isFormSubmitted ? "text-center" : "null"} text-lg ${
          isFormSubmitted ? "w-full" : "w-3/4"
        } mt-2`}
      >
        {!isFormSubmitted ? (
          "Enter a few details to sign up to Flyt Weather App"
        ) : (
          <span className="text-2xl font-bold">
            Account created successfully
          </span>
        )}
      </p>
      {!isFormSubmitted && (
        <form
          className="flex flex-col gap-5 mt-5 w-full items-center"
          onSubmit={handleSubmit}
        >
          <label className="text-lg font-bold flex flex-col gap-2 w-full">
            Name:
            <input
              type="text"
              placeholder="Your first name & surname"
              required
              className="p-3 w-full text-gray-800"
              value={name}
              name="name"
              onChange={formHandler}
            />
            {!isNameCorrect && (
              <p className="text-[12px] text-red-400">
                Name must be longer than 8 characters
              </p>
            )}
          </label>
          <label className="text-lg font-bold flex flex-col gap-2 w-full">
            Email:
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 w-full text-gray-800"
              value={email}
              name="email"
              onChange={formHandler}
            />
          </label>
          <label className="text-lg font-bold flex flex-col gap-2 w-full">
            Password:
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 w-full text-gray-800"
              value={password}
              name="password"
              onChange={formHandler}
            />
            {!isPasswordCorrect && (
              <p className="text-[12px] text-red-400">
                Password must be longer than 8 characters
              </p>
            )}{" "}
          </label>
          <button className="bg-gray-200 text-[#622FB5] w-full mt-4 py-2 rounded-md font-bold text-xl">
            Submit
          </button>
        </form>
      )}
      <p
        onClick={() => navigate("/login")}
        className={`mt-5 text-center ${isFormSubmitted ? "hidden" : null}`}
      >
        Already have an account?
      </p>
      <div className="">
        <img src={cloud} className="w-full -rotate-12 mt-10" />
      </div>
    </div>
  );
};

export default SignUp;
