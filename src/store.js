import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Pages/Cart/redux/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
