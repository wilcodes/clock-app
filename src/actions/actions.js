import * as actionTypes from "./types"

export const setCurrentTime = time => {
    return{
        type:actionTypes.SET_CURRENT_TIME,
        payload:{
            currentTime: time
        }

    }
}