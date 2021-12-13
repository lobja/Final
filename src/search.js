import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import MovieResult from './MovieSearchResult/movieresult';
function Search() {

    const [ name , setName ] = useState('')
    const [ searchMovie , setSearchMovie ] = useState([])
    const [ visible , setVisible ] = useState('')


    function remove(){
       setName('');
         
    }
    useEffect(  ()=>{
      searchFun();
      async function searchFun(){
       if (name.length >= 2){
        const response = await axios.get(`https://movie.ge/Api/WebService/search/${name}`,{
            params : {
               value : name,
            },      
        })
        setSearchMovie(response.data.pagination.data)
        setVisible('visible')
      }
      if(name.length===0){
        return (
                setSearchMovie([]),
                setVisible('hidden')
                )
      }
    }
    }, [name])


    return (
        <div className="window">
            <div className="MainSearch">
                <div className="search">
                   <input placeholder="Movie name" onChange={(e)=> setName(e.target.value)}></input>
                   <i class="fal fa-times fa-2x" style={{visibility : visible}} onClick={remove}></i>
                   
                </div>    
                {searchMovie.map( x => <MovieResult x={x}/>)}
            </div>
        </div>
    )
}

export default Search;
