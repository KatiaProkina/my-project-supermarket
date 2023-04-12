import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogSlice";
import productsReducer from "./productSlice";
import similarProductsReducer from "./similarProductsSlice";
import additionalProductsReducer from "./additionalProductsSlice"
import stockProductsReducer from "./stockProductsSlice"
import basketProductsReducer from './basketSlice'
export default configureStore({
  reducer: {
    catalog: catalogReducer,
    products: productsReducer,
    similarProducts: similarProductsReducer,
    additionalProducts: additionalProductsReducer,
    stockProducts:stockProductsReducer,
    basketProducts:basketProductsReducer,
  },
});
