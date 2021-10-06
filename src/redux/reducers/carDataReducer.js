import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const carDataReducer = (state = initialState.carData, action) => {
    switch (action.type) {
        case actionTypes.GET_REAL_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default carDataReducer;