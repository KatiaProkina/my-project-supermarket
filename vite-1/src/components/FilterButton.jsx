import "../style/CatalogProductsStyle.css";
const FilterButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn-filter">
      {children}
    </button>
  );
};
export default FilterButton;
