import React, {useEffect} from 'react';
import Sidebar from './components/Sidebar';
import { connect, useSelector, useDispatch,   } from "react-redux";

import { 
  getModels, 
  getAdds, 
  getAnswer, 
  getDevices, 
  getVehicles, 
  getSubaccount,
  getRole, 
  getGroups,
  getEvents,
  getDrivers,
  getUserInfo
} from "./redux/actions/userAction";
import {getRealCar,realLatLonData,changeRealLatLonData} from "./redux/actions/userAction";
import { socket } from "./websocket/socket";
// import LoadingGif from "./assets/img/loading.gif"



const App = (
  {getModels, 
    getAdds, 
    getAnswer, 
    getDevices, 
    getVehicles, 
    getSubaccount,
    getRole, 
    getGroups, 
    getEvents,
    getDrivers, 
    getUserInfo}) => {

    const dispatch = useDispatch()
    const select = useSelector(state => state.carDataReducer)
    

    const latlon = useSelector(state => state.realLatLonReducer)
    console.log(latlon)

    useEffect(() => {

      setTimeout(() => {
        getModels()
        getAdds()
        getAnswer() 
        getDevices() 
        getVehicles() 
        getSubaccount() 
        getRole()
        getGroups()
        getEvents()
        getDrivers()
        getUserInfo()
      }, 1000);
      
    }, [getModels,   getAdds, getAnswer, getDevices, getVehicles, getSubaccount ,getRole, getGroups, getEvents,getDrivers, getUserInfo,])

  useEffect(() => {
      socket.onopen = () => {
        console.log("connected");
      };
      socket.onerror = (error) => {
        console.log(error);
      };

      socket.onmessage = (event) => {
        const firstData = JSON.parse(event.data);
        const secondaryData = JSON.parse(firstData.data);
        // if (!secondaryData.lat && !secondaryData.lon) {
        //   // setDevice(secondaryData);
        //   return null
        // }


        if (Array.isArray(secondaryData) === true) {
           dispatch(getRealCar(secondaryData))
           dispatch(realLatLonData(secondaryData))
            
        }
        if (
          secondaryData !== undefined &&
          secondaryData !== null &&
          Array.isArray(secondaryData) === false &&
          secondaryData.lat !== undefined &&
          secondaryData.lon !== undefined
        ) {
              Object.keys(latlon).forEach(key  => {
                if (latlon[key].cid === secondaryData.cid) {
                      latlon[key].lat = secondaryData.lat
                      latlon[key].lon = secondaryData.lon
                      dispatch(changeRealLatLonData(latlon))
                }
              });
             
              
        } 
      };

      // return () => {
      //   socket.onclose = () => {
      //     console.log("disconnected");
      //   };
      // };

  }, [select, latlon,dispatch])

  


  return (
    <div className="App">
      {/* {
        select === null ?
        <div className="d-flex align-items-center justify-content-center" style={{width: "100%", height: "100vh"}}>
          <img width="150px" height="150px" src={LoadingGif} alt="loading gif" />
        </div> 
        :   */}
        <Sidebar latlon={latlon} /> 
      {/* }   */}
    </div>
  );
}

const mapDispatchToProps = {
  getModels,
  getAdds,
  getAnswer, 
  getDevices, 
  getVehicles, 
  getSubaccount,
  getRole, 
  getGroups, 
  getEvents, 
  getDrivers,
  getUserInfo
}

export default connect(null, mapDispatchToProps)(App)
