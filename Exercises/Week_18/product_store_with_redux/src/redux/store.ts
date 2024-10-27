import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cardSlice";

export const reduxStore = configureStore({
    reducer : { card : cardReducer}
})
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;