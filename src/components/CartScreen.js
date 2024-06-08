import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartScreen = () => {
  let productsListFromLocalStorage =
    JSON.parse(localStorage.getItem("cartItems")) ?? [];

  const [productsList, setProductsList] = useState(
    productsListFromLocalStorage
  );

  const subTotal = () => {
    let sum = 0;
    for (const product of productsList) {
      sum += parseInt(product.price);
    }
    return sum;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // getProductsList();
  });

  return (
    <div className="w-full ">
      <div className="max-w-[1500px] mx-auto">
        <div className="CONTENT p-2 flex flex-wrap-reverse gap-2 justify-center items-start md:gap-4 md:px-4 md:py-6 md:flex-nowrap">
          <ShoppingCart
            productsList={productsList}
            subTotal={subTotal()}
            setProductsList={setProductsList}
          />

          {productsList.length !== 0 ? (
            <TotalAmount productsList={productsList} subTotal={subTotal()} />
          ) : null}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default CartScreen;

// List of all Cart Items
const ShoppingCart = (props) => {
  const { productsList, subTotal, setProductsList } = props;

  return (
    <div className="md:w-4/6 lg:w-3/4">
      <div className="PRODUCTS border-2 px-3 py-5 bg-white md:px-6">
        <h1 className="text-2xl px-2 md:text-3xl">
          {productsList.length !== 0
            ? "Shopping Cart"
            : "Your Amazon Cart is empty."}
        </h1>
        <p className="text-sm mt-1 px-2 text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
          Deselect All Items
        </p>
        <hr className="border-gray-300" />
        {productsList.length !== 0 ? (
          <div className="PRODUCTS divide-y py-2">
            {productsList.map((product, index) => (
              <div key={index}>
                {" "}
                <CartProduct
                  product={product}
                  setProductsList={setProductsList}
                />{" "}
              </div>
            ))}{" "}
          </div>
        ) : (
          <div className="EMPTY_CART p-4 text-center flex flex-col gap-4 items-center justify-center min-h-[300px]">
            <h2>Browse Amazon for best deals and accessories</h2>
            <Link to={"/"}>
              {" "}
              <button
                className="SUBMIT px-6 bg-yellow-300 py-2 rounded-lg drop-shadow-md hover:bg-yellow-400 transition-colors sm:py-1.5 sm:text-sm"
                type="submit"
              >
                Go to HomeScreen
              </button>
            </Link>
          </div>
        )}

        <hr className="border-gray-300" />
        <p className="text-lg text-end pt-1 pb-4">
          Subtotal ({productsList.length} items): &#8377;{" "}
          <span className="font-bold">{subTotal}</span>
        </p>
      </div>
      <p className="text-xs py-4">
        The price and availability of items at Amazon.in are subject to change.
        The shopping cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Do you have a promotional code?
        We'll ask you to enter your claim code when it's time to pay.
      </p>
    </div>
  );
};

const TotalAmount = (props) => {
  const { productsList, subTotal } = props;
  return (
    <div className="TOTAL-AMOUNT flex-1 border-2 bg-white p-5 space-y-4 md:py-6 md:space-y-8 md:sticky top-4">
      <div className="flex gap-2 text-green-700 text-sm">
        <i className="fa-solid fa-circle-check text-xl"></i>
        <div>
          <span>Your order is eligible for FREE Delivery</span>
          <div className="text-black">
            Select this option at checkout.{" "}
            <span className="text-sky-700 cursor-pointer">Details</span>
          </div>
        </div>
      </div>
      <div className="text-lg">
        Subtotal ({productsList.length} items): &#8377;{" "}
        <span className="font-bold">{subTotal}</span>
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
  const { product, setProductsList } = props;

  const removeFromCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let modifiedList = cartItems.filter(
      (currentProduct) => currentProduct.key !== product.key
    );
    localStorage.setItem("cartItems", JSON.stringify(modifiedList));
    // setting product list
    setProductsList(JSON.parse(localStorage.getItem("cartItems")));

    console.log("removed!");
    toast.success("Product removed !");
  };

  return (
    <>
      <div className="px-2 py-3 flex items-center justify-start gap-4 md:gap-6">
        <input type="checkbox" value={"selectProduct"} name="selectProduct" />
        <label className="flex gap-3 md:gap-10">
          <img
            className="w-28 object-contain md:w-40"
            src={product.imgUrl}
            alt=""
          />
          <div className="text-sm space-y-1">
            <h2 className=" line-clamp-3 text-base leading-5 max-w-md md:text-lg md:leading-6 md:line-clamp-2">
              {product.title}
            </h2>
            <div className="PRICE flex items-center flex-wrap gap-3 text-xs">
              <h3>
                &#8377;{" "}
                <span className="font-bold text-base">{product.price}</span>
              </h3>
              <h4>
                M.R.P.:{" "}
                <span className="line-through text-gray-500">
                  &#8377; {product.MRP}
                </span>
              </h4>
            </div>
            <p className="text-green-700 text-xs">In stock</p>
            <p className="text-gray-600 text-xs">Eligible for FREE Shipping</p>
            <img
              className="w-16 object-contain py-1"
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt=""
            />
            {/* <div className="GIFTORNOT flex items-center gap-2 w-fit">
            <input type="checkbox" id={imgUrl} />
            <label htmlFor={imgUrl}>This is a gift </label>
            <div className="text-sky-700 cursor-pointer hover:underline hover:text-orange-700">
              Learn more
            </div>
          </div> */}
            <div className="flex items-center gap-2 flex-wrap divide-x">
              <select
                className="px-2 py-0.5 border border-gray-300 bg-gray-100 rounded-md drop-shadow-md"
                name="QTY"
                id="qty"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10+</option>
              </select>
              <p
                className="px-4 text-sky-700 cursor-pointer hover:underline hover:text-orange-700"
                onClick={() => removeFromCart(product)}
              >
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
    </>
  );
};
