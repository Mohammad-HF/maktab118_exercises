//================== in slice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
interface IInitioalState {
  contents: [];
  isLoading: boolean;
  error: undefined | string;
}
const initialState: IInitioalState = {
  contents: [],
  isLoading: false,
  error: undefined,
};
export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/photos");
    return response.data;
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const contentAction = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
//================= in component to use

const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
  dispatch(fetchContent());
}, [dispatch]);

const contents = useSelector((state: RootState) => state.content.contents);
const isLoading = useSelector((state: RootState) => state.content.isLoading);
const error = useSelector((state: RootState) => state.content.error);
