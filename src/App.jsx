import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import WishlistPage from "./pages/WishlistPage";

const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}

      <Navbar />

      <Suspense fallback={<h1 className="p-5 text-2xl">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
