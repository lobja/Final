
import React from 'react';



function Movieframes({ m }) {

    return (
        <div className='ChildTrailersMainFrame'>
            <div className="ParentMovieFrames">
                <div className="MovieFrames">
                    <a href={m.imdbUrl} target="_blank" rel="noopener noreferrer">
                        <div className="cover" style={{ backgroundImage: `url(${m.covers.data[367]})` }}></div>
                        <div className="title">{m.secondaryName} </div>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Movieframes;
