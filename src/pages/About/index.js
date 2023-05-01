import React from "react";
import "./style.css";
import ClosingDay from "../../images/AAAABackyard/Closing_Day.jpg";

const About = () => {
  return (
    <div className="about">
      <img src={ClosingDay} alt={ClosingDay} className="closingDay" />
      <br></br>
      Hello! Welcome to Homelike. My name is Shelby and in 2020 I purchased my
      first house. After years of living in apartments, I've enjoyed the process
      of making my house more "homelike". This website will host my past/present
      home updates and a couple of how-to snippets.
    </div>
  );
};
export default About;
