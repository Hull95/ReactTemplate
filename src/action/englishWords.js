import axios from "axios";
import {useSelector} from "react-redux";
import api from "../api/apiText";


export const GetAllWord = () => {
    return async function (dispatch) {
        try {
            const result = await api.get("http://localhost:8000/engWord");
            dispatch({
                type: "GET_ALL_WORDS",
                payload: result.data,
            });
        } catch (err) {
            console.log(err)
        }
    };
};

export const CreateNewWord = (data) => {
    return async function (dispatch) {
        try {
            // const allWords = await api.get("http://localhost:8000/engWord");
            //
            // console.log(allWords)
            // const mappingWord = allWords.data.map((item, key) => {
            //     return item;
            // })

            await api.post("http://localhost:8000/engWord", data);
            dispatch({
                type: "CREATE_NEW_WORD"
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const DeleteWordFromArray = (id) => {
    console.log(id)
    return async function (dispatch) {
        try {
            await api.delete(`http://localhost:8000/engWord/${id}`)
            dispatch({
                type: "DELETE_WORD"
            })
        } catch (err) {
            console.log(err)
        }
    };
};


// export const CreateNewWord = (data) => {
//     return (dispatch) => {
//         axios
//             .post("http://localhost:8000/engWord", data)
//             .then((res) =>
//                 dispatch({
//                     type: "CREATE_NEW_WORD",
//                 })
//             )
//             .catch((err) => console.log(err));
//     };
// };


