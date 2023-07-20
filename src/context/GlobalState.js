import { React, useState } from "react";

import GlobalContext from "../context/globalContext";

const GlobalState = (props) => {
  const [product, setProduct] = useState(null);

  const setProductDetails = (product) => {
    setProduct(product);
  };

  const [productsList, setProductsList] = useState([]);

  const addToCart = (product) => {
    setProductsList(productsList.concat(product));
  };

  const removeFromCart = (product) => {};

  return (
    <GlobalContext.Provider
      value={{
        product,
        setProductDetails,
        productsList,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
