import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./context/auth";
import store from "./store";
import {FilterContextProvider} from './context/FilterContext'
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
      <FilterContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        </FilterContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
