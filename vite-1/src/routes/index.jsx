import { createBrowserRouter } from "react-router-dom";
import {
  MainPage,
  ErrorPage,
  LoginPage,
  ProtectedRoutes,
  CatalogPage,
  ElementPage,
  BasketPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/catalog/:id",
            element: <CatalogPage />,
          },
          {
            path: "/catalog/:id/:id",
            element: <ElementPage />,
          },
        ],
      },
      {
        path: "/basket",
        element: <ProtectedRoutes />,
        children: [{ index: true, element: <BasketPage /> }],
      },
    ],
  },
]);
