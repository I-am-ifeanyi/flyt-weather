import { Routes, Route } from "react-router-dom";


import Intro from "./pages/Intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Details from "./pages/Details";



function App() {
  return (
      <div className="">
        <Routes>
          <Route index element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="home">
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
