import { Rating } from "@mui/material";
import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/ElementPageStyle.css";
import { getSimilarProducts } from "../store/similarProductsSlice";
import { getAdditionalProducts } from "../store/additionalProductsSlice";
import { getStockProducts } from "../store/stockProductsSlice";
import SimilarProducts from "../components/SimilarProducts";
import { useEffect, useState } from "react";
import AdditionalProducts from "../components/AdditionalProducts";
import StockProducts from "../components/StockProducts";
import { loadProduct } from "../store/productSlice";
import { addProductInBasket } from "../store/basketSlice";
const ElementPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const similarProducts = useSelector(
    (state) => state.similarProducts.similarProducts
  );
  const similarProductsLoading = useSelector(
    (state) => state.similarProducts.loading
  );

  const additionalProducts = useSelector(
    (state) => state.additionalProducts.additionalProducts
  );
  const additionalProductsLoading = useSelector(
    (state) => state.additionalProducts.loading
  );

  const stockProducts = useSelector(
    (state) => state.stockProducts.stockProducts
  );
  const stockProductsLoading = useSelector(
    (state) => state.stockProducts.loading
  );

  const [element, setElement] = useState({});

  useEffect(() => {
    dispatch(getSimilarProducts());
    dispatch(getAdditionalProducts());
    dispatch(getStockProducts());
  }, []);

  useEffect(() => {
    const par = loadProduct(params.id);
    console.log(par);
    setElement(par);
  }, [params.id]);

  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("/");
  };
  const navigateToCatalogPage = () => {
    navigate(-1);
  };
  
  return (
    <div>
      <Header />
      <div className="prodict-element-container">
        <div>
          <button  onClick={navigateToCatalogPage} className='btn-on-main'>Каталог</button>{">"} {element.name}
        </div>
        <button onClick={navigateToMainPage} className='btn-on-main'>На главную</button>
        <h1>{element.name}</h1>
        <div className="product-element-options">
          <span className="element-options-articul">арт. 371431</span>
          <Rating className="element-rating" />
          <Link className="element-reviews-link">3 отзыва</Link>
          <div className="options-element-btn-share">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
                fill="#414141"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
                fill="#414141"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
                fill="#414141"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
                fill="#414141"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
                fill="#414141"
              />
            </svg>
            <button className="btn-share">Поделиться</button>
          </div>
          <div className="options-element-btn-like">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7046 2.25644C12.8299 1.13067 14.3564 0.498169 15.9482 0.498169C17.5399 0.498169 19.0664 1.13063 20.1916 2.25636C21.3174 3.38164 21.95 4.90829 21.95 6.49999C21.95 8.09174 21.3175 9.61826 20.1917 10.7435C20.1917 10.7436 20.1917 10.7435 20.1917 10.7435L11.3517 19.5835C11.1565 19.7788 10.8399 19.7788 10.6446 19.5835L1.80461 10.7435C-0.539037 8.3999 -0.539037 4.60009 1.80461 2.25644C4.14826 -0.0872086 7.94807 -0.0872087 10.2917 2.25644L10.9982 2.96289L11.7046 2.25644C11.7046 2.25641 11.7046 2.25647 11.7046 2.25644ZM15.9482 1.49817C14.6217 1.49817 13.3496 2.02528 12.4118 2.96346L11.3517 4.02355C11.258 4.11732 11.1308 4.16999 10.9982 4.16999C10.8656 4.16999 10.7384 4.11732 10.6446 4.02355L9.58461 2.96355C7.63149 1.01042 4.46484 1.01042 2.51172 2.96355C0.558594 4.91667 0.558594 8.08332 2.51172 10.0364L10.9982 18.5229L19.4846 10.0364C20.4228 9.09869 20.95 7.82648 20.95 6.49999C20.95 5.17351 20.4229 3.90138 19.4847 2.96363C18.5469 2.02544 17.2747 1.49817 15.9482 1.49817Z"
                fill="#414141"
              />
            </svg>
            <button className="options-btn-like">В избранное</button>
          </div>
        </div>
        <div className="product-element-area">
          <div className="mini-element-image">
            <div className="mini-element">
              <img
                className="mini-element-image-item"
                src={element.image}
                alt=""
              />
            </div>
            <div className="mini-element">
              <img
                className="mini-element-image-item"
                src={element.image}
                alt=""
              />
            </div>
            <div className="mini-element">
              <img
                className="mini-element-image-item"
                src={element.image}
                alt=""
              />
            </div>
            <div className="mini-element">
              <img
                className="mini-element-image-item"
                src={element.image}
                alt=""
              />
            </div>
            <div className="mini-element">
              <img
                className="mini-element-image-item"
                src={element.image}
                alt=""
              />
            </div>
          </div>
          <div className="main-element-image">
            <img className="main-image" src={element.image} alt="" />
          </div>
          <div className="product-element-information">
            <div className="product-element-prices">
              <div className="product-element-price ">
                <span className="full">{element.price}р</span>
                <span>Обычная цена</span>
              </div>
              <div className="product-element-price">
                <span className="sale">{element.discountPrice}</span>
                <span className="sale-description">
                  с картой Северяночки
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                      fill="#414141"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12C11.5 11.7239 11.7239 11.5 12 11.5Z"
                      fill="#414141"
                    />
                    <path
                      d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                      fill="#414141"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="product-element-information-basket">
              <svg
                className="product-element-information-basket-icon"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.33337 28C7.33337 26.1591 8.82576 24.6667 10.6667 24.6667C12.5077 24.6667 14 26.1591 14 28C14 29.841 12.5077 31.3333 10.6667 31.3333C8.82576 31.3333 7.33337 29.841 7.33337 28ZM10.6667 26C9.56214 26 8.66671 26.8954 8.66671 28C8.66671 29.1046 9.56214 30 10.6667 30C11.7713 30 12.6667 29.1046 12.6667 28C12.6667 26.8954 11.7713 26 10.6667 26Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.3334 28C23.3334 26.1591 24.8258 24.6667 26.6667 24.6667C28.5077 24.6667 30 26.1591 30 28C30 29.841 28.5077 31.3333 26.6667 31.3333C24.8258 31.3333 23.3334 29.841 23.3334 28ZM26.6667 26C25.5621 26 24.6667 26.8954 24.6667 28C24.6667 29.1046 25.5621 30 26.6667 30C27.7713 30 28.6667 29.1046 28.6667 28C28.6667 26.8954 27.7713 26 26.6667 26Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33329 0.666672C0.965103 0.666672 0.666626 0.965149 0.666626 1.33334C0.666626 1.70153 0.965103 2.00001 1.33329 2.00001H6.10731C7.11706 7.72197 8.13773 13.4191 8.99904 19.1611C9.2438 20.7929 10.6455 22 12.2955 22H25.8129C27.4018 22 28.7698 20.8785 29.0815 19.3204L31.0004 9.72557C31.2479 8.48799 30.3014 7.33334 29.0393 7.33334H9.54725C9.1433 7.33334 8.77059 7.45202 8.45911 7.65458L7.32315 1.21748C7.26693 0.89891 6.99012 0.666672 6.66663 0.666672H1.33329ZM8.88795 9.43223C8.82749 9.02916 9.13967 8.66667 9.54725 8.66667H29.0393C29.46 8.66667 29.7755 9.05155 29.693 9.46408L27.774 19.0589C27.587 19.9938 26.7662 20.6667 25.8129 20.6667H12.2955C11.3055 20.6667 10.4645 19.9424 10.3176 18.9634L8.88795 9.43223Z"
                  fill="white"
                />
              </svg>
              <button
                className="product-element-information-basket-btn"
              >
                В корзину
              </button>
            </div>
            <div className="product-bonuses">
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.1883 0.666611H0.811961C0.343143 0.666611 -0.0396916 1.05823 0.0033005 1.52051C0.494639 7.0113 5.67826 11.3333 12.0001 11.3333C18.322 11.3333 23.5056 7.01332 23.997 1.52051C24.0379 1.05823 23.6571 0.666611 23.1883 0.666611Z"
                  fill="#70C05B"
                />
              </svg>
              Вы получаете 10 бонусов
            </div>
            <div className="product-low-price-notification">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.2778 3.3842C13.2821 2.21815 10.8173 2.19959 8.80431 3.33546C8.56381 3.47116 8.25884 3.38621 8.12313 3.14572C7.98743 2.90522 8.07238 2.60025 8.31288 2.46454C10.6356 1.15392 13.4796 1.17534 15.7823 2.52079C18.085 3.86623 19.5 6.3333 19.4986 9.00026L18.9986 9H19.4986V9.00026V13C19.4986 13.2761 19.2747 13.5 18.9986 13.5C18.7225 13.5 18.4986 13.2761 18.4986 13V9L18.4986 8.99975C18.4998 6.68838 17.2734 4.55026 15.2778 3.3842ZM6.00937 5.33572C6.25474 5.46239 6.35096 5.764 6.22429 6.00937C5.74707 6.93372 5.49869 7.95911 5.5 8.99937L5.5 9L5.5 14C5.5 14.9793 5.09777 15.8647 4.44949 16.5H17C17.2761 16.5 17.5 16.7239 17.5 17C17.5 17.2761 17.2761 17.5 17 17.5H2C1.72386 17.5 1.5 17.2761 1.5 17C1.5 16.7239 1.72386 16.5 2 16.5C3.38071 16.5 4.5 15.3807 4.5 14V9.00025M10.0191 20.5675C10.258 20.4289 10.5639 20.5103 10.7025 20.7491C10.9708 21.2117 11.4652 21.4965 12 21.4965C12.5348 21.4965 13.0292 21.2117 13.2975 20.7491C13.4361 20.5103 13.742 20.4289 13.9809 20.5675C14.2197 20.7061 14.3011 21.012 14.1625 21.2509C13.7153 22.0219 12.8913 22.4965 12 22.4965C11.1087 22.4965 10.2847 22.0219 9.8375 21.2509C9.69894 21.012 9.78025 20.7061 10.0191 20.5675Z"
                  fill="#414141"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L23.3536 22.6464C23.5488 22.8417 23.5488 23.1583 23.3536 23.3536C23.1583 23.5488 22.8417 23.5488 22.6464 23.3536L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                  fill="#414141"
                />
              </svg>
              Уведомить о снижении цены
            </div>
            <div className="product-characteristic-block">
              <div className="product-characteristic">
                <div>Бренд</div>
                <div className="characteristic-value">ПРОСТОКВАШИНО</div>
              </div>
              <div className="product-characteristic product-country-manufacturer">
                <div>Страна производитель</div>
                <div className="characteristic-value">Россия</div>
              </div>
              <div className="product-characteristic">
                <div>Упаковка</div>
                <div className="characteristic-value">180 г</div>
              </div>
            </div>
          </div>
          <div className="similar-products">
            <span>Похожие</span>
            <div>
              {similarProductsLoading === "pending" ? (
                <div>Loading...</div>
              ) : (
                <SimilarProducts items={similarProducts} />
              )}
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="additional-products">
          <h2>С этим товаром покупают</h2>
          <div>
            {additionalProductsLoading === "pending" ? (
              <div>Loading...</div>
            ) : (
              <AdditionalProducts items={additionalProducts} />
            )}
          </div>
        </div>
        <div className="products-reviews">
          <h2>Отзывы</h2>
          <div className="products-reviews-container">
            <div className="ratings">
              <div className="average-rating">
                <Rating value={4} /> <span>4 из 5</span>
              </div>
              <div className="rating">
                <span>5</span>
                <Rating value={5} />
                <span>1</span>
              </div>
              <div className="rating">
                <span>4</span>
                <Rating value={4} />
                <span>1</span>
              </div>
              <div className="rating">
                <span>3</span>
                <Rating value={3} />
                <span>0</span>
              </div>
              <div className="rating">
                <span>2</span>
                <Rating value={2} />
                <span>0</span>
              </div>
              <div className="rating">
                <span>1</span>
                <Rating value={1} />
                <span>1</span>
              </div>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="user-reviewer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 19C3.5 16.5147 5.51472 14.5 8 14.5H16C18.4853 14.5 20.5 16.5147 20.5 19V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V19C19.5 17.067 17.933 15.5 16 15.5H8C6.067 15.5 4.5 17.067 4.5 19V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V19Z"
                      fill="#414141"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z"
                      fill="#414141"
                    />
                  </svg>
                  <span>Татьяна</span>
                </div>
                <div className="review-rating-data">
                  <Rating value={5} />
                  <span>22.05.2020</span>
                </div>
                <div className="review-text">приятный вкус</div>
              </div>
              <div className="review">
                <div className="user-reviewer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 19C3.5 16.5147 5.51472 14.5 8 14.5H16C18.4853 14.5 20.5 16.5147 20.5 19V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V19C19.5 17.067 17.933 15.5 16 15.5H8C6.067 15.5 4.5 17.067 4.5 19V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V19Z"
                      fill="#414141"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z"
                      fill="#414141"
                    />
                  </svg>
                  <span>Мария</span>
                </div>
                <div className="review-rating-data">
                  <Rating value={4} />
                  <span>22.05.2020</span>
                </div>
                <div className="review-text">Масло среднее, есть вкуснее</div>
              </div>
              <div className="review">
                <div className="user-reviewer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 19C3.5 16.5147 5.51472 14.5 8 14.5H16C18.4853 14.5 20.5 16.5147 20.5 19V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V19C19.5 17.067 17.933 15.5 16 15.5H8C6.067 15.5 4.5 17.067 4.5 19V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V19Z"
                      fill="#414141"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z"
                      fill="#414141"
                    />
                  </svg>
                  <span>Алексей</span>
                </div>
                <div className="review-rating-data">
                  <Rating value={1} />
                  <span>22.05.2020</span>
                </div>
                <div className="review-text">
                  Покупали в том числе в этом весе. Масло по вкусу и
                  органолептическим свойствам совершенно не похоже на
                  натуральное. Упаковка выглядит как напечатанная на дешёвом
                  принтере. На наш взгляд продукт является подделкой или
                  контрафактной продукцией. Просим разобраться.
                </div>
              </div>
              <div className="review-form">
                <div className="review-form-rating">
                  Ваша оценка
                  <Rating />
                </div>
                <form className="form-review" action="" method="post">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Отзыв"
                  />
                </form>
                <button className="form-btn">Отправить отзыв</button>
              </div>
            </div>
          </div>
        </div>
        <div className="stock-products">
          <h2>Акции</h2>

          {stockProductsLoading === "pending" ? (
            <div>Loading...</div>
          ) : (
            <StockProducts items={stockProducts} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ElementPage;
