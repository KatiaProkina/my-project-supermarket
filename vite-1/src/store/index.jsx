import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogSlice";
import productsReducer from "./productSlice";

export default configureStore({
  reducer: {
    catalog: catalogReducer,
    products: productsReducer
  },
});

