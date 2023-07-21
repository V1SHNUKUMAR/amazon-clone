import { React, useState } from "react";
import allProducts from "../Data/AllProducts.json";

import GlobalContext from "../context/globalContext";

const GlobalState = (props) => {
  // to setProductDetails on product details page
  const [product, setProduct] = useState(null);

  const setProductDetails = (product) => {
    setProduct(product);
  };

  // to add and remove products from cart
  const [productsList, setProductsList] = useState([]);

  const addToCart = (product) => {
    productsList.push(product);
  };

  const removeFromCart = (product) => {
    setProductsList((current) =>
      current.filter((currentProduct) => currentProduct.ID !== product.ID)
    );
    console.log("removed");
  };

  // to filter products
  const [filteredProducts, setFilteredProducts] = useState(
    allProducts.allProducts
  );

  const getFilteredProducts = (subCategory) => {
    setFilteredProducts((current) =>
      current.filter(
        (currentProduct) => currentProduct.subCategory !== product.subCategory
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        product,
        setProductDetails,
        productsList,
        addToCart,
        removeFromCart,
        filteredProducts,
        getFilteredProducts,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
