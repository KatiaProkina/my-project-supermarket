import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

const ProtectedRoutes = () => {
  const { newUser } = useContext(AuthContext);
  if (!newUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
export default ProtectedRoutes;
