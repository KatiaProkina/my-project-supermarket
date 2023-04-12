import React from "react";
import { useState } from "react";
import { CatalogPage } from "../pages";

export const FilterContext = React.createContext(null);

export const FilterContextProvider = ({children}) => {
  const [value_1, setValue_1] = useState(20);

  const [value_2, setValue_2] = useState(37);

  const [value_3,setValue_3] = useState([])

  return (
    <FilterContext.Provider
      value={{ value_1, setValue_1,value_2, setValue_2,value_3,setValue_3 }}
     
    >
      {children}
    </FilterContext.Provider>
  );
};
