import { Routes, Route } from "react-router-dom";

import Intro from "./pages/intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CurrentDetails from "./pages/currentDetails";
import ThreeHourlyDetails from "./pages/ThreeHourlyDetails";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRoute2 from "./pages/ProtectedRoute2";

function App() {
  return (
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
  );
}

export default App;
