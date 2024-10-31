import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./features/movieSlice";

export const reduxStore = configureStore({
  reducer: { movie: movieReducer },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
