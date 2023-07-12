import React from "react";
// import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Slider = (props) => {
  const images = props.images;

  const swiperRef = useRef();

  return (
    <div className="relative w-full">
      <div className="gradient-effect absolute h-[50%] w-full bottom-0 z-10 bg-gradient-to-t from-white"></div>
      {
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img src={image.img} alt="sale" />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      <div className="absolute top-[30%] translate-y-[-70%] z-10 w-full text-xl md:top-[23%] md:translate-y-[-78%]md: md:px-6 md:text-4xl">
        <button
          className=" absolute left-4  hover:scale-125 active:scale-50 duration-200"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i class="fa-solid fa-chevron-right rotate-180"></i>
        </button>
        <button
          className=" absolute right-4 hover:scale-125 active:scale-50 duration-200"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
