import ProductItem from "./ProductItem";
import "../style/ProductsStyle.css";

const ProductsItems =  ({ items = [] }) => {
    return (
      <div className="productsItems">
        {items.map(({ key, ...item }) => (
          <ProductItem key={key} {...item} id={key}/>
        ))}
      </div>
    );
  };
  export default ProductsItems;