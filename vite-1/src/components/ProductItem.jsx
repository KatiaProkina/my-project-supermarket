import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../style/ProductsStyle.css";

const ProductItem = ({discountPrice, price,name,image,like,}) => {
    const navigate = useNavigate()
    const handleToElement = ()=>{
        navigate(`/catalog/id/${name}`)
    }
    
    return (
      <div className="productCard" >
        <div className="product-card-image"onClick={handleToElement} >
        <img className="product-image" src={image} alt="Logo" />
        </div>
        <button className="btn-like">
        <img src={like} alt="Logo" />
        </button>
        <div className="product-card-price"> 
          <div className="discountPrice">{discountPrice}</div>
          <div className="fullPrice">{price}</div>
        </div>
        <div className="product-card-name">
          {name}
        </div>
        <div className="product-card-grade">
         <Rating/>
        </div>
        <div>
          <button className="btn-basket">В корзину</button>
        </div>
      </div>
    );
  };
  export default ProductItem;