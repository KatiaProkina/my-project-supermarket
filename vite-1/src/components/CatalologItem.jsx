import { useNavigate } from "react-router-dom";
import "../style/CatalogStyle.css";

const CatalogItem = ({ name, image }) => {
  const navigate = useNavigate();
  const handleGoToElement = () => {
    navigate(`/catalog/${name}`);
  };
  return (
    <div className="parent-item">
      <div className="item-name" onClick={handleGoToElement}>
        {name}
      </div>
      <div className="item" onClick={handleGoToElement}>
        <img src={image} alt="Logo" />
      </div>
    </div>
  );
};
export default CatalogItem;
