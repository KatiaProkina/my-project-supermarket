import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const ElementPage = () =>{
    const params = useParams();
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate(-1)
    }

    return(
        <div>
            <div>
            <Header/>
            </div>
            <div>
            Главная > Каталог > Молоко, сыр, яйцо
            <div>
                <h1>Молоко, сыр, яйцо</h1>
                <div>
                    
                </div>
            </div>
             <div>{params.id}</div>
             <button onClick={handleBack}>Back</button>
            </div>
            
        </div>
          
    )
    
}
export default ElementPage;