import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import cheese from "./img/cheese.png";
import milk from "./img/milk.png";
import sugarMilk from "./img/sugar-milk.png";
import butter from "./img/butter.png";
import yogurt from "./img/yogurt.png";
import like from "./img/like.svg";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: "idle",
  },
  reducers: {
    productsReceived: (state, action) => {
      state.products = action.payload || [];
      state.loading = "idle";
    },
    productsLoading: (state) => {
      state.loading = "pending";
    },
  },
});

const { productsReceived, productsLoading } = productSlice.actions;

const products = [
  {
    key: uuid(),
    discountPrice: "",
    price: 77.99,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: cheese,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "69,99 р - с картой",
    price: 87.50,
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...",
    image: milk,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "77,99 р",
    price: 55.50,
    name: "Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...",
    image: sugarMilk,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "69,99 р",
    price: 99.50,
    name: "Масло ПРОСТОКВАШИНО сливочное 180 г",
    image: butter,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "",
    price: 29.99 ,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: yogurt,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "",
    price: 29.99,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    image: yogurt,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "69,99 р",
    price: 99.50 ,
    name: "Масло ПРОСТОКВАШИНО сливочное 180 г",
    image: butter,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "69,99 р",
    price: 99.50 ,
    name: "Масло ПРОСТОКВАШИНО сливочное 180 г",
    image: butter,
    like:like
  },
  {
    key: uuid(),
    discountPrice: "69,99 р",
    price: 99.50,
    name: "Масло ПРОСТОКВАШИНО сливочное 180 г",
    image: butter,
    like:like
  },
]
export const getProducts = () => (dispatch) => {
  dispatch(productsLoading());
  setTimeout(() => {
    dispatch(
      productsReceived(products)
    );
  }, 2000);
};

export const loadProduct = (key)=>{
 return products.find((item)=>{
   return key === item.key
 })
}

export default productSlice.reducer;
