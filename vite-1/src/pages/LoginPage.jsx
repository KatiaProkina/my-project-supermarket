import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const LoginPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/basket" />;
  }
  const handleLogin = () => {
    setIsAuth(true);
  };
  return (
    <div>
      Login Page
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default LoginPage;
