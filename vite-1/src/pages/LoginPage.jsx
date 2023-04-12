import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import user from "../../newJsonUsers.json";
import { useState } from "react";
import '../style/LoginPageStyle.css'

const LoginPage = () => {
  const { newUser, setNewUser } = useContext(AuthContext);
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const handleLogin = () => {
    const newUser = user.find((item) => item.email === valueEmail);
    if (!newUser) return;
    if (newUser.password !== valuePassword) return;
    setNewUser(newUser);
  };

  if (newUser) {
    return <Navigate to="/basket" />;
  }
  return (
    <div className="login-page-container">
      <div className="login-container">
        <form className="form-enter" action="">
          <input
            className="input-enter"
            type="text"
            name="login"
            placeholder="Email"
            value={valueEmail}
            onChange={(e) => setValueEmail(e.target.value)}
          />
          <input
            className="input-enter"
            type="text"
            name="password"
            placeholder="Пароль"
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <button className="button-enter" onClick={handleLogin}>
            ВОЙТИ
          </button>
 
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
