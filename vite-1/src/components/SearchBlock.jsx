import "../style/HeaderStyle.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const SearchBlock = () => {
  const {setValue}  = useContext(SearchContext)
  // console.log(obj)

  return (
    <input
      className="seacrh-input"
      placeholder="Найти товар"
      onChange={(e) => setValue  (e.target.value)}
    />
  );
};
export default SearchBlock;
