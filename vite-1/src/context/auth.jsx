import React from "react";
import { useState } from "react";
export const AuthContext = React.createContext(false);

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
