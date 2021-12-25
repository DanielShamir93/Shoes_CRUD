import getDataReducer from "./getDataReducer.js";
import dataFilterReducer from "./dataFilterReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getData: getDataReducer,
    dataFilter: dataFilterReducer
})

export default rootReducer;