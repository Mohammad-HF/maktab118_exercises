
import { configureStore } from '@reduxjs/toolkit'
import { contentReducer } from '../files/redux_thunk';
export const reduxStore = configureStore({
  reducer: {
    content: contentReducer,
  },
})
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
