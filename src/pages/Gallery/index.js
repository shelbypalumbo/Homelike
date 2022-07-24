import React, { Component } from "react";
import galleryImages from "../../galleryImages.js";
import Img from "../../components/Img";

class Gallery extends Component {
  state = {
    galleryImages
  };
  render() {
    return (
      <>
        {" "}
        GALLERY
        <div>
          {this.state.galleryImages.map(gallery_img => (
            <Img
              key={gallery_img.id}
              image={gallery_img.image.default}
              alt={gallery_img.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Gallery;
