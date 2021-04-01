import axios from "axios";

export const getData = () => {
  return (dispatch) => {
    axios.get("http://localhost:8000/blogs").then((res) =>
      dispatch({
        type: "FETCH_DATA",
        data: res.data,
      })
    );
  };
};

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const fetchGetData = () => {
  return {
    type: "FETCH_DATA",
  };
};

export const createNewPostRedux = (data) => {
  return function (dispatch) {
    axios
      .post("http://localhost:8000/blogs", data)
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
