import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import Movieframes from './movieframes';

const Homepage = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        callTrailer()
        async function callTrailer() { 
         try{   const response = await axios.get("https://api.imovies.cc/api/v1/trailers/trailer-day", {
                params: {
                    page: 1,
                    per_page: 20,
                },
                headers: {
                    'accept': 'application/json'
                }
            })
            setMovies(response.data.data)
        }catch(e){
            setError(e.message)
        }
        }
    }, [])
  

    return (
        <div className="TrailersMainFrame">
            {error}
            {movies.map((m, index) => <Movieframes key={index} m={m}/>)}
            
        </div>

    )
}

export default Homepage;
