const SearchBlock = ({value,setValue}) =>{
    return <input value={value} onChange={ e=> setValue(e.target.value)}/>

}
export default SearchBlock;