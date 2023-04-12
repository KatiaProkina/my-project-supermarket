import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsItems from "../components/ProductsItems";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../store/productSlice";
import "../style/ProductsStyle.css";
import "../style/CatalogProductsStyle.css";
import { Slider, Switch } from "@mui/material";
import RangeSlider from "../components/RangeSlider";
import PaginationRounded from "../components/PaginationRounded";
import deleteFilter from "../components/icons/deleteFilterIcon.svg";
import { FilterContext } from "../context/FilterContext";

const CatalogPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const productsCatalog = useSelector((state) => state.products.products);
  const productsLoading = useSelector((state) => state.products.loading);

  // useEffect(()=>{

  //     //  document.button.style.backgroundColor = color
  // },[color])

  // const [shownItems, setShownItems] =  useState(productsCatalog.slice(0, 5));

  // const onMoreClick = setShownItems([...shownItems, productsCatalog(elemIndex,elemIndex + 3)])

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { value_1, value_2, value_3 } = useContext(FilterContext);
  const { setValue_3 } = useContext(FilterContext);

  const clickFilter = (id) => {
    setValue_3((prev) => {
      return prev.concat(id);
    });
  };

  const filteredProducts = productsCatalog.filter(
    ({ price }) => price > value_1 && price < value_2
  );
  const firstShown = filteredProducts.slice(0, 6);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="catalog-products-page">
        <div>
          Каталог {">"} {params.id}
        </div>
        <div className="catalog-products">
          <h1>{params.id}</h1>
          <div className="filters-btn">
            <FilterButton>Товары нашего производства</FilterButton>
            <FilterButton>Полезное питание</FilterButton>
            <FilterButton>Без ГМО</FilterButton>
          </div>
          <div className="products_and_filters">
            <div className="filters">
              <button className="header-filter">Фильтр</button>
              <div className="filter-price">
                <div className="price">
                  <div>Цена</div>
                  <FilterButton>Очистить</FilterButton>
                </div>
                <RangeSlider />
              </div>
              <div className="filters-products">
                <button className="filter-product">Молоко</button>
                <button className="filter-product">Сливки</button>
                <button className="filter-product">Яйцо</button>
              </div>
              <div className="filter-checkbox">
                <Switch />В наличии
              </div>
              <button className="apply-btn">Применить</button>
            </div>
            <div className="products">
              <div className="applied-filters">
                <div>
                  <button
                    className={`product-btn ${
                      value_3.includes(123) ? "product-btn_active" : ""
                    }`}
                    onClick={() => {
                      clickFilter(123);
                    }}
                  >
                    Фильтр 4
                  </button>
                  <svg
                    className={`delete ${true ? "delete_active" : ""}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                      fill="#414141"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                      fill="#414141"
                    />
                  </svg>
                </div>
                <div>
                  <button
                    className={`product-btn ${
                      value_3.includes(234) ? "product-btn_active" : ""
                    }`}
                    onClick={() => {
                      clickFilter(234);
                    }}
                  >
                    Цена от 99 до 2599
                  </button>
                  <img className="delete" src={deleteFilter} alt="" />
                </div>
                <div>
                  <button
                    className={`product-btn ${
                      value_3.includes(567) ? "product-btn_active" : ""
                    }`}
                    onClick={() => {
                      clickFilter(567);
                    }}
                  >
                    Очистить фильтры
                  </button>
                  <img className="delete" src={deleteFilter} alt="" />
                </div>
              </div>
              <div className="products-item">
                {productsLoading === "pending" ? (
                  <div>Loading...</div>
                ) : (
                  <ProductsItems items={firstShown} />
                )}
              </div>
              <div className="block-btn-show-more">
                <button className="btn-show-more">Показать ещё</button>
              </div>
              <div className="pagination">
                <PaginationRounded />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CatalogPage;
