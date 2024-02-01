import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  data: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const computeQuantity = (data) => {
  return data.basket.length();
};

const computePrice = (data) => {
  let total;
  data.basket.forEach((item) => {
    total += item.price;
  });
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
      computeQuantity(state);
      computePrice(state);
    },
    removeFromBasket: (state, action) => {
      state.basket.filter((item) => item.id !== action.payload);
      computeQuantity(state);
      computePrice(state);
    },
  },
});

export const { addToBasket, addToData, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
