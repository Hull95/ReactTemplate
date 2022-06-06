import counterReduces from "./counter";
import fetchData from "./fetchGetData";
import {combineReducers} from "redux";
import fetchDataProfile from "./profileDev";
import TodoGetData from "./TodoReducer";
import EnglishWordsReducer from "./englishWordsReducer";
import {Profiles} from "./profiles";

const allReducers = combineReducers({
    counter: counterReduces,
    getDataForm: fetchData,
    getDataFormProfile: fetchDataProfile,
    getDataTodo: TodoGetData,
    getAllWords: EnglishWordsReducer,
    profiles: Profiles
});

export default allReducers;
