import React from "react";
import Footer from "./Footer";

const CartScreen = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1400px] mx-auto">
        <div className="CONTENT p-2 flex flex-wrap-reverse gap-2 justify-center items-start md:gap-4 md:px-4 md:py-6 md:flex-nowrap">
          <ShoppingCart />
          <TotalAmount />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartScreen;

const ShoppingCart = (props) => {
  //   const { productsList } = props;
  const productsList = ["1", "23", "3"];

  return (
    <div className="md:w-3/4">
      <div className="PRODUCTS border-2 px-3 py-5 bg-white md:px-6">
        <h1 className="text-2xl px-2 md:text-3xl">Shopping Cart</h1>
        <p className="text-sm mt-1 px-2 text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
          Deselect All Items
        </p>
        <hr className="border-gray-300" />
        {productsList.length !== 0 ? (
          <div className="PRODUCTS divide-y py-2">
            {productsList.map((product) => (
              <CartProduct />
            ))}{" "}
          </div>
        ) : (
          <div className="EMPTY_CART p-4">No Products</div>
        )}

        <hr className="border-gray-300" />
        <p className="text-lg text-end pt-1 pb-4">
          Subtotal (8 items): &#8377;{" "}
          <span className="font-bold">14,924.00</span>
        </p>
      </div>
      <p className="text-xs py-4 md:text-sm">
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Do you have a promotional code?
        We'll ask you to enter your claim code when it's time to pay.
      </p>
    </div>
  );
};

const TotalAmount = () => {
  return (
    <div className="TOTAL-AMOUNT flex-1 border-2 bg-white p-5 space-y-4 md:py-6 md:space-y-8 ">
      <div className="flex items-center gap-2 text-green-700 text-sm">
        <i class="fa-solid fa-circle-check text-2xl"></i>
        <div>
          <span>Your order is eligible for FREE Delivery</span>
          <div className="text-black">
            Select this option at checkout.{" "}
            <span className="text-sky-700 cursor-pointer">Details</span>
          </div>
        </div>
      </div>
      <div className="text-lg">
        Subtotal (8 items): &#8377; <span className="font-bold">14,924.00</span>
      </div>
      <div className="GIFT-CHECKBOX flex items-center gap-2">
        <input type="checkbox" name="giftCheck" id="giftCheck" />{" "}
        <label className="text-sm" htmlFor="giftCheck">
          This order contains a gift
        </label>
      </div>
      <button
        className="SUBMIT w-full bg-yellow-300 p-2 rounded-lg drop-shadow-md hover:bg-yellow-400 transition-colors sm:p-1.5 sm:text-sm"
        type="submit"
      >
        Proceed to Buy
      </button>
    </div>
  );
};

const CartProduct = (props) => {
  const imgUrl =
    "https://m.media-amazon.com/images/I/71sTY2XLBeL._AC_AA180_.jpg";
  return (
    <div className="px-2 py-3 flex items-center justify-start gap-4 md:gap-6">
      <input type="checkbox" value={"selectProduct"} name="selectProduct" />
      <label className="flex gap-3 md:gap-10">
        <img className="w-24 object-contain md:w-40" src={imgUrl} alt="" />
        <div className="text-sm space-y-1">
          <h2 className=" line-clamp-2 text-base leading-5 max-w-md md:text-lg md:font-semibold">
            Fire-Boltt Dagger Luxe 1.43" Super AMOLED Display Luxury Smartwatch,
            Stainless Steel Build, 600 NITS Brightness with Single BT Bluetooth
            Connection, IP68, Dual Button Technology (Stainless Black)
          </h2>
          <div className="flex items-center flex-wrap gap-3 text-xs">
            <h3>
              &#8377; <span className="font-bold text-base">3,499.00</span>
            </h3>
            <h4>
              M.R.P.:{" "}
              <span className="line-through text-gray-500">
                &#8377; 21,000.00
              </span>
            </h4>
          </div>
          <p>In stock</p>
          <p>Eligible for FREE Shipping</p>
          <img
            className="w-16 object-contain"
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt=""
          />
          <div className="GIFTCHECK flex items-start gap-2">
            <input type="checkbox" name="giftCheck" id="giftCheck" />
            <label htmlFor="giftCheck">
              This is a gift{" "}
              <span className="text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
                Learn more
              </span>
            </label>
          </div>
          <div className="flex items-center gap-2 flex-wrap divide-x">
            <select className="px-4" name="QTY" id="qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="px-4 text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
              Delete
            </p>
            <p className="px-4 text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
              Save for later
            </p>
            <p className="px-4 text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
              Share
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};