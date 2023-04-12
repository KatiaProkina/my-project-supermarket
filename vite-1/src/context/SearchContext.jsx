import React from "react";
import { useState, useContext} from "react";
import { MainPage } from "../pages";

// const Test = ()=>{
//   const obj = useContext(SearchContext)
//   console.log(obj)
//   return null
// }

export const SearchContext = React.createContext(null);

export const SearchContextProvider = ({children}) => {
  const [value, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
};
