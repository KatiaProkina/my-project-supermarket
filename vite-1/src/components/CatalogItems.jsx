import CatalogItem from "./CatalologItem";
import "../style/CatalogStyle.css";

const CatalogItems = ({ items = [] }) => {
  return (
    <div className="catalog_items">
      {items.map(({ key, ...item }) => (
        <CatalogItem key={key} {...item} />
      ))}
    </div>
  );
};
export default CatalogItems;
