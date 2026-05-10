import { useSelector, useDispatch } from "react-redux";

import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";

import { addToCart } from "../redux/cartSlice";

import { Link } from "react-router-dom";

function WishlistPage() {
  const dispatch = useDispatch();

  // Wishlist Data
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <div className="p-5 max-w-6xl mx-auto">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Wishlist</h1>

        {/* Clear Wishlist */}

        {wishlistItems.length > 0 && (
          <button
            onClick={() => dispatch(clearWishlist())}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {/* Empty Wishlist */}

      {wishlistItems.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl text-gray-500">Your wishlist is empty</h2>

          <Link to="/">
            <button className="mt-5 bg-blue-500 text-white px-6 py-3 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {/* Wishlist Products */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border rounded-lg shadow p-4">
            {/* Product Image */}

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover rounded"
            />

            {/* Product Name */}

            <h2 className="text-2xl font-bold mt-4">{item.name}</h2>

            {/* Category */}

            <p className="text-gray-500 mt-1">{item.category}</p>

            {/* Price */}

            <p className="text-xl font-semibold mt-3">₹{item.price}</p>

            {/* Buttons */}

            <div className="flex flex-col gap-3 mt-5">
              {/* Add To Cart */}

              <button
                onClick={() => dispatch(addToCart(item))}
                className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
              >
                Add To Cart
              </button>

              {/* Remove Wishlist */}

              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="bg-red-500 text-white py-3 rounded hover:bg-red-600"
              >
                Remove Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
