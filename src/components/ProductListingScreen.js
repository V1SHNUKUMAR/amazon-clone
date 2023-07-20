import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AllProducts from "../Data/AllProducts.json";
import Footer from "./Footer";
import globalContext from "../context/globalContext";

const ProductListingScreen = (props) => {
  // const { productsList } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const allProducts = AllProducts.allProducts;

  return (
    <div className="bg-white ">
      <div className="space-y-2 max-w-[1500px] mx-auto">
        <header className="flex justify-between items-center px-4 py-3 border-b shadow-md">
          <p>20 items</p>
          <select
            className="px-3 py-1.5 rounded-lg drop-shadow-md border border-gray-300 text-sm"
            name="filter"
            id="filter"
          >
            <option value="1">Filter 1</option>
            <option value="2">Filter 2</option>
            <option value="3">Filter 3</option>
            <option value="4">Filter 4</option>
          </select>
        </header>

        <section className="px-2 py-2 md:px-4">
          <h2 className="font-semibold text-xl">Results</h2>
          <div className="py-2 grid place-items-center grid-cols-2 gap-2 list-none sm:grid-cols-3 lg:grid-cols-4">
            {allProducts.map((product, index) => (
              <ListItem key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingScreen;

// GridComponent
const ListItem = (props) => {
  const context = useContext(globalContext);
  console.log(context);
  const { setProductDetails } = context;

  return (
    <li
      className="border rounded-md  text-sm text-center max-w-[260px] h-full 2xl:max-w-xs"
      onClick={() => setProductDetails(props.product)}
    >
      <Link
        to={"/product-listing-page/product-details-page"}
        className="space-y-2"
      >
        {" "}
        <img
          className="mx-auto max-h-[250px] lg:max-h-72"
          src={props.product.imgUrl}
          alt=""
        />
        <div className="space-y-1 px-2 pb-2">
          <h2 className="text-ellipsis line-clamp-3 leading-5 md:font-medium md:text-base">
            {props.product.title}
          </h2>
          <p className="RATING_STARS text-amber-500 text-xs">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </p>
          <h3 className="font-light">
            &#8377;
            <span className="text-2xl font-normal">
              {props.product.price}
            </span>{" "}
            M.R.P:{" "}
            <span className="line-through text-gray-500">
              &#8377;{props.product.MRP}
            </span>
          </h3>
        </div>
      </Link>
    </li>
  );
};
