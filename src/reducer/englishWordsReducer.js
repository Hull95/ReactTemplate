const initState = {
    data: [],
    delete_redirect: false
};

const EnglishWordsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_ALL_WORDS":
            return {
                ...state,
                data: action.payload,
            }
        case "CREATE_NEW_WORD":
            return {
                ...state,
                data: [],
            }
        case "DELETE_WORD":
            return {
                ...state,
                delete_redirect: true
            }
        default:
            return state;
    }
};

export default EnglishWordsReducer;