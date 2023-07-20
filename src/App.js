import Navbar from "./components/Navbar";
import Homescreen from "./components/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import amazon_logo_white from "./assets/amazon-full-white.png";
import amazon_logo_black from "./assets/amazon-full-logo.png";
import CartScreen from "./components/CartScreen";
import ProductListingScreen from "./components/ProductListingScreen";
import ProductDetailsScreen from "./components/ProductDetailsScreen";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar amazon_logo_white={amazon_logo_white} />
        <Routes>
          <Route index path="/" element={<Homescreen />} />
          <Route
            index
            path="/sign-in"
            element={<Signin amazon_logo_black={amazon_logo_black} />}
          />
          <Route path="/cart-screen" element={<CartScreen />} />
          <Route
            path="/products-listing-page"
            element={<ProductListingScreen />}
          />
          <Route
            path="/product-listing-page/product-details-page"
            element={<ProductDetailsScreen />}
          />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
