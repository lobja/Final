import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieResult from './MovieSearchResult/movieresult';

function Search() {

    const [name, setName] = useState('')
    const [searchMovie, setSearchMovie] = useState([])
    const [visible, setVisible] = useState('')
    const [error, setError] = useState('')


    function remove() {
        setName('');

    }
    useEffect(() => {
        
        try {
            searchFun();
            async function searchFun() {
                if (name.length >= 3) {
                    const response = await axios.get(`https://movie.ge/Api/WebService/search/${name}`, {
                        params: {
                            value: name,
                        },
                    })

                    setSearchMovie(()=> response.data.pagination.data)
                    console.log(searchMovie)
                    setVisible('visible')
                }
            }
        }
        catch (e) {
            setError(e.message)
        }


        if (name.length === 0) {
            return (
                setSearchMovie([]),
                setVisible('hidden')
            )
        }
    }, [name])


return (
    <div className="window">
        {error}
        <div className="MainSearch">
            <div className="search">
                <input placeholder="Movie name" onChange={(e) => setName(e.target.value)}></input>
                <i className="fal fa-times fa-2x" style={{ visibility: visible }} onClick={remove}></i>

            </div>
            {searchMovie.length===0 ?  null :  searchMovie.map((x, index) => <MovieResult key={index} x={x} />)}
        </div>
    </div>
)
}

export default Search;
