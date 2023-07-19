import React from "react";

import Slider from "./Slider";

import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";
import img5 from "../assets/slider/5.jpg";
import img6 from "../assets/slider/6.jpg";
import HomescreenGrid from "./HomescreenGrid";

import { useEffect } from "react";

const Homescreen = () => {
  const images = [
    { img: img1, imgUrl: "../assets/slider/1.jpg" },
    { img: img2, imgUrl: "../assets/slider/2.jpg" },
    { img: img3, imgUrl: "../assets/slider/3.jpg" },
    { img: img4, imgUrl: "../assets/slider/4.jpg" },
    { img: img5, imgUrl: "../assets/slider/5.jpg" },
    { img: img6, imgUrl: "../assets/slider/6.jpg" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="relative max-w-[1500px] mx-auto">
      <Slider images={images} />
      <HomescreenGrid />
    </div>
  );
};

export default Homescreen;
