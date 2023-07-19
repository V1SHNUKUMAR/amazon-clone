import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const ProductSlider = (props) => {
  const { title, buttonName, allProductsData } = props;
  return (
    <div className="w-full space-y-3">
      <div className="header flex gap-2 items-baseline md:gap-4">
        <h1 className="text-sm font-bold sm:text-base md:text-xl">{title}</h1>
        <p className="cursor-pointer w-fit text-cyan-800 text-xs hover:underline hover:text-orange-700 md:text-sm">
          {buttonName}
        </p>
      </div>
      {/* silder */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {allProductsData.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <Slide
              image={product.imageUrl}
              off={product.off}
              offerName={product.offerName}
              productTitle={[product.productTitle]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

// slide component to be used inside ProductSlider

const Slide = (props) => {
  const { image, off, offerName, productTitle } = props;

  return (
    <div className="cursor-pointer flex flex-col gap-2 h-full w-fit md:min-w-[190px] max-w-[190px] xs:max-w-[250px]">
      <div className="p-2 h-48">
        <img
          className="mx-auto object-center object-contain max-h-full"
          src={image}
          alt="product"
        />
      </div>
      {off !== undefined ? (
        <p className=" text-red-700 space-x-2 text-[10px] xs:text-xs">
          <span className="text-white bg-red-700 px-1.5 py-1">
            Up to {off}% off
          </span>
          <span className="capitalize font-bold">{offerName}</span>
        </p>
      ) : null}
      {
        <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {productTitle}
        </p>
      }
    </div>
  );
};
