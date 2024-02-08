import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  data: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const computeQuantity = (data) => {
  return data.basket.length;
};

const computePrice = (data) => {
  let total = 0;
  data.basket.forEach((item) => {
    total = total + item.price;
  });
  return total;
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addToData: (state, action) => {
      state.data = action.payload;
    },
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      state.totalQuantity = computeQuantity(state);
      state.totalPrice = computePrice(state);
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity = computeQuantity(state);
      state.totalPrice = computePrice(state);
    },
  },
});

export const { addToBasket, addToData, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
