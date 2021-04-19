import counterReduces from "./counter";
import logReducer from "./isLogged";
import fetchData from "./fetchGetData";
import { combineReducers } from "redux";
import fetchDataProfile from "./profileDev";

const allReducers = combineReducers({
  counter: counterReduces,
  isLogged: logReducer,
  getDataForm: fetchData,
  getDataFormProfile: fetchDataProfile,
});

export default allReducers;
