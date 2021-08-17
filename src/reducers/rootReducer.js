import * as actionTypes from "../actions/actions"

const initialState = {
    currentTime: "",
    quote: "",
    message:"",
    location:[],
    isModalOpen: false
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_CURRENT_TIME:
            return{
                ...state,
                currentTime:action.payload.currentTime
            }
        default: return state;
    }
}

export default rootReducer