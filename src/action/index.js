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
