const initialState = {
    data: [],
    itemDetail: []
}

export const Profiles = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PROFILES":
            return {
                ...state,
                data: action.payload
            }
        case "PREVIEW_PROFILE":
            return {
                ...state,
                itemDetail: action.payload
            }
        case "REMOVE_ITEM_DETAILS":
            return {
                ...state,
                itemDetail: []
            }
        default:
            return state
    }
}