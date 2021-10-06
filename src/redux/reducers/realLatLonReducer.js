import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const realLatLonReducer = (state = initialState.realCarList, action) => {
    switch (action.type) {
        case actionTypes.REAL_LATLON_DATA:
            return action.payload
        case actionTypes.CHANGE_REAL_LATLON_DATA:
            return action.payload === undefined ? null : action.payload
        default:
            return state;
    }
};

export default realLatLonReducer;


        // case actionTypes.ADD_MAP:
        //     return  (state = state.concat(action.payload));
        // case actionTypes.DELETE_MAP:
        //     return (state = state.filter(c => c.cid !== action.payload));