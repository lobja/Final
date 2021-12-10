import { useState } from 'react';
import { Redirect } from 'react-router';
function PageNotFound() {

   
    const [ error , setError ] = useState('true')
   
    setTimeout(()=>{
       setError(false)
    }, 2000)
 
    
    return (<div className="MainError">{error ? <div className="error">PAGE NOT FOUND, REDIRECTING...</div> : <Redirect to="/"/> }</div>)
        
    
}

export default PageNotFound;
