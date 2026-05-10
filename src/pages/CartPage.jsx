import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";

import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Shipping Cost
  const shipping = 5.99;

  // Tax
  const tax = subtotal * 0.08;

  // Final Total
  const total = subtotal + shipping + tax;

  return (
    <div className="p-5 max-w-4xl mx-auto">
      {/* Title */}

      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {/* Empty Cart */}

      {cartItems.length === 0 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl text-gray-500">Your cart is empty</h2>

          <Link to="/">
            <button className="mt-5 bg-blue-500 text-white px-6 py-3 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {/* Cart Items */}

      {cartItems.map((item) => (
        <div key={item.id} className="border rounded-lg p-5 mb-5 shadow">
          {/* Product Name */}

          <h2 className="text-2xl font-bold">{item.name}</h2>

          {/* Price */}

          <p className="text-lg mt-2">Price: ₹{item.price}</p>

          {/* Quantity Controls */}

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              -
            </button>

            <span className="text-xl">{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              +
            </button>
          </div>

          {/* Item Total */}

          <p className="mt-4 text-lg font-semibold">
            Item Total: ₹{(item.price * item.quantity).toFixed(2)}
          </p>

          {/* Remove Button */}

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="mt-4 bg-red-500 text-white px-5 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Order Summary */}

      {cartItems.length > 0 && (
        <div className="border-t pt-6 mt-10">
          <h2 className="text-3xl font-bold mb-5">Order Summary</h2>

          <div className="space-y-2 text-lg">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

            <p>Shipping: ₹{shipping.toFixed(2)}</p>

            <p>Tax: ₹{tax.toFixed(2)}</p>
          </div>

          {/* Total */}

          <h1 className="text-4xl font-bold mt-5">
            Total: ₹{total.toFixed(2)}
          </h1>

          {/* Checkout Button */}

          <Link to="/checkout">
            <button className="mt-6 w-full bg-green-500 text-white py-4 rounded text-xl font-bold hover:bg-green-600">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
