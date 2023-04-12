import "../style/ElementPageStyle.css"
const SimilarProduct = ({ price, image }) => {
  return (
    <div className="similarProduct">
      <div className="similarProductImage">
      <img src={image} alt="Logo" />
      </div>
      <div className="similarProductPrice">
        {price}
      </div>
    </div>
  );
};
export default SimilarProduct;
