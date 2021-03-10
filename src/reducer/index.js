import counterReduces from "./counter";
import logReducer from "./isLogged";
import fetchData from "./fetchGetData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReduces,
  isLogged: logReducer,
  getDataForm: fetchData,
});

export default allReducers;
