import { Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CurrentDetails from "./pages/currentDetails";
import ThreeHourlyDetails from "./pages/ThreeHourlyDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/current-weather-details" element={<CurrentDetails />} />
        <Route path="/home/:threeHourlyDetails" element={<ThreeHourlyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
