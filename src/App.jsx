import { Routes, Route } from "react-router-dom";

import Intro from "./pages/Intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CurrentDetails from "./pages/currentDetails";
import ThreeHourlyDetails from "./pages/ThreeHourlyDetails";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRoute2 from "./pages/ProtectedRoute2";

function App() {
  return (<div>
    <div className="w-full h-screen hidden md:flex items-center justify-center text-3xl text-white bg-[#7F4CD2] font-bold tracking-widest">
      <h1>Mobile Responsive Only</h1>
    </div>
    <div className="md:hidden">
    <Routes>
      <Route index element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            {" "}
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/current-weather-details"
        element={
          <ProtectedRoute2>
            {" "}
            <CurrentDetails />{" "}
          </ProtectedRoute2>
        }
      />
      <Route
        path="/home/:threeHourlyDetails"
        element={<ThreeHourlyDetails />}
      />
    </Routes>
    </div>
  </div>
  );
}

export default App;
