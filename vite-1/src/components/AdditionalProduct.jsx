import { Rating } from "@mui/material";
import "../style/ProductsStyle.css";

const AdditionalProduct = ({ price, name, image, like }) => {
  return (
    <div className="productCard">
      <div className="product-card-image" >
        <img className="product-image" src={image} alt="Logo" />
      </div>
      <button className="btn-like">
        <img src={like} alt="Logo" />
      </button>
      <div className="product-card-price">
        <div className="fullPrice">{price}</div>
      </div>
      <div className="product-card-name">{name}</div>
      <div className="product-card-grade">
        <Rating />
      </div>
      <div>
        <button className="btn-basket">В корзину</button>
      </div>
    </div>
  );
};
export default AdditionalProduct;
