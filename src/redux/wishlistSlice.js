import { createSlice } from "@reduxjs/toolkit";

// Load Saved Wishlist From localStorage
const savedWishlist =
  JSON.parse(
    localStorage.getItem("wishlistItems")
  );

const initialState = {
  wishlistItems: savedWishlist || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {

    // Add Wishlist
    addToWishlist: (state, action) => {

      const exists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      // Avoid Duplicate Products
      if (!exists) {

        state.wishlistItems.push(
          action.payload
        );
        alert("Product added to Wishlist")
        // Save To localStorage
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(
            state.wishlistItems
          )
        );
      }
    },

    // Remove Wishlist
    removeFromWishlist: (
      state,
      action
    ) => {

      state.wishlistItems =
        state.wishlistItems.filter(
          (item) =>
            item.id !== action.payload
        );

      // Update localStorage
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(
          state.wishlistItems
        )
      );
    },

    // Clear Wishlist
    clearWishlist: (state) => {

      state.wishlistItems = [];

      localStorage.removeItem(
        "wishlistItems"
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;