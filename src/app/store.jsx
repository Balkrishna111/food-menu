import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/foodSlice";

const store = configureStore({
  reducer: basketReducer,
});
export default store;
