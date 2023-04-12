import "../style/ProductsStyle.css";
import AdditionalProduct from "./AdditionalProduct";

const AdditionalProducts =  ({ items = [] }) => {
    return (
      <div className="productsItems">
        {items.map(({ key, ...item }) => (
           <AdditionalProduct key={key} {...item}/>
        ))}
      </div>
    );
  };
  export default AdditionalProducts;