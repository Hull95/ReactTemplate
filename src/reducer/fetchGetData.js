const initState = {
  data: [],
  edit_redirect: false,
  previewPost: {},
  delete_redirect: false,
};

const fetchData = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data,
        edit_redirect: false,
      };
    case "ADD_NEW_POST":
      return {
        ...state,
        data: [],
      };
    case "PREVIEW_POST":
      return {
        ...state,
        previewPost: action.payload,
      };
    case "PREVIEW_DATA_CLEAR":
      return {
        ...state,
        delete_redirect: false,
        edit_redirect: false,
        previewPost: {},
      };
    case "EDIT_POST":
      return {
        ...state,
        edit_data: action.payload,
        edit_redirect: true,
      };
    case "DELETE_POST":
      return {
        ...state,
        delete_redirect: true,
      };
    default:
      return state;
  }
};

export default fetchData;
