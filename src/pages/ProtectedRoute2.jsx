import React, { useContext } from "react";
import CurrentDetails from "./currentDetails";
import { myContextApi } from "../StateManagement";
import { useNavigate } from "react-router-dom";

const ProtecteRoute2 = () => {
  const { userName } = useContext(myContextApi);
  const navigate = useNavigate();

  if (userName) {
    return <CurrentDetails />;
  }
  return navigate("/login");
};

export default ProtecteRoute2;
