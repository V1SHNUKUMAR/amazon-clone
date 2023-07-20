import React, { useContext, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import offer_icon from "../assets/offer-icon.png";
import Footer from "./Footer";
import globalContext from "../context/globalContext";

const ProductDetailsScreen = () => {
  const context = useContext(globalContext);
  const { product, addToCart } = context;
  // const fetchedProduct = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-white">
      <div className=" max-w-[1500px] mx-auto">
        <div className="flex flex-col justify-center gap-4 md:gap-20 md:flex-row pb-10 md:pt-10">
          {/* product image */}
          <img
            className=" object-contain object-top w-fit md:max-w-sm"
            // src="https://m.media-amazon.com/images/I/61XmAscW1NL._SY450_.jpg"
            src={product.imgUrl}
            alt=""
          />
          {/* product details */}
          <section className="px-3 md:px-4 w-full space-y-2 text-sm max-w-3xl">
            <h1 className="text-base md:text-2xl">
              {/* Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt ||
              Men Printed Shirt (Mistry) */}
              {product.title}
            </h1>
            {/* rating stars */}
            <p className="RATING_STARS text-amber-500 text-xs">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-regular fa-star"></i>
            </p>
            <hr className="mt-1" />
            <h2>
              &#8377;<span className="text-3xl">{product.price}</span>
            </h2>
            <h3 className="text-gray-500 text-xs">
              M.R.P.: <span className="line-through">&#8377;{product.MRP}</span>
            </h3>
            <img
              className="w-16 object-contain py-1"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt=""
            />
            <p>Inclusive of all taxes</p>
            <hr className="my-3" />
            {/* Offers */}
            <h4 className="flex items-center gap-3 md:gap-4 pt-2">
              <img className="w-6" src={offer_icon} alt="" />
              <p className="font-bold text-base">Offers</p>
            </h4>
            <section className="w-full list-none flex gap-3 items-center">
              <OfferSlider />
            </section>
            <hr className="my-3" />
            {/* Benefits */}
            <BenefitsList />
            <hr className="my-3" />
            <div className="BUTTONS py-6 flex flex-col gap-3 items-center md:flex-row ">
              <button
                onClick={() => addToCart(product)}
                className="cursor-pointer p-3 bg-yellow-400 w-full md:max-w-[200px] rounded-full drop-shadow-md hover:brightness-90 active:scale-95 md:active:scale-90 transition md:p-2 "
              >
                Add to Cart
              </button>
              <button className="cursor-pointer p-3 bg-amber-500 w-full md:max-w-[200px] rounded-full drop-shadow-md hover:brightness-90 active:scale-95 md:active:scale-90 transition md:p-2">
                Buy Now
              </button>
            </div>
          </section>
          {/* buttons */}
          {/* <section className="h-screen w-full md:w-1/5 border border-red-400">
            Buttons
          </section> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsScreen;

const OfferComponent = () => {
  return (
    <li className="border space-y-2 text-sm p-3 rounded-lg shadow-md cursor-pointer">
      <h1 className="font-semibold">Bank offer</h1>
      <p className="leading-5">
        Upto &#8377;750.00 discount on select Credit Cards
      </p>
      <p className="text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
        7 offers <i className="fa-solid fa-chevron-right text-[10px]"></i>{" "}
      </p>
    </li>
  );
};

const OfferSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={5}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "180px" }}>
        <OfferComponent />
      </SwiperSlide>
    </Swiper>
  );
};

const BenefitsList = () => {
  return (
    <div className="SERVICES flex flex-wrap justify-start items-start gap-x-1 md:gap-x-0 text-xs">
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
        }
        caption={"Free Delivery"}
      />
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
        }
        caption={"Pay on Delivery"}
      />
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
        }
        caption={"10 days Return & Exchange"}
      />
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
        }
        caption={"Top Brand"}
      />
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
        }
        caption={"Amazon Delivered"}
      />
      <BenefitComponent
        imgUrl={
          "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
        }
        caption={"Secure transaction"}
      />
    </div>
  );
};

const BenefitComponent = (props) => {
  return (
    <div className="cursor-pointer flex flex-col flex-1 md:flex-initial md:w-24 gap-1 justify-center items-center text-center">
      <img className="h-10 object-contain sm:h-9" src={props.imgUrl} alt="" />
      <p className="text-sky-700">{props.caption}</p>
    </div>
  );
};
