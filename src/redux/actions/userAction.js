import data from "../../api/data";
import * as actionTypes from "./actionTypes";

export const allModels = (models) => {
  return {
    type: actionTypes.GET_MODELS,
    payload: models,
  };
};

export function getModels() {
  return function (dispatch) {
    return data.get("/models").then((res) => console.log(res.data));
  };
}

export const allAdds = (adds) => {
  return {
    type: actionTypes.GET_ADDS,
    payload: adds,
  };
};

export function getAdds() {
  return function (dispatch) {
    return data.get("/adds").then((res) => console.log(res.data));
  };
}

export const allDevices = (devices) => {
  return {
    type: actionTypes.GET_DEVICES,
    payload: devices,
  };
};

export function getDevices() {
  return function (dispatch) {
    return data.get("/devices").then((res) => console.log(res.data));
  };
}

export const allDrivers = (drivers) => {
  return {
    type: actionTypes.GET_DRIVERS,
    payload: drivers,
  };
};

export function getDrivers() {
  return function (dispatch) {
    return data.get("/drivers").then((res) => dispatch(allDrivers(res.data.data)));
  };
}

export function getNewDriver(driver){
    return{
        type: actionTypes.GET_NEW_DRIVER,
        payload: driver
    }
}

export const allVehicles = (vehicles) => {
  return {
    type: actionTypes.GET_VEHICLES,
    payload: vehicles,
  };
};

export function getVehicles() {
  return function (dispatch) {
    return data
      .get("/vehicles")
      .then((res) => dispatch(allVehicles(res.data.data)));
  };
}

export const allGroups = (groups) => {
  return {
    type: actionTypes.GET_GROUPS,
    payload: groups,
  };
};

export function getGroups() {
  return function (dispatch) {
    return data
      .get("/groups")
      .then((res) => dispatch(allGroups(res.data.data)));
  };
}

export const allEvents = (events) => {
  return {
    type: actionTypes.GET_EVENTS,
    payload: events,
  };
};

export function getEvents() {
  return function (dispatch) {
    return data.get("/events").then((res) => console.log(res.data));
  };
}

export const allAnswer = (answer) => {
  return {
    type: actionTypes.GET_SUPPORT_ANSWER,
    payload: answer,
  };
};

export function getAnswer() {
  return function (dispatch) {
    return data.get("/support").then((res) => console.log(res.data));
  };
}

export const allRole = (role) => {
  return {
    type: actionTypes.GET_ROLE,
    payload: role,
  };
};

export const getNewRole = (role) => {
  return {
    type: actionTypes.NEW_ROLE_DATA,
    payload: role,
  };
};

export function getRole() {
  return function (dispatch) {
    return data.get("/role").then((res) => dispatch(allRole(res.data.data)));
  };
}

export const allSubaccount = (subaccount) => {
  return {
    type: actionTypes.GET_SUBACCOUNT,
    payload: subaccount,
  };
};

export function getSubaccount() {
  return function (dispatch) {
    return data
      .get("/users")
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error(error);
      });
  };
}

export const userInfo = (info) => {
  return {
    type: actionTypes.GET_USER,
    payload: info,
  };
};

export function getUserInfo() {
  return function (dispatch) {
    return data
      .get("/user/info")
      .then((res) => dispatch(userInfo(res.data.data)));
  };
}

export const getRealCar = (vehicles) => {
  return {
    type: actionTypes.GET_REAL_DATA,
    payload: vehicles,
  };
};

export const addMap = (carlist) => {
  return {
    type: actionTypes.ADD_MAP,
    payload: carlist,
  };
};

export const deleteMap = (carlist) => {
  return {
    type: actionTypes.DELETE_MAP,
    payload: carlist,
  };
};

export const realLatLonData = (latlon) => {
  return {
    type: actionTypes.REAL_LATLON_DATA,
    payload: latlon,
  };
};

export const changeRealLatLonData = (changelatlon) => {
  return {
    type: actionTypes.CHANGE_REAL_LATLON_DATA,
    payload: changelatlon,
  };
};

export const staticStartPoint = (startLatLon) => {
  return {
    type: actionTypes.CAR_START_POINT,
    payload: startLatLon,
  };
};

export const newDepartmentData = (data) => {
  return {
    type: actionTypes.NEW_DEPARTMENT_DATA,
    payload: data,
  };
};

export const newVehicleData = (vehicle) => {
  return {
    type: actionTypes.NEW_VEHICLE_DATA,
    payload: vehicle,
  };
};
