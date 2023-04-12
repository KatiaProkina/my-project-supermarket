import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/ProductsStyle.css";
import { addProductInBasket } from "../store/basketSlice";
import Checkbox from "../components/Checkbox";

const ProductItem = ({ discountPrice, price, name, image, like, id }) => {
  const navigate = useNavigate();
  const handleToElement = () => {
    navigate(`/catalog/id/${id}`);
  };
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basketProducts.basketProducts);

  const addProduct = () => {
    dispatch(addProductInBasket(id));
  };

  return (
    <div className="productCard">
      <div className="product-card-image" onClick={handleToElement}>
        <img className="product-image" src={image} alt="Logo" />
      </div>
      <button className="btn-like">
        <Checkbox />
      </button>
      <div className="product-card-price">
        <div className="discountPrice">{discountPrice}</div>
        <div className="fullPrice">{price}</div>
      </div>
      <div className="product-card-name">{name}</div>
      <div className="product-card-grade">
        <Rating />
      </div>
      <div>
        <button
          className="btn-basket"
          onClick={addProduct}
          disabled={!!basket.find((id1) => id1 === id)}
        >
          В корзину
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
