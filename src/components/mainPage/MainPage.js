import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { Map, TileLayer, Popup, Polyline, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/img/marker.webp";
import { FormGroup, Input, Col, ButtonDropdown, DropdownToggle, DropdownMenu, UncontrolledDropdown,
         DropdownItem, Button, Modal, ModalFooter, ModalBody,ModalHeader  } from "reactstrap";
import ApexChart from "./SpeedChart";
import DataLog from "./DataLog";
import {useSelector} from "react-redux"
import { DriftMarker } from "leaflet-drift-marker";
import DatePicker from "react-datepicker"
import { useForm, Controller } from "react-hook-form";
import Postdata from "../../api/data"

function MainPage({ carbox }) {
  const latlon = useSelector(state => state.realLatLonReducer)
  const [zoom, setZoom] = useState(13);
  const [polyDis, setPolyDis] = useState(true);
  const [modal, setModal] = useState(false);

  const { register, handleSubmit, errors,control } = useForm();

  const [polState, setPolState] = useState({
    positions: []
  })
  const [currentCarStatus,setCurrentCarStatus] = useState(null)
  const [carInfo, setCarInfo] = useState(false);

  const [center,setCenter] = useState({
    lat: "40.409744",
    lon: "49.943984"
  })
  var x = latlon.filter(index => index.cid === currentCarStatus)
 

 const addPosition = (e) => {
    const newPos = [e.latlng.lat, e.latlng.lng];
    setPolState(prevState => (
      {
        positions: prevState.positions.concat([newPos])
      }
    ));
  }

  const [poligonLocation, setPoligonLocation] = useState(false)

  const polygonLayer = () => {
    setPoligonLocation(!poligonLocation)

    if (poligonLocation === false) {
      setPolState({
        positions: []
      })
    } else {
      return null
    }
    
  }

 
  

  const select = useSelector(state => state.carDataReducer)
  

  const myIcon = L.icon({
    iconUrl: marker,
    iconSize: [35, 35],
    iconAnchor: [12.4, 41],
    popupAnchor: [0, -41],
  });


  const style = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 94,
  };


  const polyClick = (e) => {
    e.preventDefault();
    setPolyDis(!polyDis);
  };

  const zoomIN = () => {
    if (zoom === 18) {
      return null;
    } else {
      setZoom(zoom + 1);
    }
  };

  const zoomOut = () => {
    if (zoom === 7) {
      return null;
    } else {
      setZoom(zoom - 1);
    }
  };

  const [dtmenu, setDtMenu] = useState(false);
  const [grap, setGraph] = useState(false);
  const [dataDiv, setDataDiv] = useState(false);
  
  const handleAction = () => {
    setDtMenu(!dtmenu);
  };


  const handleShowLog = (e) => {
    setModal(!modal)
    setCarInfo(false)
    if (e === 1) {
      setGraph(false);
      setDataDiv(true);
    }
    if (e === 2) {
      setGraph(true);
      setDataDiv(true);
    }
  };




  


  const [currentCar, setCurrentCar] = useState([])

  const changeCarData = (e,index) => {

    console.log(e.target)
    var x = latlon && latlon.filter(c => c.ID === index)
    var y = currentCar && currentCar.filter(c => c.ID !== index)

    console.log(x)
    
    // uniqueID = document.getElementById(index)

    if (x[0].ID === index) {
      e.target.checked = true
    } else {
      e.target.checked = false
    }

    if (e.target.checked) {
        
        setCurrentCar(currentCar.concat(x))
    }
    else {
      
       setCurrentCar(y)
    } 
  }

   const handleCenter = (lat,lon,cid, index) => {
      setCarInfo(true)
      setDataDiv()
      setCurrentCarStatus(cid)
      setCenter({
        lat: lat,
        lon: lon
      })
    
      var x = latlon && latlon.filter(c => c.ID === index)
      setCurrentCar(currentCar.concat(x))
      
    }

  const [dat, setDat] = useState(true)
  if (latlon.length > 0) {
    setTimeout(function(){ 
      setDat(!dat) 
    }, 1000);
  }

  const initMap = useRef()

  const [carList, setCarList] = useState()
  
  useEffect(() => {
      setCarList(select)
      const {current = {}} = initMap
    }, [select])

    const [carSearchResult, setCarSearchResult] = useState({
      search:null
    })

    const handleChange = (e) => {
      let value = e.target.value.trim().toLowerCase()
      setCarSearchResult({search:value})
    }

    const [tilelayer, setTilelayer] = useState(false)
    const [layerType, setLayerType] = useState(false)
    

    const map = (
        <Map
        closePopupOnClick={false}
        ref={initMap}
        style={{ height: "100vh" }}
        zoomControl={false}
        onClick={addPosition}
        center={{
          lat: center.lat,
          lon: center.lon,
        }}
        zoom={zoom}
      >

            <TileLayer

              attribution="&amp;copy contributors"
              url={layerType === false ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}
            />
                  {
                    poligonLocation === true ? <Polygon positions={polState.positions} color="blue" /> : null
                  }
                  {
                    currentCar === [] ? null :
                    currentCar.map(index => (
                      <DriftMarker
                      key={index.ID}
                      position={
                        {
                          lat:index.lat,
                          lon:index.lon
                        }} 
                      icon={myIcon}
                      duration={1000}
                      >
                        <Popup
                        autoPan={false}
                        closeOnClick={true}
                        style={{ opacity: "1" }} closeButton={false}>
                          {index.cid}
                        </Popup>

                          

                        {/* {polyDis ? (
                          <Polyline
                            positions={plLine}
                            dashArray={15}
                            stroke={true}
                            opacity={0.5}
                            color={"red"}
                          />
                        ) : null} */}
                      
                      
                      </DriftMarker>
                    ))
                    } 

                          {/* <Polyline
                            positions={polis.position === [] ? null : [polis.position[0][0], polis.position[0][1]]}
                            smoothFactor={2.0}
                            dashArray={15}
                            stroke={true}
                            opacity={0.5}
                            color={"red"}
                          /> */}
      </Map>
    )



    const handleFullscreen = () => {
      
    }

    const handleTileLayer = (e) => {
      console.log(e)
    }

   

    const handleDate = (data) => {

      var month = Number(data.From.getMonth()) + 1
      var fixedMonth = month < 10 ? "0" + month : month
      var fixedDate = data.From.getDate() < 10 ? "0" + data.From.getDate() : data.From.getDate()

      var FromFullDate = data.From.getFullYear() + "-" + fixedMonth + "-" + fixedDate

      var monthTo = Number(data.To.getMonth()) + 1
      var fixedMonthTo = monthTo < 10 ? "0" + monthTo : monthTo
      var fixedDateTo = data.To.getDate() < 10 ? "0" + data.To.getDate() : data.To.getDate()

      var FromFullDateTo = data.To.getFullYear() + "-" + fixedMonthTo + "-" + fixedDateTo



      console.log(FromFullDate)
      console.log(FromFullDateTo)

      Postdata.post(`/data/${FromFullDate}/${FromFullDateTo}/`)
      .then(res => console.log(res.data))
      // ${uniqueCarId}
      
      
    }

  return (
    <div style={style}>
      <div>
        {map}
      </div>

      <div style={{left: "30px"}} className="mod">
        <div className="box-header">
          <h6 className="m-0 d-flex align-items-center">
            <svg
              style={{ fill: "white" }}
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 5c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm10.881-2.501c0-1.492-.739-2.83-1.902-3.748l.741-.752c1.395 1.101 2.28 2.706 2.28 4.5s-.885 3.4-2.28 4.501l-.741-.753c1.163-.917 1.902-2.256 1.902-3.748zm-3.381 2.249l.74.751c.931-.733 1.521-1.804 1.521-3 0-1.195-.59-2.267-1.521-3l-.74.751c.697.551 1.141 1.354 1.141 2.249s-.444 1.699-1.141 2.249zm-16.479 1.499l-.741.753c-1.395-1.101-2.28-2.707-2.28-4.501s.885-3.399 2.28-4.5l.741.752c-1.163.918-1.902 2.256-1.902 3.748s.739 2.831 1.902 3.748zm.338-3.748c0-.896.443-1.698 1.141-2.249l-.74-.751c-.931.733-1.521 1.805-1.521 3 0 1.196.59 2.267 1.521 3l.74-.751c-.697-.55-1.141-1.353-1.141-2.249z" />
            </svg>
            CİHAZLAR
          </h6>
        </div>
        <div className="box-search">
          <svg
            className="pl-1 pr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
          <input onChange={(e) => handleChange(e)} placeholder="search" type="text" />
        </div>

        {
          carList && carList.filter((data) => {
            if(carSearchResult.search == null)
              return data
            else if(data.cid.toLowerCase().includes(carSearchResult.search.toLowerCase()) || data.cm.toLowerCase().includes(carSearchResult.search.toLowerCase())){
              return data
            }
          }).map((index, key) => (
              <div key={key}> 
                {
                /* <div className="region-cars">
                  <FormGroup className="d-flex align-items-center" check>
                    <Input type="checkbox" />
                  </FormGroup>
                  <button onClick={() => { setIcon(!icon) }} id={index.test} style={{ marginBottom: '1rem' }}>
                    <span className="d-flex mr-2">
                      {
                        !icon ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" /></svg>
                      }
                    </span>
                    <span> CAR GROUP BAKU (3)</span>
                  </button>
                </div>  */
                }
                {/* <UncontrolledCollapse toggler={index.cid}> */}
                <div  className="region-inner">
                  <div style={{width: "92%"}} className="d-flex align-items-center">
                    <FormGroup
                      style={{cursor: "pointer"}}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Input type="checkbox"
                      onChange={(e) => changeCarData(e, index.ID)} />
                    </FormGroup>
                    {/* onClick={() => setCarInfo(!carInfo)} id={index.best} */}
                    <button onClick={() => handleCenter(index.lat,index.lon,index.cid,index.ID)}  style={{ marginBottom: "1rem", width: "100%", paddingRight: "0px" }}>
                      <div className="custom-panel-header pr-0 d-flex align-items-center justify-content-between">
                        <div>
                          <span>
                            {index.cid} ({index.cm})
                          </span>
                        </div>
                        <div>
                        <span>110kmhs</span>
                          <span>
                            <svg
                              height="20px"
                              width="20px"
                              fill="green"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 1000 1000"
                              enableBackground="new 0 0 1000 1000"
                              space="preserve"
                            >
                              <g>
                                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                  <path d="M2356.1,3176.9v-253.8h465.3h465.3v-183.3v-183.3l-597.9-5.6l-600.7-8.5l-8.5-330l-8.5-332.8h-504.8h-507.6v-831.9V215.8H833.2H607.6v578.1V1372H353.8H100V-24v-1396h253.8h253.8l5.6,572.5l8.5,569.7l220,8.5l217.2,8.5v-834.8v-831.9h575.3h578.1l445.6-612l448.4-614.8l2106.6-8.5l2103.8-5.6l45.1,146.7c22.5,81.8,95.9,346.9,163.6,586.6l124.1,437.1h138.2h138.2l245.4-606.3l242.5-606.3h744.5H9900v2594.5v2594.5l-736,8.5l-738.9,5.6l-152.3-372.3c-84.6-205.9-197.4-487.9-251-623.2l-95.9-248.2l-138.2,8.5l-138.2,8.5l-138.2,479.4c-73.3,265.1-149.5,527.4-166.4,586.6l-28.2,104.4h-363.8h-366.6v310.2v310.2h-592.2h-592.2v183.3v183.3h465.3h465.3v253.8v253.8H4344.3H2356.1V3176.9z M6101.3,1733l8.5-304.6h414.6h414.6l166.4-592.2L7271.6,244h499.2h502l248.2,620.4l251,623.3l310.2-8.5l310.2-8.5l8.5-2092.6l5.6-2095.4h-318.7h-318.7l-251,620.4L8270-1476.3h-499.2h-496.3l-169.2-592.2l-166.4-592.2l-1790.8,5.6l-1788,8.5l-448.4,614.8l-445.6,612h-451.2h-448.4V-24v1396h507.6h507.6v338.4v338.4l1756.9-5.6l1754.1-8.5L6101.3,1733z" />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span>
                            <svg
                              fill="red"
                              xmlns="http://www.w3.org/2000/svg"
                              height="13px"
                              width="13px"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="12" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>    
                <UncontrolledDropdown  direction="right">
                  <DropdownToggle id="uncontrolled-dropdown" className="panel-mini-menu" caret size="sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      </svg>
                  </DropdownToggle>
                  <DropdownMenu style={{fontSize: "14px"}} >
                    <DropdownItem className="text-dark" onClick={() => handleShowLog(2)}>
                      show grap
                    </DropdownItem>
                    <DropdownItem className="text-dark" onClick={() => handleShowLog(1)}>
                      data log
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>  
                </div>
              </div>
          ))
        }
      </div>
      


      <div className="right-action">
        <ul className="list-unstyled">
        <li id="fullscreen_btn" className="main-btn">
          <ButtonDropdown style={{
           
            color: "white",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "#232e3d",
            border: "0px",
            transition: "0.3s"
          }} direction="left" isOpen={tilelayer} toggle={() => { setTilelayer(!tilelayer) }}>
            <DropdownToggle caret>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z"/></svg>
            </DropdownToggle>
            <DropdownMenu className="tilelayer-drop">
            <div className="form-check d-flex align-items-center ">
              <input onClick={() => {setLayerType(false)}} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Open street map
              </label>
            </div>
            <div className="form-check d-flex align-items-center ">
              <input onClick={() => setLayerType(true)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Google satellite
              </label>
            </div>
            </DropdownMenu>
          </ButtonDropdown>
          </li>
          <li id="fullscreen_btn" className="main-btn">
            <button
            onClick={() => handleFullscreen()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0v24h24v-24h-24zm11.333 20h-7.333v-7.333l2.253 2.252 3.002-2.989 2.828 2.828-3.002 2.989 2.252 2.253zm8.667-8.667l-2.253-2.252-2.919 2.919-2.828-2.828 2.919-2.919-2.252-2.253h7.333v7.333z" />
              </svg>
            </button>
          </li>
          <li id="zoom_btn" className="main-btn">
            <button onClick={zoomIN}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
              </svg>
            </button>
          </li>
          <li id="unzoom_btn" className="main-btn">
            <button onClick={zoomOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13 10h-8v-2h8v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
              </svg>
            </button>
          </li>
          <li id="polygon_btn" className="main-btn">
            <button
            onClick={polygonLayer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17.492 15.432c-.433 0-.855-.087-1.253-.259l.467-1.082c.25.107.514.162.786.162.222 0 .441-.037.651-.11l.388 1.112c-.334.118-.683.177-1.039.177zm-10.922-.022c-.373 0-.741-.066-1.093-.195l.407-1.105c.221.081.451.122.686.122.26 0 .514-.05.754-.148l.447 1.09c-.382.157-.786.236-1.201.236zm8.67-.783l-1.659-.945.583-1.024 1.66.945-.584 1.024zm-6.455-.02l-.605-1.011 1.639-.981.605 1.011-1.639.981zm3.918-1.408c-.243-.101-.5-.153-.764-.153-.23 0-.457.04-.674.119l-.401-1.108c.346-.125.708-.188 1.075-.188.42 0 .83.082 1.217.244l-.453 1.086zm7.327-.163c-.534 0-.968.433-.968.968 0 .535.434.968.968.968.535 0 .969-.434.969-.968 0-.535-.434-.968-.969-.968zm-16.061 0c-.535 0-.969.433-.969.968 0 .535.434.968.969.968s.969-.434.969-.968c0-.535-.434-.968-.969-.968zm18.031-.832v6.683l-4 2.479v-4.366h-1v4.141l-4-2.885v-3.256h-2v3.255l-4 2.885v-4.14h-1v4.365l-4-2.479v-13.294l4 2.479v3.929h1v-3.927l4-2.886v4.813h2v-4.813l1.577 1.138c-.339-.701-.577-1.518-.577-2.524l.019-.345-2.019-1.456-5.545 4-6.455-4v18l6.455 4 5.545-4 5.545 4 6.455-4v-11.618l-.039.047c-.831.982-1.614 1.918-1.961 3.775zm2-8.403c0-2.099-1.9-3.801-4-3.801s-4 1.702-4 3.801c0 3.121 3.188 3.451 4 8.199.812-4.748 4-5.078 4-8.199zm-5.5.199c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5-.672 1.5-1.5 1.5-1.5-.671-1.5-1.5zm-.548 8c-.212-.992-.547-1.724-.952-2.334v2.334h.952z" />
              </svg>
            </button>
          </li>
          <li className="main-btn">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z" />
              </svg>
            </button>
          </li>
          <li id="polyline_btn" className="main-btn">
            <button onClick={(e) => polyClick(e)}>
              <svg
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="road"
                className="svg-inline--fa fa-road fa-w-18 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"
                ></path>
              </svg>
            </button>
          </li>
          <li className="main-btn">
            <button>
              <svg
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="traffic-light"
                className="svg-inline--fa fa-traffic-light fa-w-12 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M384 192h-64v-37.88c37.2-13.22 64-48.38 64-90.12h-64V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v32H0c0 41.74 26.8 76.9 64 90.12V192H0c0 41.74 26.8 76.9 64 90.12V320H0c0 42.84 28.25 78.69 66.99 91.05C79.42 468.72 130.6 512 192 512s112.58-43.28 125.01-100.95C355.75 398.69 384 362.84 384 320h-64v-37.88c37.2-13.22 64-48.38 64-90.12zM192 416c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"
                ></path>
              </svg>
            </button>
          </li>
          <li id="seeMarker_btn" className="main-btn">
            <button
              // onClick={() => showPopup()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {!dataDiv ? null : (
        <div className="data-graph">
          <div>
            <div className="ac-btn d-flex justify-content-end">
              <button onClick={() => setDataDiv()}>X</button>
              <button onClick={() => setGraph(false)}>Data Log</button>
              <button onClick={() => setGraph(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z" />
                </svg>
                Show Grap
              </button>
            </div>
            <div className="schedule">
              <div className="dow-graph">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.819 14.427c.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12h.496c.474 0 .803.173.916.644zm3.091-8.65c2.047-.479 4.805.279 6.09 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.157 1.168 1.563 4.235 1.342 5.703zm-7.457 7.955h-.546v.943h.546c.235 0 .467-.027.576-.227.067-.123.067-.366 0-.489-.109-.198-.341-.227-.576-.227zm13.547-2.732v13h-20v-24h8.409c4.858 0 3.334 8 3.334 8 3.011-.745 8.257-.42 8.257 3zm-12.108 2.761c-.16-.484-.606-.761-1.224-.761h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.094-.292.094-.597 0-.885zm3.407-.303c-.297-.299-.711-.458-1.199-.458h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.554-.659.586-2.035-.063-2.693zm3.701-.458h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 9c1.361-5.928 8-7 8-7v-2l4 3.982-4 4.018v-2s-5.102-.104-8 3zm5 1h-10v1h10v-1zm3 .835v2.708c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h10.741c1.176-.758 2.35-1.242 3.259-1.541v-.459h-16v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-5.561l-2 2.01zm-13 3.165h10v-1h-10v1zm3.609-7h-3.609v1h3.266l.343-1z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 20h-6v-1h6v1zm10-15v13h-4v6h-16v-6h-4v-13h4v-5h16v5h4zm-6 10h-12v7h12v-7zm0-13h-12v3h12v-3zm4 5.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5zm-6 9.5h-8v1h8v-1z" />
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="action-boxes w-100">
                {!grap ?  <DataLog /> : <ApexChart />}
              </div>
            </div>
          </div>
          
        </div>
      )}
      {!carInfo ? null : (
          <div className="bottom-car-info">
            
              {
                x.map(index => (
                  <div className="d-flex flex-wrap w-100 car-table">
                    <Col lg={4} className="p-0">
                      <ul className="car-owner-info">
                        <li>
                          <span className="owner-header d-flex align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M11 16v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.549-.545-2.051-2.035-2.389-2.375l-.089-.091c-.666-.68-1.421-1.27-3.172-1.27h-7.64c-.547 0-.791.456-.254.944-.534.462-1.945 1.705-2.341 2.107-1.383 1.403-2.29 2.481-2.29 4.604 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.309-1.209 2.263-2.025.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.195-.396 1.825-1.168 1.887zm-13.6-12.985c.71-.751 1.688-1.215 2.768-1.215s2.058.464 2.768 1.215l1.164-1.236c-1.006-1.067-2.397-1.727-3.932-1.727-1.535 0-2.926.66-3.932 1.727l1.164 1.236zm-2.038-2.163c1.23-1.304 2.929-2.11 4.806-2.11s3.576.806 4.806 2.11l1.194-1.266c-1.535-1.629-3.656-2.636-6-2.636s-4.465 1.007-6 2.636l1.194 1.266zm6.806 4.098h-4c.035-.906.749-1.737 2-1.737 1.243 0 1.965.831 2 1.737z" />
                            </svg>
                            {index.cid}
                          </span>
                          <span className="d-flex align-items-center">
                            status:hərəkətdə
                            <svg
                              className="ml-2"
                              fill="red"
                              xmlns="http://www.w3.org/2000/svg"
                              height="13px"
                              width="13px"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="12"></circle>
                            </svg>
                          </span>
                        </li>
                        <li>
                          <span>Address:</span>
                          <span>Azadliq avn, Azerbaijan Baku</span>
                        </li>
                        <li>
                          <span>Time:</span>
                          <span>{index.dt}</span>
                        </li>
                        <li>
                          <span>Stop duration:</span>
                          <span>--</span>
                        </li>
                        <li>
                          <span>Driver</span>
                          <span>Yoxdu</span>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={4} className="p-0">
                      <ul className="car-owner-info">
                        <li>
                          <span className="owner-header">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6.043 19.496l-1.482 1.505c-2.791-2.201-4.561-5.413-4.561-9.001s1.77-6.8 4.561-9l1.482 1.504c-2.326 1.835-3.804 4.512-3.804 7.496s1.478 5.661 3.804 7.496zm.675-7.496c0-1.791.887-3.397 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.101-2.282-2.707-2.282-4.498zm15.043 0c0-2.984-1.478-5.661-3.804-7.496l1.482-1.504c2.791 2.2 4.561 5.412 4.561 9s-1.77 6.8-4.561 9.001l-1.482-1.505c2.326-1.835 3.804-4.512 3.804-7.496zm-6.761 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.18-4.533-3.04-6l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.397-2.282 4.498zm-3-7.498c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3z" />
                            </svg>
                            Sensors
                          </span>
                        </li>
                        <li className="sensor-list">
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 12l5-2.917v9.917h-5v-7zm7-4.083v11.083h5v-14l-5 2.917zm-9 5.25l-10 5.833h10v-5.833z" />
                              </svg>
                              RSSİ
                            </span>
                            <span>0%</span>
                          </span>
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                className="colored-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-16-6h-3v6h3v-6zm4 0h-3v6h3v-6zm4 0h-3v6h3v-6zm4 0h-3v6h3v-6z" />
                              </svg>
                              Battery
                            </span>
                            <span>100%</span>
                          </span>
                        </li>
                        <li className="sensor-list">
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm.932 11.667c-.127.328-1.695 3.888-2.096 4.786-.42.941-1.239 1.881-2.751 1.881h-2.627c-1.592 0-2.43-.945-2.43-2.596v-7.208c0-.956 1.316-.908 1.316-.044v3.16c0 .26.478.259.478 0v-5.079c0-.982 1.472-.957 1.472 0v4.795c0 .264.443.252.443-.005v-5.628c0-.957 1.457-.984 1.457 0l.001 5.692c0 .254.459.261.459 0v-4.78c0-.905 1.596-.933 1.596 0v5.417c0 .331.327.384.45.131.118-.24.605-1.315.613-1.327.49-1.029 2.128-.404 1.619.805z" />
                              </svg>
                              Blocked
                            </span>
                            <span>off</span>
                          </span>
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.451 17.337l-2.451 2.663h-2v2h-2v2h-6v-5l6.865-6.949c1.08 2.424 3.095 4.336 5.586 5.286zm11.549-9.337c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-3-3c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z" />
                              </svg>
                              Ignition
                            </span>
                            <span>on</span>
                          </span>
                        </li>
                        <li className="sensor-list">
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12.451 17.337l-2.451 2.663h-2v2h-2v2h-6v-5l6.865-6.949c1.08 2.424 3.095 4.336 5.586 5.286zm11.549-9.337c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-3-3c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z" />
                              </svg>
                              Charged
                            </span>
                            <span>on</span>
                          </span>
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M2 24h2.948c1-.923 2.004-2 3.55-2 1.547 0 2.55 1.077 3.55 2h2.948l-6.498-6-6.498 6zm20-8.042c0 3.269-5.858 3.387-9.787 1.79-6.835-2.779-9.629-9.79-7.817-15.17.84-2.496 1.852-3.84 6.333-.922 1.101.716 2.27 1.649 3.437 2.722l-1.72 1.152c-7.717-7.009-6.992-2.036-.983 4.55 5.858 6.417 11.668 8.615 5.767.717l1.199-1.745c1.223 1.634 3.571 4.873 3.571 6.906zm-1.026-12.437c-.004.829-.68 1.497-1.508 1.492-.225-.001-.436-.056-.628-.146l-3.829 5.646c-.784-.555-1.994-1.768-2.548-2.554l5.682-3.77c-.104-.207-.169-.437-.168-.684.005-.829.68-1.497 1.507-1.492.828.005 1.497.68 1.492 1.508z" />
                              </svg>
                              Satellites
                            </span>
                            <span>9</span>
                          </span>
                        </li>
                        <li className="sensor-list">
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                className="colored-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 12l5-2.917v9.917h-5v-7zm7-4.083v11.083h5v-14l-5 2.917zm-9 5.25l-10 5.833h10v-5.833z" />
                              </svg>
                              GSM
                            </span>
                            <span>100%</span>
                          </span>
                          <span className="sensor-list-item">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm8.021 9.593c-.141-.427-.314-.844-.516-1.242l-2.454 1.106c.217.393.39.81.517 1.242l2.453-1.106zm-12.573-.904c.271-.354.58-.674.919-.957l-1.89-1.968c-.328.294-.637.615-.918.957l1.889 1.968zm1.715-1.514c.379-.221.781-.396 1.198-.523l-1.034-2.569c-.41.142-.812.318-1.198.524l1.034 2.568zm-2.759 3.616c.121-.435.288-.854.498-1.25l-2.47-1.067c-.197.403-.364.823-.498 1.25l2.47 1.067zm9.434-6.2c-.387-.205-.79-.379-1.2-.519l-1.024 2.573c.417.125.82.299 1.2.519l1.024-2.573zm2.601 2.13c-.282-.342-.59-.664-.918-.957l-1.89 1.968c.339.283.647.604.918.957l1.89-1.968zm-5.791-3.059c-.219-.017-.437-.026-.649-.026s-.431.009-.65.026v2.784c.216-.025.434-.038.65-.038.216 0 .434.013.649.038v-2.784zm-.648 13.782c-1.294 0-2.343-1.049-2.343-2.343 0-.883.489-1.652 1.21-2.051l1.133-5.31 1.133 5.309c.722.399 1.21 1.168 1.21 2.051 0 1.295-1.049 2.344-2.343 2.344z" />
                              </svg>
                              Speed
                            </span>
                            <span>{index.sp}</span>
                          </span>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={4} className="p-0">
                      <ul className="car-owner-info">
                        <li>
                          <span className="owner-header">Street view</span>
                          <button onClick={() => {setCarInfo(false)}} style={{backgroundColor: "transparent", border: "0px"}} className="btn p-0">
                              <svg fill="#9d9d9d" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            </button>
                        </li>
                        
                      </ul>
                      <div className="street-view">
                        <span className="owner-header">not signal</span>
                      </div>
                    </Col>
                  </div>
                ))
              }
            
            
          </div>
        )}
        <Modal className="customMdl" isOpen={modal} >
        <ModalHeader toggle={() => setModal(!modal)}>Graph Date</ModalHeader>
        <form onSubmit={handleSubmit(handleDate)}>
        <ModalBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <h6>From:</h6>
            <Controller
                        control={control}
                        name="From"
                        render={({ onChange, onBlur, value}) => (
                          <DatePicker
                            className="custom-input"
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
          {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
          </div>
          <div>
            <h6>To:</h6>
            <Controller
                        control={control}
                        name="To"
                        render={({ onChange, onBlur, value}) => (
                          <DatePicker
                            dateFormat="yyyy/MM/dd"
                            className="custom-input"
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" >Save</Button>
          <Button color="danger" onClick={() => setModal(!modal)}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default MainPage;



