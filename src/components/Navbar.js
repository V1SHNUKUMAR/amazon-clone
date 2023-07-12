import React from "react";
import { useState } from "react";

import amazon_logo_white from "../assets/amazon-full-white.png";
import indian_flag from "../assets/indian-flag.png";

const Navbar = () => {
  const options = [
    { value: "All Categories", text: "All Categories" },
    { value: "Alexa Skills", text: "Alexa Skills" },
    { value: "Amazon Devices", text: "Amazon Devices" },
    { value: "Amazon Fashion", text: "Amazon Fashion" },
    { value: "Amazon Fresh", text: "Amazon Fresh" },
    { value: "Amazon Pharmacy", text: "Amazon Pharmacy" },
    { value: "Appliances", text: "Appliances" },
    { value: "Apps & Games", text: "Apps & Games" },
    { value: "Baby", text: "Baby" },
    { value: "Beauty", text: "Beauty" },
    { value: "Books", text: "Books" },
    { value: "Car & Motorbike", text: "Car & Motorbike" },
    { value: "Clothing & Accessories", text: "Clothing & Accessories" },
    { value: "Collectibles", text: "Collectibles" },
    { value: "Computers & Accessories", text: "Computers & Accessories" },
    { value: "Electronics", text: "Electronics" },
    { value: "Furniture", text: "Furniture" },
    { value: "Garden & Outdoors", text: "Garden & Outdoors" },
    { value: "Gift Cards", text: "Gift Cards" },
    { value: "Grocery & Gourmet Foods", text: "Grocery & Gourmet Foods" },
    { value: "Health & Personal Care", text: "Health & Personal Care" },
    { value: "Home & Kitchen", text: "Home & Kitchen" },
    { value: "Industrial & Scientific", text: "Industrial & Scientific" },
    { value: "Jewellery", text: "Jewellery" },
    { value: "Kindle Store", text: "Kindle Store" },
    { value: "Luggage & Bags", text: "Luggage & Bags" },
    { value: "Luxury Beauty", text: "Luxury Beauty" },
    { value: "Movies & TV Shows", text: "Movies & TV Shows" },
    { value: "Music", text: "Music" },
    { value: "Musical Instruments", text: "Musical Instruments" },
    { value: "Office Products", text: "Office Products" },
    { value: "Pet Supplies", text: "Pet Supplies" },
    { value: "Prime Video", text: "Prime Video" },
    { value: "Shoes & Handbags", text: "Shoes & Handbags" },
    { value: "Software", text: "Software" },
    { value: "Sports, Fitness & Outdoors", text: "Sports, Fitness & Outdoors" },
    { value: "Subscribe & Save", text: "Subscribe & Save" },
    { value: "Tools & Home Improvement", text: "Tools & Home Improvement" },
    { value: "Toys & Games", text: "Toys & Games" },
    { value: "Under ₹500", text: "Under ₹500" },
    { value: "Video Games", text: "Video Games" },
    { value: "Watches", text: "Watches" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleOnClick = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Upper part */}
      <ul className="nav p-3 flex flex-wrap justify-between items-center gap-4 md:gap-6 md:flex-nowrap whitespace-nowrap 2xl:justify-center 2xl:gap-16">
        <li className="nav-item flex items-center gap-4">
          <button className="hamburger cursor-pointer text-2xl md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="amazon-logo cursor-pointer mt-1 w-20 md:w-24">
            <img className="h-full" src={amazon_logo_white} alt="amazon.in" />
          </div>
        </li>
        <li className="flex-1 md:hidden"></li>
        <li className="user cursor-pointer flex items-center text-xs gap-1 md:order-5">
          <span>
            Sign in <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span>
            <i className="fa-regular fa-user text-xl"></i>
          </span>
        </li>
        <li className="cart cursor-pointer text-xl md:order-7">
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <span className="hidden md:inline text-base font-bold">Cart</span>{" "}
        </li>
        <li className="nav-item search flex items-center mx-auto w-full text-black md:order-3 md:mx-4 max-w-2xl">
          <select
            defaultValue={selected}
            className="h-10 w-28 hidden lg:block border-2 text-xs rounded-l-md bg-gray-100"
            name="main-dropdown"
            id="main-dropdown"
          >
            {options.map((option) => {
              return (
                <option
                  className="text-base"
                  key={option.value}
                  value={option.value}
                  onClick={handleOnClick}
                >
                  {option.value}
                </option>
              );
            })}
          </select>
          <input
            className="w-full rounded-l-lg border-none outline-none px-2 py-2.5 lg:py-2 lg:rounded-none"
            type="search"
            name="search"
            id="search"
            placeholder="Search Amazon.in"
          />
          <div className="bg-white rounded-r-lg focus:outline-4 md:rounded-r-md">
            <button className="cursor-pointer rounded-r-lg outline-none border-none px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 md:py-[7px] lg:py-[5.5px] md:px-3.5 md:text-xl md:rounded-l-none">
              <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </button>
          </div>
        </li>
        <li className="nav-item location cursor-pointer flex items-end gap-2 md:order-2">
          <div className="text-xl">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="space-y-0 gap-y-0-0">
            <div className="upper text-gray-400 text-xs">Select your</div>
            <div className="lower font-bold">Location</div>
          </div>
        </li>
        <li className="nav-item country cursor-pointer flex items-center gap-2 md:order-4">
          <div className="w-5">
            <img
              className="w-full h-full"
              src={indian_flag}
              alt="indian-flag"
            />
          </div>
          <div className="flex items-center gap-1 font-bold">
            EN <i className="fa-solid fa-sort-down text-xs text-gray-400"></i>
          </div>
        </li>
        <li className="nav-item returns cursor-pointer md:order-6">
          <div className="space-y-0 gap-y-0-0">
            <div className="upper text-start text-xs">Returns</div>
            <div className="lower font-bold">& Orders</div>
          </div>
        </li>
      </ul>
      {/* lower part */}
      <ul className="flex items-center gap-4 overflow-auto bg-gray-800 px-4 py-3 text-sm whitespace-nowrap 2xl:justify-center 2xl:gap-16">
        <li className="hamburger-all cursor-pointer hidden md:block">
          <button className="hamburger cursor-pointer text-xl gap-2 flex items-center">
            <i className="fa-solid fa-bars"></i>
            <span className="text-sm"> All</span>
          </button>
        </li>
        <li className=" cursor-pointer ">Amazon miniTV</li>
        <li className=" cursor-pointer ">Sell</li>
        <li className=" cursor-pointer ">Best Sellers</li>
        <li className=" cursor-pointer ">{"Today's deals"}</li>
        <li className=" cursor-pointer ">Mobiles</li>
        <li className=" cursor-pointer ">New Releases</li>
        <li className=" cursor-pointer ">Customer Service</li>
        <li className=" cursor-pointer flex items-center gap-1">
          Prime <i className="fa-solid fa-sort-down text-xs text-gray-400"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
