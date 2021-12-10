const weatherReducer = (state = 0, action) => {

      switch(action.type) {
             case "weather":
                 return (<div>
                          <div>Temp in Tbilisi {action.cel}</div>
                          <div>Humidity {action.hum}</div>
                          </div>
                          )
             default:
                 return state
         }   
     }
     
 export default weatherReducer;

