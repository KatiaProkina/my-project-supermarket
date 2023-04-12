import BasketProductItem from "./BasketProductItem";

const BasketProducts =  ({ items = [] }) => {
    return (
      <div className="productsItems">
        {items.map(({ key, ...item }) => (
            <BasketProductItem key={key} {...item}/>
        ))}
      </div>
    );
  };
  export default BasketProducts;