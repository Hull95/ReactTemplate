const initialState = {
  data: [],
  edit_redirect: false,
  previewPost: {},
  delete_redirect: false,
};

const TodoGetData = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO_DATA":
      return {
        ...state,
        data: action.data,
        edit_redirect: false,
      };
    case "CREATE_TODO_ACTION":
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
    case "EDIT_TODO_DATA":
      return {
        ...state,
        edit_data: action.payload,
        edit_redirect: true,
      };
    case "DELETE_TODO_DATA":
      return {
        ...state,
        delete_redirect: true,
      };
    default:
      return state;
  }
};

export default TodoGetData;
