import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import CatalogItems from "../components/Catalogitems";
import Footer from "../components/Footer";
import SearchBlock from "../components/SearchBlock";
import { getCatalogItems } from "../store/catalogSlice";
import "../style/CatalogStyle.css";

const MainPage = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const catalogItems = useSelector((state) => state.catalog.catalog);
  const catalogLoading = useSelector((state) => state.catalog.loading);

  useEffect(() => {
    dispatch(getCatalogItems());
  }, []);

  const filterCatalogItems = catalogItems.filter(({ name }) =>
    name.includes(searchText)
  );

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <img src="/img/logo.png" alt="" className="header-logo" />
          <div className="header-goods">
            <button className="header-btn-catalog">
              <img src="/img/menu.png" alt="" />
              <div className="catalog">Каталог</div>
            </button>
            <div className="form">
              <div className="search-form">
                <SearchBlock value={searchText} setValue={setSearchText} />
                <svg
                  className="search"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z"
                    fill="#414141"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z"
                    fill="#414141"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="header-sections">
            <div className="header-section">
              <svg
                width="24"
                height="24"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2046 2.25644C13.3299 1.13067 14.8564 0.498169 16.4482 0.498169C18.0399 0.498169 19.5664 1.13063 20.6916 2.25636C21.8174 3.38164 22.45 4.90829 22.45 6.49999C22.45 8.09174 21.8175 9.61826 20.6917 10.7435C20.6917 10.7436 20.6917 10.7435 20.6917 10.7435L11.8517 19.5835C11.6565 19.7788 11.3399 19.7788 11.1446 19.5835L2.30461 10.7435C-0.0390375 8.3999 -0.0390373 4.60009 2.30461 2.25644C4.64826 -0.0872086 8.44807 -0.0872087 10.7917 2.25644L11.4982 2.96289L12.2046 2.25644C12.2046 2.25641 12.2046 2.25647 12.2046 2.25644ZM16.4482 1.49817C15.1217 1.49817 13.8496 2.02528 12.9118 2.96346L11.8517 4.02355C11.758 4.11732 11.6308 4.16999 11.4982 4.16999C11.3656 4.16999 11.2384 4.11732 11.1446 4.02355L10.0846 2.96355C8.13149 1.01042 4.96484 1.01042 3.01172 2.96355C1.05859 4.91667 1.05859 8.08332 3.01172 10.0364L11.4982 18.5229L19.9846 10.0364C20.9228 9.09869 21.45 7.82648 21.45 6.49999C21.45 5.17351 20.9229 3.90138 19.9847 2.96363C19.0469 2.02544 17.7747 1.49817 16.4482 1.49817Z"
                  fill="#414141"
                />
              </svg>
              <div className="section-name">Избранное</div>
            </div>
            <div className="header-section">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3325 1.89776C11.3324 1.89785 11.3327 1.89767 11.3325 1.89776L3.33366 5.89721L3.33255 5.89776C2.82288 6.15102 2.50045 6.67089 2.50005 7.24V16.7635C2.49608 17.3334 2.81541 17.8563 3.32416 18.113C3.32445 18.1132 3.32387 18.1129 3.32416 18.113L11.3237 22.1128C11.7462 22.3242 12.2438 22.3243 12.6663 22.1129L20.6664 18.1128L20.6675 18.1122C21.1773 17.8589 21.4997 17.3389 21.5 16.7697V7.24026C21.4997 6.67105 21.1773 6.15106 20.6675 5.89776L20.6664 5.89721L12.6675 1.89776C12.6674 1.89767 12.6677 1.89786 12.6675 1.89776C12.2474 1.6892 11.7527 1.68919 11.3325 1.89776ZM10.8875 1.00223C11.5883 0.654 12.4118 0.654 13.1125 1.00223L13.1137 1.00278L21.1125 5.00223C21.1127 5.00231 21.1124 5.00215 21.1125 5.00223C21.9618 5.42448 22.4995 6.29123 22.5 7.23973V16.77C22.4995 17.7184 21.9624 18.5852 21.1132 19.0074C21.113 19.0075 21.1134 19.0073 21.1132 19.0074L13.1138 23.0071C13.1138 23.0072 13.1138 23.0071 13.1138 23.0071C12.4097 23.3594 11.5806 23.3595 10.8764 23.0072C10.8764 23.0072 10.8765 23.0072 10.8764 23.0072L2.87644 19.0072L2.87506 19.0065C2.02685 18.5791 1.49413 17.708 1.50005 16.7584V7.24C1.50055 6.29154 2.03772 5.4248 2.88695 5.00253C2.88715 5.00243 2.88675 5.00263 2.88695 5.00253L10.8864 1.00278L10.8875 1.00223Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.87272 5.93638C1.99621 5.6894 2.29655 5.58928 2.54354 5.71278L11.9999 10.441L21.4563 5.71278C21.7033 5.58928 22.0037 5.6894 22.1271 5.93638C22.2506 6.18337 22.1505 6.48371 21.9035 6.6072L12.2235 11.4472C12.0828 11.5176 11.9171 11.5176 11.7763 11.4472L2.09633 6.6072C1.84934 6.48371 1.74923 6.18337 1.87272 5.93638Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V22.76C12.5 23.0361 12.2761 23.26 12 23.26C11.7239 23.26 11.5 23.0361 11.5 22.76V11C11.5 10.7239 11.7239 10.5 12 10.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5529 3.27638C6.67639 3.02939 6.97673 2.92928 7.22372 3.05277L17.2237 8.05277C17.4707 8.17627 17.5708 8.4766 17.4473 8.72359C17.3238 8.97058 17.0235 9.0707 16.7765 8.9472L6.7765 3.9472C6.52951 3.82371 6.4294 3.52337 6.5529 3.27638Z"
                  fill="#414141"
                />
              </svg>
              <div className="section-name">Заказы</div>
            </div>
            <div className="header-section">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 25C6 23.6193 7.11929 22.5 8.5 22.5C9.88071 22.5 11 23.6193 11 25C11 26.3807 9.88071 27.5 8.5 27.5C7.11929 27.5 6 26.3807 6 25ZM8.5 23.5C7.67157 23.5 7 24.1716 7 25C7 25.8284 7.67157 26.5 8.5 26.5C9.32843 26.5 10 25.8284 10 25C10 24.1716 9.32843 23.5 8.5 23.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 25C18 23.6193 19.1193 22.5 20.5 22.5C21.8807 22.5 23 23.6193 23 25C23 26.3807 21.8807 27.5 20.5 27.5C19.1193 27.5 18 26.3807 18 25ZM20.5 23.5C19.6716 23.5 19 24.1716 19 25C19 25.8284 19.6716 26.5 20.5 26.5C21.3284 26.5 22 25.8284 22 25C22 24.1716 21.3284 23.5 20.5 23.5Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 4.5C1.22386 4.5 1 4.72386 1 5C1 5.27614 1.22386 5.5 1.5 5.5H5.08051C5.83783 9.79147 6.60333 14.0643 7.24931 18.3709C7.43288 19.5947 8.48416 20.5 9.72165 20.5H19.8597C21.0514 20.5 22.0774 19.6588 22.3111 18.4903L23.7503 11.2942C23.936 10.366 23.226 9.5 22.2795 9.5H7.66046C7.3575 9.5 7.07797 9.58901 6.84436 9.74093L5.99239 4.91311C5.95023 4.67418 5.74262 4.5 5.5 4.5H1.5ZM7.166 11.0742C7.12065 10.7719 7.35478 10.5 7.66046 10.5H22.2795C22.595 10.5 22.8316 10.7887 22.7698 11.0981L21.3305 18.2942C21.1903 18.9953 20.5747 19.5 19.8597 19.5H9.72165C8.97916 19.5 8.34839 18.9568 8.23825 18.2225L7.166 11.0742Z"
                  fill="#414141"
                />
                <rect
                  x="12.3599"
                  width="11.28"
                  height="11"
                  rx="4"
                  fill="#FF6633"
                />
                <path
                  d="M18.8799 9C18.8132 9 18.7565 8.98 18.7099 8.94C18.6699 8.89333 18.6499 8.83667 18.6499 8.77V3.17L16.9899 4.45C16.9432 4.49 16.8932 4.51 16.8399 4.51C16.7799 4.51 16.7232 4.47667 16.6699 4.41L16.4099 4.08C16.3765 4.03333 16.3599 3.98667 16.3599 3.94C16.3599 3.86 16.3932 3.79667 16.4599 3.75L18.6399 2.07C18.7132 2.02333 18.7999 2 18.8999 2H19.4099C19.4765 2 19.5299 2.02333 19.5699 2.07C19.6165 2.11 19.6399 2.16333 19.6399 2.23V8.77C19.6399 8.83667 19.6165 8.89333 19.5699 8.94C19.5299 8.98 19.4765 9 19.4099 9H18.8799Z"
                  fill="white"
                />
              </svg>
              <div className="section-name">Корзина</div>
            </div>
          </div>
          <div className="header-user-menu">
            <div className="header-user-menu-avatar">
              <img src="/img/avatar.png" alt="" />
              Алексей
            </div>
            <button className="header-user-menu-avatar-chevron-down">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L12 14.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645Z"
                  fill="#414141"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
