import React from "react";
import "./style.css";

function Img(props) {
  console.log("index", props.image);
  return (
    <img
      className="gallery-images"
      src={props.image}
      alt={props.id}
      key={props.id}
    ></img>
  );
}

export default Img;
