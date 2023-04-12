import { Switch } from "@mui/material";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/BasketPageStyle.css";
import BasketProducts from '../components/BasketProducts'
import { useNavigate } from "react-router-dom";

const BasketPage = () => {
  const basket = useSelector(state=> state.basketProducts.basketProducts)
  const products = useSelector((state) => state.products.products);

  const productsFiltered =  products.filter((item,index)=>{
   return basket.includes(item.key)
}
)
const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="basket-container">
        <div>Каталог {">"} Корзина</div>
         <button onClick={navigateToMainPage} className='btn-on-main'>На главную</button>
        <h1>Корзина</h1>
        <div className="basket-content">
            <div className="basket-product-btns">
              <div className="btn-highlight-all">
                <div>-</div>
                <button>Выделить все</button>
              </div>
              <button className="btn-delete-highlight-all">
                Удалить выбранные
              </button>
            </div>
            <div className="basket-products">
            <div className="basket-products-list">
              <BasketProducts items={productsFiltered} />
            </div>
            <div className="final-price">
              <div className="bonus-card">
                <div className="bonus-switch">
                    <Switch/>
                    Списать 200 Р
                </div>
                <div className="bonus-on-card">
                  На карте накоплено 200 Р
                </div>
              </div>
              <div className="final-basket-cost">
                <div className="final-products-cost">
                  <span>3 товара</span>
                  <span className="sum" >258 Р</span>
                </div>
                <div className="final-products-cost">
                  <span>Скидка</span>
                  <span className="final-discount" >-8.01 р</span>
                </div>
              </div>
              <div className="final-total-price">
                <span>Итог</span>
                <span className="total-final-price">250.09 Р</span>
              </div>
              <div className="product-bonuses basket-product-bonuses">
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
              Вы получаете 100 бонусов
            </div>
            <button className="basket-btn-order-products">Оформить заказ</button>
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BasketPage;
