import { useParams } from "react-router-dom";
import Header from "../components/Header";

const ElementPage = () => {
  const params = useParams()
  return (
    <div>
      <div>
        <Header />
        <h1>Element</h1>
        <div>{params.id}</div>
      </div>
    </div>
  );
};
export default ElementPage;
