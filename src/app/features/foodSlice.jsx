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
      let data = action.payload;
      data = { ...data, quantity: 1 };
      state.basket.push(data);
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
    increaseQuantity: (state, action) => {
      state.basket.map((item) => {
        if (item.id == action.payload) {
          console.log(item.quantity);
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.basket.map((item) => {
        if (item.id == action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
    },
  },
});

export const {
  addToBasket,
  addToData,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
