import React, { useContext } from "react";
import Home from './Home'
import { myContextApi } from "../StateManagement";
import { useNavigate } from "react-router-dom";



const ProtecteRoute = () => {
  const {
    userName,
  } = useContext(myContextApi);
const navigate = useNavigate()

  if (userName) {
    return <Home />;
  } return navigate("/login");
}

export default ProtecteRoute