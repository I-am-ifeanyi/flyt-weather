import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContextApi } from "../StateManagement";

import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillApple,
} from "react-icons/ai";
const SignUp = () => {
  const { createUser, setCreateUser } = useContext(myContextApi);
  const navigate = useNavigate();
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


  const { name, email, password } = createUser;

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

   const formHandler = (e) => {
     const { name, value } = e.target;
     setCreateUser((prevState) => ({
       ...prevState,
       [name]: value,
     }));
   };

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
    setIsFormSubmitted(true);
    setCreateUser({
      name: "",
      email: "",
      password: "",
    });
    localStorage.setItem("user", JSON.stringify(createUser));

    navigate("/login");

    return;
  };



 

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full h-screen md:flex items-center justify-center">
      <div className="bg-[#622FB5] text-gray-200 h-screen md:h-[90vh] p-6 md:w-1/2 md:m-auto md:rounded-lg">
        <h1
          className={`text-4xl font-bold mt-10 md:mt-2 md:text-center ${
            isFormSubmitted ? "text-center" : "null"
          }`}
        >
          {!isFormSubmitted ? "Sign Up" : "You are Signed Up"}
        </h1>
        <p
          className={`${isFormSubmitted ? "text-center" : "null"} text-lg ${
            isFormSubmitted ? "w-full" : "w-3/4"
          } mt-3 md:w-2/3 md:m-auto`}
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
            className="flex flex-col gap-4 mt-5 md:w-2/3 m-auto"
            onSubmit={handleSubmit}
          >
            <label className="text-lg font-bold flex flex-col gap-2 w-full">
              Name:
              <input
                type="text"
                placeholder="First Name"
                required
                className="p-2 w-full text-gray-800 rounded-lg"
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
                placeholder="Email"
                required
                className="p-2 w-full text-gray-800 rounded-lg"
                value={email}
                name="email"
                onChange={formHandler}
              />
            </label>
            <label>
              Password:
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                className="p-2 w-full text-gray-800 rounded-lg"
                name="password"
                onChange={formHandler}
                value={password}
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
              {!isPasswordCorrect && (
                <p className="text-[12px] text-red-400">
                  Password must not be less than 8 characters
                </p>
              )}
            </label>
            <button className="bg-gray-200 text-[#622FB5] w-full mt-4 py-2 rounded-md font-bold text-xl">
              Submit
            </button>
          </form>
        )}
        <p
          onClick={() => navigate("/login")}
          className={`mt-5 text-center ${
            isFormSubmitted ? "hidden" : null
          } cursor-pointer`}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
};

export default SignUp;
