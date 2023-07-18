import Navbar from "./components/Navbar";
import Homescreen from "./components/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import amazon_logo_white from "./assets/amazon-full-white.png";
import amazon_logo_black from "./assets/amazon-full-logo.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar amazon_logo_white={amazon_logo_white} />
      <Routes>
        <Route index path="/" element={<Homescreen />} />
        <Route
          index
          path="/signIn"
          element={<Signin amazon_logo_black={amazon_logo_black} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
