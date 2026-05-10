import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import { addToWishlist } from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg"/>

      <h2 className="text-xl font-bold">{product.name}</h2>

      <p>₹{product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white m-1 px-4 py-2 rounded"
      >
        Add To Cart
      </button>
      <button
        onClick={() => dispatch(addToWishlist(product))}
        className="bg-pink-500 text-white m-1 px-3 py-2 rounded"
      >
        Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
