import weatherReducer from "./weaterApp";
import { combineReducers } from "redux";

const allReducers = combineReducers({
     weather : weatherReducer
})

export default allReducers