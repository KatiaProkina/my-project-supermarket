import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import pancakes from "./img/pancakes.png"
import sausage from "./img/sausage.png"
import sausages from "./img/sausages.png"
import milk from "./img/milk.png"
import like from "./img/like.svg";

const stockProductsSlice = createSlice({
  name: "stockProducts",
  initialState: {
    stockProducts: [],
    loading: "idle",
  },
  reducers: {
    stockProductsReceived: (state, action) => {
      state.stockProducts = action.payload || [];
      state.loading = "idle";
    },
    stockProductsLoading: (state) => {
      state.loading = "pending";
    },
  },
});

const { stockProductsReceived, stockProductsLoading } =
stockProductsSlice.actions;

export const getStockProducts = () => (dispatch) => {
  dispatch(stockProductsLoading());
  setTimeout(() => {
    dispatch(
        stockProductsReceived([
        {
          key: uuid(),
          name:"Г/Ц Блинчики с мясом вес, Россия",
          discountPrice:"44,50 р",
          price: "50,50 Р",
          discount:"50%",
          image: pancakes,
          like:like
        },
        {
          key: uuid(),
          name:"Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...",
          price: "50,50 Р",
          discount:"50%",
          discountPrice:"44,50 р",
          image: milk,
          like:like
        },
        {
          key: uuid(),
          name:"Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
          price: "50,50 Р",
          discount:"50%",
          discountPrice:"44,50 р",
          image: sausage,
          like:like
        },
        {
          key: uuid(),
          name:"Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
          price: "50,50 Р",
          discount:"50%",
          discountPrice:"44,50 р",
          image: sausages,
          like:like
        },
      ])
    );
  }, 1000);
};

export default stockProductsSlice.reducer;
