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
                <a className=" hover:underline" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Press Releases
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Amazon Science
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base mb-3">
              Connect with Us
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <a className="hover:underline" href="/">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Instagram
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base  mb-3">
              Make Money with Us
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <a className="hover:underline" href="/">
                  Sell on Amazon
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Sell under Amazon Accelerator
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Protect and Build Your Brand
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Amazon Global Selling
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Fulfilment by Amazon
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Amazon Pay on Merchants
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium  text-base  mb-3">
              Let Us Help You
            </h2>
            <nav className="list-none mb-10 space-y-2 text-gray-200">
              <li>
                <a className="hover:underline" href="/">
                  COVID-19 and Amazon
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Your Account
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Returns Centre
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  100% Purchase Protection
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Amazon App Download
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Help
                </a>
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
          <a href="https://www.abebooks.com/" className="nav_a hover:underline">
            AbeBooks
            <br />
            <span className="navFooterDescText text-gray-400">
              Books, art
              <br />
              &amp; collectibles
            </span>
          </a>
          <a href="https://www.shopbop.com/" className="nav_a hover:underline">
            Shopbop
            <br />
            <span className="navFooterDescText text-gray-400">
              Designer
              <br />
              Fashion Brands
            </span>
          </a>
          <a
            href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=IN_amazonfooter"
            className="nav_a hover:underline"
          >
            Amazon Web Services
            <br />
            <span className="navFooterDescText text-gray-400">
              Scalable Cloud
              <br />
              Computing Services
            </span>
          </a>
          <a
            href="/business?ref=footer_aingw"
            className="nav_a hover:underline"
          >
            Amazon Business
            <br />
            <span className="navFooterDescText text-gray-400">
              Everything For
              <br />
              Your Business
            </span>
          </a>
          <a href="https://www.audible.in/" className="nav_a hover:underline">
            Audible
            <br />
            <span className="navFooterDescText text-gray-400">
              Download
              <br />
              Audio Books
            </span>
          </a>
          <a href="/now?ref=footer_amznow" className="nav_a hover:underline">
            Prime Now
            <br />
            <span className="navFooterDescText text-gray-400">
              {" "}
              2-Hour Delivery
              <br />
              on Everyday Items
            </span>
          </a>
          <a href="https://www.dpreview.com/" className="nav_a hover:underline">
            DPReview
            <br />
            <span className="navFooterDescText text-gray-400">
              Digital
              <br />
              Photography
            </span>
          </a>
          <a
            href="/music/prime?ref=footer_apm"
            className="nav_a hover:underline"
          >
            Amazon Prime Music
            <br />
            <span className="navFooterDescText text-gray-400">
              100 million songs, ad-free
              <br />
              Over 15 million podcast episodes{" "}
            </span>
          </a>
          <a href="https://www.imdb.com/" className="nav_a hover:underline">
            IMDb
            <br />
            <span className="navFooterDescText text-gray-400">
              Movies, TV
              <br />
              &amp; Celebrities
            </span>
          </a>
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
