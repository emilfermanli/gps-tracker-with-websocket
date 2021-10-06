import * as actionTypes from "../actions/actionTypes";
import   initialState from "./initialState"

const carStartPoint = (state = initialState.startPoint, action) => {
    switch (action.type) {
        case actionTypes.CAR_START_POINT:
            return action.payload;
        default:
            return state;
    }
};

export default carStartPoint;