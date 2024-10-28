import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cardSlice";
import { productReducer } from "./features/productSlice";

export const reduxStore = configureStore({
  reducer: { card: cardReducer, product: productReducer },
});
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
