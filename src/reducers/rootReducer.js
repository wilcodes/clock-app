import * as actionTypes from "../actions/types"
import { combineReducers } from "redux";
const initialState = {
    currentTime: null,
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

const reducer = combineReducers({
    state:rootReducer
})
export default reducer;