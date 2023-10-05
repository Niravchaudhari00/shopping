import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";
import CartPage from "./page/CartPage";
import Footer from "./components/Footer";
import CheckOutPage from "./page/CheckOutPage";
import Order from "./page/Order";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="check-out" element={<CheckOutPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
