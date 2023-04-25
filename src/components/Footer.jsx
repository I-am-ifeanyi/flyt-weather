import React from "react";
import { Link } from "react-router-dom";

import compass from "../images/home--images/footer-icons/Compass_light.png";
import home from "../images/home--images/footer-icons/Home_fill.png";
import search from "../images/home--images/footer-icons/Search_alt_light.png";
import settings from "../images/home--images/footer-icons/Setting_alt_line.png";

const Footer = () => {
  return (
    <footer
      className=" bg-[#7F4CD2] p-2 absolute w-full bottom-0"
    >
      <div className="flex justify-around items-center ">
        <Link to="/home"><img src={home} alt="" /></Link>
        <img src={search} alt="" />
        <img src={compass} alt="" />
        <img src={settings} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
