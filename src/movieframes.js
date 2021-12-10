
//import React from 'react';



function Movieframes(props) {
//     const [ trailer , setTrailer] = useState('');
//     const [ showtr , setShowtr ] = useState([])
//     function showMovie(){
//          const response = await axios.get(`https://api.imovies.cc/api/v1/movies/${props.m.adjaraId}`,{
           
//              headers : {
//                  'accept' : 'application/json'
//              }
//          })

//         console.log(props.m.trailers.data[0].fileUrl)


//         setTrailer(() => {return <div className="createTrailer">
//                                      <iframe src={props.m.trailers.data[0].fileUrl}></iframe>                          
//                                     </div>})
        
//     }
    // console.log(props.m.trailers.data[0].fileUrl)



    // const [ url , setURL ] = useState('')
    // function showMovie(){
    //      setURL(props.m.imdbUrl)
    // }


    return (
         <div className="ParentMovieFrames">
            <div className="MovieFrames">
                <a href={props.m.imdbUrl} target="_blank" rel="noopener noreferrer">
                   <div className="cover" style={{backgroundImage : `url(${props.m.covers.data[367]})`}}></div>
                   <div className="title">{props.m.secondaryName}</div>
                </a>
            </div>    
         </div>  
    )
}

export default Movieframes;
