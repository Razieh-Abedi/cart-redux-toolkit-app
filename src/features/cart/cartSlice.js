import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const ItemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== ItemId);
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
