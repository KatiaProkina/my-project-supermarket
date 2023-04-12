import SimilarProduct from "./SimilarProduct";
import "../style/ElementPageStyle.css"
const SimilarProducts = ({ items = [] }) => {
  return (
    <div className="similarProductsItem">
      {items.map(({ key, ...item }) => (
        <SimilarProduct key={key} {...item}/>
      ))}
    </div>
  );
};
export default SimilarProducts;
