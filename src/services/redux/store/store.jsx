import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../slice/blog-slice";
import todosSlice from "../slice/todos-slice";
import CartSlice from "../slice/cart-slice";
import ShopSlice from "../slice/shop-slice";

const store = configureStore({
  reducer: {
    blogs: blogSlice,
    todos: todosSlice,
    cart: CartSlice,
    shop: ShopSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
