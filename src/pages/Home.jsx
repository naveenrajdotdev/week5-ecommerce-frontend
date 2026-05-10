import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  // Category State
  const [category, setCategory] = useState("All");

  // Sort State
  const [sortType, setSortType] = useState("");

  // Search State
  const [search, setSearch] = useState("");

  // Filter Products By Category + Search
  let filteredProducts =
    category === "All"
      ? [...products]
      : products.filter((product) => product.category === category);

  // Search Functionality
  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Sorting Logic
  if (sortType === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortType === "a-z") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="p-5">
      {/* Search Input */}

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-5 rounded"
      />

      {/* Filter Buttons */}

      <div className="flex gap-3 mb-5 flex-wrap">
        <button
          onClick={() => setCategory("All")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Electronics")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Electronics
        </button>

        <button
          onClick={() => setCategory("Shoes")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Shoes
        </button>

        <button
          onClick={() => setCategory("Clothing")}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Clothing
        </button>
      </div>

      {/* Sort Dropdown */}

      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="border p-3 w-full rounded mb-5"
      >
        <option value="">Sort Products</option>

        <option value="low-high">Price: Low to High</option>

        <option value="high-low">Price: High to Low</option>

        <option value="a-z">Name: A-Z</option>
      </select>

      {/* Products */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
