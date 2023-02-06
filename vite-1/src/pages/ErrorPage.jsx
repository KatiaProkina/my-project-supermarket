import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>404</h1>
      <button onClick={navigateToMainPage}>Go to main page</button>
    </div>
  );
};
export default ErrorPage;
