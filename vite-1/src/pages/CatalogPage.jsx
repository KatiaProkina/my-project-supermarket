import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import CatalogItems from "../components/Catalogitems";
import Header from "../components/Header";
import SearchBlock from "../components/SearchBlock";
import { getCatalogItems } from "../store/catalogSlice";
import '../style/CatalogStyle.css'


const CatalogPage = () =>{
    const [searchText,setSearchText] = useState('')
    const dispatch = useDispatch()
    const catalogItems = useSelector(state=>state.catalog.catalog)
    const catalogLoading = useSelector(state=>state.catalog.loading)


    useEffect(()=>{

        dispatch(getCatalogItems());

    },[])

    const filterCatalogItems  = catalogItems.filter(({name})=> name.includes(searchText))

    return(
        <div >
            <Header/>
            <div className="main-page">
            <div className="catalog-page">
            Главная > Каталог
            <div>
                <SearchBlock value={searchText} setValue={setSearchText}/>
            </div>
            <h1>Каталог</h1>
            <div>
            {catalogLoading === 'pending' ? <div>Loading...</div>:<CatalogItems items={filterCatalogItems}/>}
            </div>
            </div>
            </div>
        </div>
    )
    
}
export default CatalogPage;