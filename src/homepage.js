import React from 'react'
import axios from "axios";
import {useState, useEffect} from "react";
import Movieframes from './movieframes';
const Homepage = () => {

    const [ movies, setMovies] = useState([]);

    useEffect( () => {
        callTrailer()
        async function callTrailer(){
         const response = await axios.get("https://api.imovies.cc/api/v1/trailers/trailer-day",{
            params : {
                page : 1,
                per_page : 20,
            },
            headers : {
                'accept' : 'application/json'
            }
        })
        setMovies(response.data.data)
    }
    },[])

    return (
        <div >
             {movies.map(m => <Movieframes m={m}/>)}
        </div>
    )
}

export default Homepage;
