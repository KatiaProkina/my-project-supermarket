import React from "react";
import { useState } from "react";
export const AuthContext = React.createContext(false);

export const AuthContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);
  return (
    <AuthContext.Provider value={{ newUser, setNewUser }}>
      { children }
    </AuthContext.Provider>
  );
};
