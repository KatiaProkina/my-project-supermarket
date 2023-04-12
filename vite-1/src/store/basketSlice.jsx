import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const basketSlice = createSlice({
  name: "basketProducts",
  initialState: {
    basketProducts: [],
  },
  reducers: {
    addProductInBasket: (state, action) => {
      state.basketProducts.push(action.payload)
    },
    deleteProductFromBasket : (state, action) => {
      state.basketProducts = state.basketProducts.filter(item => item.id !== action.payload)
    }
  },
});

export const {  addProductInBasket, deleteProductFromBasket } = basketSlice.actions;

export default basketSlice.reducer

