import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm, IMovie } from "../../types/form.type"



export interface IMovieState {
    list : IMovie[];
    sort : string;
}

const initialState : IMovieState = {
    list : [],
    sort : "",
}
export const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers : {
        addMovie : (state , action : PayloadAction<IForm> )=>{
            state.list.push({...action.payload , id : crypto.randomUUID()})
        },
        removeMovie : (state , action : PayloadAction<string>)=>{
            state.list = state.list.filter((movie)=> movie.id !== action.payload)
        }
    }
})

export const movieAction = movieSlice.actions;
export const movieReducer = movieSlice.reducer;