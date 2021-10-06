import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const driverDataReducer = (state = initialState.drivers, action) => {
    switch (action.type) {
        case actionTypes.GET_DRIVERS:
            return action.payload
        case actionTypes.GET_NEW_DRIVER:
            return state = state.concat(action.payload);
        default:
            return state;
    }
};

export default driverDataReducer;