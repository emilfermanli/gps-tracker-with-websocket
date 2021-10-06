import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer"
import carDataReducer from "./carDataReducer"
import realLatLonReducer from "./realLatLonReducer"
import carStartPoint from "./carStartPoint"
import departmentReducer from "./departmentReducer"
import vehicleDataReducer from "./vehicleDataReducer"
import driverDataReducer from "./driverDataReducer"
import roleDataReducer from "./roleDataReducer"

const reducers = combineReducers({
    userDataReducer,
    carDataReducer,
    realLatLonReducer,
    carStartPoint,
    departmentReducer,
    vehicleDataReducer,
    driverDataReducer,
    roleDataReducer
});

export default reducers;