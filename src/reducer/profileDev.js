const initState = {
  data: [],
};

const fetchDataProfile = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default fetchDataProfile;
