
import "../style/ProductsStyle.css";
import StockProduct from "./StockProduct";

const StockProducts =  ({ items = [] }) => {
    return (
      <div className="productsItems">
        {items.map(({ key, ...item }) => (
             <StockProduct key={key} {...item}/>
        ))}
      </div>
    );
  };
  export default StockProducts;