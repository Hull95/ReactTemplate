import api from "../api/apiText";

export const getAllProfiles = () => {
    return async function (dispatch) {
        try {
            const result = await api.get("http://localhost:8000/profile");
            dispatch({
                type: "GET_ALL_PROFILES",
                payload: result.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const previewProfileData = (data) => {
    return function (dispatch) {
        dispatch({
            type: "PREVIEW_PROFILE",
            payload: data
        })
    }
}

export const removeProfileData = () => {
    return function (dispatch) {
        dispatch({
            type: "REMOVE_ITEM_DETAILS",
        })
    }
}