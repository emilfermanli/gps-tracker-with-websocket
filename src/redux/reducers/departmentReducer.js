import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const departmentReducer = (state = initialState.groupData, action) => {
    switch (action.type) {
        case actionTypes.GET_GROUPS:
            return action.payload
        case actionTypes.NEW_DEPARTMENT_DATA:
            return state = state.concat(action.payload);
        default:
            return state;
    }
};

export default departmentReducer;