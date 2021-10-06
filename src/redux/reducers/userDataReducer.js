import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const userDataReducer = (state = initialState.userData, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return action.payload;
        default:
            return state;
    }
};

export default userDataReducer;