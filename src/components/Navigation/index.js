import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav_menu">
        <li className="nav_list_item">
          <Link to="/About" className="no_underline">
            About Homelike
          </Link>
        </li>

        <li className="nav_list_item">
          <Link to="/HowTo" className="no_underline">
            How To's
          </Link>
        </li>
        <li className="nav_list_item">
          <Link to="/Gallery" className="no_underline">
            Before/After Gallery
          </Link>
        </li>
        <li className="nav_list_item">
          <Link to="/Shop" className="no_underline">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
