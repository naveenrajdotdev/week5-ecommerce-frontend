import { useState } from "react";

function Checkout() {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD",
  });

  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.address ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);

    setSuccess(true);
  };

  return (

    <div className="max-w-lg mx-auto p-5">

      <h1 className="text-3xl font-bold mb-5">
        Checkout
      </h1>

      {success ? (

        <div className="bg-green-100 p-5 rounded">

          <h2 className="text-2xl font-bold text-green-700">
            Order Placed Successfully 🎉
          </h2>

        </div>

      ) : (

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          />

          {/* Payment */}
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="border p-3 w-full rounded"
          >

            <option value="COD">
              Cash On Delivery
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Card">
              Credit/Debit Card
            </option>

          </select>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-3 rounded w-full"
          >
            Place Order
          </button>

        </form>
      )}

    </div>
  );
}

export default Checkout;