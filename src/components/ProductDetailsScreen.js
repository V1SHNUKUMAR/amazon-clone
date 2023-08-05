import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import offer_icon from "../assets/offer-icon.png";
import Footer from "./Footer";

const ProductDetailsScreen = () => {
  let product = JSON.parse(localStorage.getItem("productDetails"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showAlert = () => {
    alert("Product Added to Cart!");
  };

  // add products to cart and store them in localStorage
  const addToCart = (product) => {
    product = { ...product, key: Date.now() };
    if (JSON.parse(localStorage.getItem("cartItems")) != null) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.setItem("cartItems", JSON.stringify([product]));
    }
  };

  return product === null ? (
    <div className="flex flex-col gap-4 items-center justify-center text-center text-xl min-h-[500px]">
      <h1 className="text-2xl font-semibold">Oops !</h1>
      <h2 className="text-sm md:text-base">Some unexpected error occurred</h2>
      <Link to={"/products-listing-page"}>
        {" "}
        <button className="max-w-xs bg-yellow-300 py-2.5 px-10 rounded-lg drop-shadow-md hover:bg-yellow-400 transition-colors sm:py-1.5 sm:text-sm">
          Go Back
        </button>
      </Link>
    </div>
  ) : (
    <div className="bg-white">
      <div className=" max-w-[1500px] mx-auto">
        <div className=" flex flex-col justify-center gap-4 sm:gap-1 lg:gap-10 md:flex-row pb-10 md:pt-10 md:px-4">
          {/* product image */}
          <img
            className=" object-contain object-top sm:max-w-xs lg:max-w-sm w-fit mx-auto md:mx-0"
            // src="https://m.media-amazon.com/images/I/61XmAscW1NL._SY450_.jpg"
            src={product.imgUrl}
            alt=""
          />
          {/* product details */}
          <section className="px-3 w-full space-y-2 text-sm md:max-w-2xl ">
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
                onClick={(e) => {
                  addToCart(product);
                  showAlert();
                }}
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
      className="mySwiper sm:max-w-xl md:max-w-sm lg:max-w-full"
    >
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
        <OfferComponent />
      </SwiperSlide>
      <SwiperSlide className="py-2" style={{ maxWidth: "170px" }}>
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

// const AlertComponent = () => {
//   return (
//     <div
//       class="mb-3 absolute top-4 right-4 inline-flex w-full items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 translate-x-full"
//       role="alert"
//     >
//       <span class="mr-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           class="h-5 w-5"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
//             clip-rule="evenodd"
//           />
//         </svg>
//       </span>
//       Added to Cart.
//     </div>
//   );
// };
