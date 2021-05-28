import counterReduces from "./counter";
import fetchData from "./fetchGetData";
import { combineReducers } from "redux";
import fetchDataProfile from "./profileDev";

const allReducers = combineReducers({
  counter: counterReduces,
  getDataForm: fetchData,
  getDataFormProfile: fetchDataProfile,
});

export default allReducers;
