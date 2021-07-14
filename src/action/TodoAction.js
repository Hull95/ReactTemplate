import axios from "axios";

export const TodoAction = () => {
  return (dispatch) => {
    axios.get("http://localhost:8000/blogs").then((res) => {
      dispatch({
        type: "FETCH_TODO_DATA",
        data: res.data,
      });
    });
  };
};

export const CreateTodoAction = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/blogs", data)
      .then((res) =>
        dispatch({
          type: "CREATE_TODO_ACTION",
        })
      )
      .catch((err) => console.log(err));
  };
};

export const TodoActionEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8000/blogs/${id}/`, data)
      .then((res) => {
        dispatch({
          type: "EDIT_TODO_DATA",
          data: res.data,
        });
      })
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

export const deleteOldPostData = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8000/blogs/${id}/`)
      .then((result) =>
        dispatch({
          type: "DELETE_TODO_DATA",
        })
      )
      .catch((err) => console.log(err));
  };
};
