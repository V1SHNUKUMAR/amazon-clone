import React from "react";

import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";
import img5 from "../assets/slider/5.jpg";
import img6 from "../assets/slider/6.jpg";

const Slider = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative w-full">
      {"hi" &&
        images.map((image) => {
          <div className="gradient absolute h-full w-full bg-gradient-to-t from-white to-50% to-transparent bottom-0">
            <img src={image} alt="image" />
          </div>;
        })}
    </div>
  );
};

export default Slider;
