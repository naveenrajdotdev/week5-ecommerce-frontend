import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {
  // Wishlist Items
  const { wishlistItems } = useSelector((state) => state.wishlist);

  // Cart Items
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        {/* Logo */}

        <Link to="/">
          <h1 className="text-2xl font-bold">MyStore</h1>
        </Link>

        {/* Navigation Links */}

        <div className="flex gap-6 items-center">
          {/* Home */}

          <Link to="/">
            <h2 className="hover:text-pink-400">Home</h2>
          </Link>

          {/* Cart */}

          <Link to="/cart">
            <h2 className="hover:text-yellow-400">Cart ({cartItems.length})</h2>
          </Link>

          {/* Wishlist */}

          <Link to="/wishlist">
            <h2 className="hover:text-red-400">
              Wishlist ({wishlistItems.length})
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
