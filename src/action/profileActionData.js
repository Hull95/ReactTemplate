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
