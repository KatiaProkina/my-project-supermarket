
import { useState } from "react";

const BasketProductItem = ({ price, name, image}) => {
  const [count,setCount] = useState(0)

    return (
      <div className="basket-product-card">
        <div className="basket-product-item-image-div" >
        <input className="basket-checkbox" type="checkbox" id="scales" name="scales"/>
        <img className="basket-product-item-image" src={image} alt="Logo" />
        </div>
        <div className="basket-product-item-description">
            <div className="basket-product-item-name">{name}</div>
            <div className="basket-product-item-price">{price} р</div>
        </div>
        <div className="basket-product-item-counter">
            <button className='btn-counter' onClick={() => setCount(count - 1)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
</svg>
</button>
            <div>{count}</div>
            <button className='btn-counter' onClick={() => setCount(count + 1)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="white"/>
</svg>
</button>
        </div>
        <div className="basket-product-item-final-price">{Math.round(price*count)}р</div>
      </div>
    );
  };
  export default BasketProductItem;
  