import React from 'react'

function ReturnFrame({setTrailer}) {
    return (
        <div>
            <div className="createTrailer">
               
                <button onClick={()=> setTrailer('')}>close</button>
            </div>
        </div>
    )
}

export default ReturnFrame;
