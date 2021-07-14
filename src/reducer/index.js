import counterReduces from "./counter";
import fetchData from "./fetchGetData";
import { combineReducers } from "redux";
import fetchDataProfile from "./profileDev";
import TodoGetData from "./TodoReducer";

const allReducers = combineReducers({
  counter: counterReduces,
  getDataForm: fetchData,
  getDataFormProfile: fetchDataProfile,
  getDataTodo: TodoGetData,
});

export default allReducers;
