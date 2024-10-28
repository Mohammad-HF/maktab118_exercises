import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectproduct = (state: RootState) => state.product
export const selectSearchProduct = createSelector(selectproduct , (product) => {
    return product.list.filter(el=> el.title.toLowerCase().includes(product.searchValue.toLowerCase()))
}) ;
