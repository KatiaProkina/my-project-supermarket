import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import CatalogItems from "../components/CatalogItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getCatalogItems } from "../store/catalogSlice";
import "../style/CatalogStyle.css";
import { SearchContext } from "../context/SearchContext";

const MainPage = () => {
  const { value } = useContext(SearchContext);
  const dispatch = useDispatch();
  const catalogItems = useSelector((state) => state.catalog.catalog);
  const catalogLoading = useSelector((state) => state.catalog.loading);

  useEffect(() => {
    dispatch(getCatalogItems());
  }, []);

  const filterCatalogItems = catalogItems.filter(({ name }) =>
    name.includes(value)
  );

  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="catalog-page">
          <div></div>
          <h1>Каталог</h1>
          <div>
            {catalogLoading === "pending" ? (
              <div>Loading...</div>
            ) : (
              <CatalogItems items={filterCatalogItems} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
