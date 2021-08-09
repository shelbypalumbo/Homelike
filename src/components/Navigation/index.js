import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <div>
      <ul className="nav_menu">
        <li className="nav_list_item">
          <a className="no_underline" href="./">
            About Homelike
          </a>
        </li>

        <li className="nav_list_item">
          <a className="no_underline" href="./">
            How To's
          </a>
        </li>
        <li className="nav_list_item">
          <a className="no_underline" href="./">
            Before/After Gallery
          </a>
        </li>
        <li className="nav_list_item">
          <a className="no_underline" href="./">
            Shop
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
