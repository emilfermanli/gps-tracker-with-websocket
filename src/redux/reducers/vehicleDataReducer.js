import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const vehicleDataReducer = (state = initialState.vehicles, action) => {
    switch (action.type) {
        case actionTypes.GET_VEHICLES:
            return action.payload
        case actionTypes.NEW_VEHICLE_DATA:
            return state = state.concat(action.payload);
        default:
            return state;
    }
};

export default vehicleDataReducer;