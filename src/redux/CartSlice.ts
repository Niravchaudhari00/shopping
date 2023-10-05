import { createSlice } from "@reduxjs/toolkit";
import { productDetails } from "../data";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [] as productDetails[],
  reducers: {
    addToCart: (state, actions) => {
      state.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
