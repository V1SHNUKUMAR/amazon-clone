import React from "react";
import amazon_logo from "../assets/amazon-full-white.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 body-font text-white">
      <div className="py-3 cursor-pointer bg-gray-700 hover:bg-gray-600 duration-100 text-center">
        Back to top
      </div>
      <div className="container px-5 py-10 text-sm mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium mb-3 text-base">
              Get to Know Us
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <p className="cursor-pointer hover:underline">About Us</p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Careers</p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Press Releases</p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Amazon Science</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base mb-3">
              Connect with Us
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <p className="cursor-pointer  hover:underline">Facebook</p>
              </li>
              <li>
                <p className="cursor-pointer  hover:underline">Twitter</p>
              </li>
              <li>
                <p className="cursor-pointer  hover:underline">Instagram</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base  mb-3">
              Make Money with Us
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <p className="cursor-pointer hover:underline">Sell on Amazon</p>
              </li>
              <li>
                <p className=" cursor-pointer hover:underline">
                  Sell under Amazon Accelerator
                </p>
              </li>
              <li>
                <p className=" cursor-pointer hover:underline">
                  Protect and Build Your Brand
                </p>
              </li>
              <li>
                <p className=" cursor-pointer hover:underline">
                  Amazon Global Selling
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  Become an Affiliate
                </p>
              </li>
              <li>
                <p className="cursor-pointer  hover:underline">
                  Fulfilment by Amazon
                </p>
              </li>
              <li>
                <p className=" cursor-pointer hover:underline">
                  Advertise Your Products
                </p>
              </li>
              <li>
                <p className="cursor-pointer  hover:underline">
                  Amazon Pay on Merchants
                </p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base  mb-3">
              Let Us Help You
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <p className="cursor-pointer hover:underline">
                  COVID-19 and Amazon
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Your Account</p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Returns Centre</p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  100% Purchase Protection
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  Amazon App Download
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">Help</p>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="space-y-4 p-8">
        <div className="flex gap-5 justify-center items-center sm:gap-16">
          <img className="w-20 mt-1 md:mt-2.5" src={amazon_logo} alt="" />
          <select
            className="border border-gray-500 bg-transparent rounded-sm px-4 py-1.5"
            name="language"
            id="language"
          >
            <option value="English">English</option>
          </select>
        </div>
        <ul className="flex justify-center items-center gap-y-1 gap-x-4 flex-wrap mx-auto text-xs max-w-4xl">
          <li className="cursor-pointer hover:underline">Australia</li>
          <li className="cursor-pointer hover:underline">Brazil</li>
          <li className="cursor-pointer hover:underline">Canada</li>
          <li className="cursor-pointer hover:underline">China</li>
          <li className="cursor-pointer hover:underline">France</li>
          <li className="cursor-pointer hover:underline">Germany</li>
          <li className="cursor-pointer hover:underline">Italy</li>
          <li className="cursor-pointer hover:underline">Japan</li>
          <li className="cursor-pointer hover:underline">Mexico</li>
          <li className="cursor-pointer hover:underline">Netherlands</li>
          <li className="cursor-pointer hover:underline">Poland</li>
          <li className="cursor-pointer hover:underline">Singapore</li>
          <li className="cursor-pointer hover:underline">Spain</li>
          <li className="cursor-pointer hover:underline">Turkey</li>
          <li className="cursor-pointer hover:underline">
            United Arab Emirates
          </li>
          <li className="cursor-pointer hover:underline">United Kingdom</li>
          <li className="cursor-pointer hover:underline">United States</li>
        </ul>
      </div>
      <div className="bg-gray-900 text-xs p-8">
        <div className=" mx-auto grid align-middle px-6 py-6 grid-cols-2 max-w-xs md:max-w-5xl md:grid-cols-4 gap-4">
          <p className=" nav_a cursor-pointer hover:underline">
            AbeBooks
            <br />
            <span className="navFooterDescText text-gray-400">
              Books, art
              <br />
              &amp; collectibles
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Shopbop
            <br />
            <span className="navFooterDescText text-gray-400">
              Designer
              <br />
              Fashion Brands
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Amazon Web Services
            <br />
            <span className="navFooterDescText text-gray-400">
              Scalable Cloud
              <br />
              Computing Services
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Amazon Business
            <br />
            <span className="navFooterDescText text-gray-400">
              Everything For
              <br />
              Your Business
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Audible
            <br />
            <span className="navFooterDescText text-gray-400">
              Download
              <br />
              Audio Books
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Prime Now
            <br />
            <span className="navFooterDescText text-gray-400">
              {" "}
              2-Hour Delivery
              <br />
              on Everyday Items
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            DPReview
            <br />
            <span className="navFooterDescText text-gray-400">
              Digital
              <br />
              Photography
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            Amazon Prime Music
            <br />
            <span className="navFooterDescText text-gray-400">
              100 million songs, ad-free
              <br />
              Over 15 million podcast episodes{" "}
            </span>
          </p>
          <p className=" nav_a cursor-pointer hover:underline">
            IMDb
            <br />
            <span className="navFooterDescText text-gray-400">
              Movies, TV
              <br />
              &amp; Celebrities
            </span>
          </p>
        </div>
        <div className="space-y-1">
          <div className="text-center flex justify-center items-center gap-2 md:gap-4">
            <p className="cursor-pointer hover:underline">
              Conditions of Use & Sale
            </p>
            <p className="cursor-pointer hover:underline">Privacy Notice</p>
            <p className="cursor-pointer hover:underline">Interest-Based Ads</p>
          </div>
          <p className="text-center">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
