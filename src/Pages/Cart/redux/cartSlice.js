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
      const cartItem = state.cartList.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.quantity += payload.quantity;
      } else {
        // cartList.push(payload);
        state.cartList = [...state.cartList, action.payload];
      }
    },
    increaseQuantity: (state, action) => {
      const { payload } = action;
      const cartList = state.cartList;
      const cartItem = cartList.find((item) => item.id === payload);
      if (cartItem) {
        cartItem.quantity += 1;
        if (cartItem.quantity === 0) {
          cartList.splice(cartList.indexOf(cartItem), 1);
        }
      }
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
    editAddress: (state, action) => {
      const { payload } = action;
      const cartList = state.cartList;
      const cartItem = cartList.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.deliveryDetails.address = payload.newAddress;
      }
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (cartItem) => toString(cartItem.id) !== toString(action.payload)
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  editAddress,
  reduceQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
