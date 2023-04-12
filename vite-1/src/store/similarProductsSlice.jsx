import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import butterSimilar1 from "./img/butter-similar-1.png";
import butterSimilar2 from "./img/butter-similar-2.png";
import butterSimilar3 from "./img/butter-similar-3.png";
import butterSimilar4 from "./img/butter-similar-4.png";

const similarProductSlice = createSlice({
  name: "similarProducts",
  initialState: {
    similarProducts: [],
    loading: "idle",
  },
  reducers: {
    similarProductsReceived: (state, action) => {
      state.similarProducts = action.payload || [];
      state.loading = "idle";
    },
    similarProductsLoading: (state) => {
      state.loading = "pending";
    },
  },
});

const { similarProductsReceived, similarProductsLoading } =
  similarProductSlice.actions;

export const getSimilarProducts = () => (dispatch) => {
  dispatch(similarProductsLoading());
  setTimeout(() => {
    dispatch(
      similarProductsReceived([
        {
          key: uuid(),
          price: "157,50" ,
          image: butterSimilar1,
        },
        {
          key: uuid(),
          price: "331,50 Р",
          image: butterSimilar2,
        },
        {
          key: uuid(),
          price: "154,50 Р",
          image: butterSimilar3,
        },
        {
          key: uuid(),
          price: "157,50 Р",
          image: butterSimilar4,
        },
      ])
    );
  }, 1000);
};

export default similarProductSlice.reducer;
