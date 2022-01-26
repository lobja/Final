const weatherReducer = (state = 0, action) => {

        return (
            {
                cel : action.cel,
                hum : action.hum,
            }
        )
     }
     
 export default weatherReducer;

