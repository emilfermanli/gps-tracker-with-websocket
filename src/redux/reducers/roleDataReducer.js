import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const roleDataReducer = (state = initialState.role, action) => {
    switch (action.type) {
        case actionTypes.GET_ROLE:
            return action.payload
        case actionTypes.NEW_ROLE_DATA:
            return state = state.concat(action.payload);
        default:
            return state;
    }
};

export default roleDataReducer;