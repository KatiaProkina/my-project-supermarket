import "../style/HeaderStyle.css";
const SearchBlock = ({ value, setValue }) => {
  return (
    <input
      className="seacrh-input"
      placeholder="Найти товар"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default SearchBlock;
