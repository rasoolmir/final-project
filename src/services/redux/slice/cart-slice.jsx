import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === product.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantity--;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
