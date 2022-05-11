import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      // add to cart or update quantity
      const cartList = state.cartList;
      const cartItem = cartList.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.quantity += payload.quantity;
      } else {
        cartList.push(payload);
      }
      // state.cartList = [...state.cartList, action.payload];
    },
    reduceQuantity: (state, action) => {
      const { payload } = action;
      const cartList = state.cartList;
      const cartItem = cartList.find((item) => item.id === payload);
      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          cartList.splice(cartList.indexOf(cartItem), 1);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (cartItem) => toString(cartItem.id) !== toString(action.payload)
      );
    },
  },
});

export const { addToCart, removeFromCart, reduceQuantity } = cartSlice.actions;

export default cartSlice.reducer;
