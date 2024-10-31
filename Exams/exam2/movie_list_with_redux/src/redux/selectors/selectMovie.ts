import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectMovie = (state: RootState) => state.movie;
export const selectSortMovies = createSelector(selectMovie, (movie) => {
    if(movie.list.length > 1 && movie.sort !== ""){
        return movie.sort === "byName"
        ? {list : movie.list.slice().sort((it1, it2) =>
          it1.movieName.localeCompare(it2.movieName)
        ), sort : movie.sort}
        : movie.sort === "byGenre"
        ? {list : movie.list.slice().sort((it1, it2) => it1.genre.localeCompare(it2.genre)) , sort : movie.sort}
        : movie.sort === "byScore"
        ? {list : movie.list.slice().sort((it1, it2) => Number(it1.score) - Number(it2.score)) , sort : movie.sort}
        : {list : movie.list , sort : movie.sort}
    }else return {list : movie.list , sort : movie.sort}
});
