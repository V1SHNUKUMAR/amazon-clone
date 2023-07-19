import { React, useEffect } from "react";

import AllProducts from "../Data/AllProducts.json";
import Footer from "./Footer";

const ProductListingScreen = (props) => {
  // const { productsList } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const allProducts = AllProducts.allProducts;

  return (
    <div className="bg-white">
      <div className="space-y-2">
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
          <div className="py-2 grid place-items-center grid-cols-2 gap-2 list-none sm:grid-cols-3 md:grid-cols-4">
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
  return (
    <li className="border rounded-md space-y-2 text-sm text-center max-w-[290px] h-full">
      <img
        className="mx-auto max-h-[250px]"
        src={props.product.imgUrl}
        alt=""
      />
      <div className="space-y-1 px-2 pb-2">
        <h2 className="text-ellipsis line-clamp-3 leading-5 md:font-medium md:text-base">
          {props.product.title}
        </h2>
        <p className="REVIEW_STARS text-amber-500">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <i class="fa-regular fa-star"></i>
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
    </li>
  );
};
