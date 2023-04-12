import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import ham from "./img/ham.png"
import sausage from "./img/sausage.png"
import sausages from "./img/sausages.png"
import milk from "./img/milk.png"
import like from "./img/like.svg";

const additionalProductSlice = createSlice({
  name: "additionalProducts",
  initialState: {
    additionalProducts: [],
    loading: "idle",
  },
  reducers: {
    additionalProductsReceived: (state, action) => {
      state.additionalProducts = action.payload || [];
      state.loading = "idle";
    },
    additionalProductsLoading: (state) => {
      state.loading = "pending";
    },
  },
});

const { additionalProductsReceived, additionalProductsLoading } =
  additionalProductSlice.actions;

export const getAdditionalProducts = () => (dispatch) => {
  dispatch(additionalProductsLoading());
  setTimeout(() => {
    dispatch(
      additionalProductsReceived([
        {
          key: uuid(),
          price: "77,99 р",
          name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          image: ham,
          like: like,
        },
        {
          key: uuid(),
          price: "44,50 р",
          name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
          image: sausage,
          like: like,
        },
        {
          key: uuid(),
          price: "149,99 р",
          name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12».",
          image: sausages,
          like: like,
        },
        {
          key: uuid(),
          price: "49,39 р",
          name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
          image: milk,
          like: like,
        },
      ])
    );
  }, 1000);
};

export default additionalProductSlice.reducer;
