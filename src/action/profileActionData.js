import axios from "axios";

export const getDataProfile = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/blogs").then((res) =>
            dispatch({
                type: "GET_ALL_DATA",
                data: res.data,
            })
        );
    };
};

export const deleteOldPostData = (id) => {
    return function (dispatch) {
        axios
            .delete(`http://localhost:8000/blogs/${id}/`)
            .then((result) =>
                dispatch({
                    type: "DELETE_POSITION",
                })
            )
            .catch((err) => console.log(err));
    };
};
