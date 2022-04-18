import React, {  useState } from 'react';
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


function Search() {
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    const submitHandle = (e)=>{
        e.preventDefault();
        navigate("/searched/" + search)
    }
    return (
        <form onSubmit={submitHandle}>
        <div className='search-bar'>
            <FaSearch/>
            <input  onChange={e => setSearch(e.target.value)}
             type="text" value={search}/>
        </div>
        </form>
    );
}

export default Search