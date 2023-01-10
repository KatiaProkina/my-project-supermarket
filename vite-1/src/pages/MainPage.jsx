import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";


const MainPage = () =>{
    const navigate = useNavigate()
    const handleStart = ()=>{
        navigate('/login')
    }
    return(
        <div>
            <Header/>
            <div className="main-container">
              <div className="main-navigation">
              <Link>
              Главная
              </Link>
              <button onClick={handleStart}>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141"/>
              </svg>
              </button>
              <Link>
                Каталог
              </Link>
              </div>
              <div className="main-content">
              </div>
             <button onClick={handleStart}>Use</button>
             </div>
        </div>
       
    )
    
}
export default MainPage;