import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import img_1 from "./img/img_1.png";
import img_2 from "./img/img_2.png";
import img_3 from "./img/img_3.png";
import img_4 from "./img/img_4.png";
import img_5 from "./img/img_5.png";
import img_6 from "./img/img_6.png";
import img_7 from "./img/img_7.png";
import img_8 from "./img/img_8.png";
import img_9 from "./img/img_9.png";
import img_10 from "./img/img_10.png";
import img_11 from "./img/img_11.png";
import img_12 from "./img/img_12.png";
import img_13 from "./img/img_13.png";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalog: [],
    loading: "idle",
  },
  reducers: {
    catalogReceived: (state, action) => {
      state.catalog = action.payload || [];
      state.loading = "idle";
    },
    catalogLoading: (state) => {
      state.loading = "pending";
    },
    // catalogLoadingTrue:(state,action)=>{
    //   state.loading = action.payload
    // }

  },
});

const { catalogReceived, catalogLoading, catalogLoadingTrue} = catalogSlice.actions;

export const getCatalogItems = () => (dispatch) => {
  dispatch(catalogLoading());
  setTimeout(() => {
    dispatch(
      catalogReceived([
        {
          key: uuid(),
          name: "Молоко, сыр, яйцо",
          category: "category 2",
          image: img_1,
        },
        {
          key: uuid(),
          name: "Хлеб",
          category: "category 2",
          image: img_2,
        },
        {
          key: uuid(),
          name: "Фрукты и овощи",
          category: "category 3",
          image: img_3,
        },
        {
          key: uuid(),
          name: "Замороженные продукты",
          category: "category 4",
          image: img_4,
        },
        {
          key: uuid(),
          name: "Напитки",
          category: "category 4",
          image: img_5,
        },
        {
          key: uuid(),
          name: "Кондитерские изделия",
          category: "category 4",
          image: img_6,
        },
        {
          key: uuid(),
          name: "Чай,кофе",
          category: "category 4",
          image: img_7,
        },
        {
          key: uuid(),
          name: "Бакалея",
          category: "category 4",
          image: img_8,
        },
        {
          key: uuid(),
          name: "Здоровое питание",
          category: "category 4",
          image: img_9,
        },
        {
          key: uuid(),
          name: "Зоотовары",
          category: "category 4",
          image: img_10,
        },
        {
          key: uuid(),
          name: "Детское питание",
          category: "category 4",
          image: img_11,
        },
        {
          key: uuid(),
          name: "Мясо, птица, колбаса",
          category: "category 4",
          image: img_12,
        },
        {
          key: uuid(),
          name: "Непродовольственные товары",
          category: "category 4",
          image: img_13,
        },
      ])
    );
  }, 2000);
};
 
// export const changeLoading=()=>(dispatch)=>{
//   dispatch(catalogLoadingTrue('Katya'))
// }

export default catalogSlice.reducer;
