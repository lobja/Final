import React from 'react'

function MovieResult(props) {
   
    return (
        <div className="MainFrameResult"> 
           <div className="ParentResult">
              <div className="Result">
                <div className="poster" style={{backgroundImage : `url(${props.x.backdrop})`}}></div>
                
                <div className="origin_name">{props.x.original_title}</div>
                <div className="name">{props.x.name}</div>

                {/* <h1>HELLO WORLD</h1> */}
              </div>
           </div>
        </div>
    )
}

export default MovieResult;
