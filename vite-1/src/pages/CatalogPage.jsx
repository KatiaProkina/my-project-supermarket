import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CatalogPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="catalog-products-page">
        <div>Каталог > {params.id}</div>
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
                <div className="inputs">
                  <input className="input-price" type="text" /> -{" "}
                  <input className="input-price" type="text" name="" id="" />
                </div>
                <div className="slider">ползунок</div>
              </div>
              <div className="filters-products">
                <button className="filter-product">Молоко</button>
                <button className="filter-product">Сливки</button>
                <button className="filter-product">Яйцо</button>
              </div>
              <div className="filter-checkbox">в наличии</div>
              <button className="apply-btn">Применить</button>
            </div>
            <div className="products">
              <div className="applied-filters">
                <div>
                  <button className="product-btn">Фильтр 4</button>
                  <svg
                    className="delete"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <button className="product-btn">Цена от 99 до 2599</button>
                  <svg
                    className="delete"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <button className="product-btn">Очистить фильтры</button>
                  <svg
                    className="delete"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                      fill="white"
                    />
                  </svg>
                </div>
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
