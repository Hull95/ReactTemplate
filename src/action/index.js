import axios from "axios";

export const getData = () => {
    return async function (dispatch) {
        try {
            const result = await axios.get("http://localhost:8001/blogs");
            dispatch({
                type: "FETCH_DATA",
                data: result.data,
            });
        } catch (err) {
            if (err) {
                dispatch({
                    type: "ERROR_MESSAGE",
                    payload: err.message,
                });
            }
            console.log(123);
        }
    };
};

export const createNewPostRedux = (data) => {
    return function (dispatch) {
        axios
            .post("http://localhost:8001/blogs", data)
            .then((result) =>
                dispatch({
                    type: "ADD_NEW_POST",
                })
            )
            .catch((err) => console.log(err));
    };
};

export const viewData = (id) => {
    return function (dispatch) {
        axios
            .get(`http://localhost:8000/blogs/${id}`)
            .then((result) =>
                dispatch({
                    type: "PREVIEW_POST",
                    payload: result.data,
                })
            )
            .catch((err) => console.log(err));
    };
};

export const viewDataClear = () => {
    return {
        type: "PREVIEW_DATA_CLEAR",
    };
};

export const editOldPostData = (data, id) => {
    return function (dispatch) {
        axios
            .put(`http://localhost:8000/blogs/${id}/`, data)
            .then((result) =>
                dispatch({
                    type: "EDIT_POST",
                    payload: result.data,
                })
            )
            .catch((err) => console.log(err));
    };
};

export const deleteOldPostData = (id) => {
    return function (dispatch) {
        axios
            .delete(`http://localhost:8000/blogs/${id}/`)
            .then((result) =>
                dispatch({
                    type: "DELETE_POST",
                })
            )
            .catch((err) => console.log(err));
    };
};
