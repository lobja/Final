import {Link, Route, Switch} from "react-router-dom";
import { useEffect } from 'react';
import Homepage from "./homepage";
import About from "./about";
import Search from "./search";
import PageNotFound from './Errorpage';
import './App.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"

function App() {

   const counter = useSelector( state => state.weather)
   const weather = useDispatch()

   useEffect ( ()=> {
      Weather();
      async function Weather(){
       const response = await axios.get('http://api.weatherapi.com/v1/current.json',{
          params : {
             q : "Tbilisi",
             key : '8bc84d51cf304f02a98150138210112'
          },
          headers : {
             "accept" : "current.json"
          }
       })
 
       weather({
           type: "weather",
           cel : response.data.current.temp_c,
           hum : response.data.current.humidity
       })
      }
   },[weather])

   
  return (
    <div>
      <div className="main"></div>
        <div className="header">
            
            <Link to="/"><div className='ln1, links'>Homepage</div></Link>
            <Link to="/about"><div className='ln2, links'>About</div></Link>
            <Link to="/search"><div className='ln3, links'>Search</div></Link>
            <div className="weath">
                <div>
                  <div>Temp in Tbilisi {counter.cel}</div>
                  <div>Humidity {counter.hum}</div>
                </div>
            </div>
         </div>

         
       <Switch>
         <Route exact path="/" >
              <div className="output">
                <Homepage/>
              </div>
         </Route>
         <Route exact path="/about">
            <About/>
         </Route>
         <Route exact path="/search">
            <Search/>
         </Route>
         <Route path="*">
              <PageNotFound/>
         </Route>
      </Switch>
    </div>
  );
}

export default App;
