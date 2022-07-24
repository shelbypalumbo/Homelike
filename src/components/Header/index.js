import React from "react";
import "./style.css";
import banner from "./banner.jpg";

const Header = () => {
  return (
    <div className="header">
      <a href="/About">
        <img src={banner} alt="Homelike banner" className="homelike_banner" />
      </a>{" "}
    </div>
  );
};

export default Header;
