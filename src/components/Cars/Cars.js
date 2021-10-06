import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import ReactDatePicker from "react-datepicker";
import marker from "../../assets/img/marker.webp";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { DriftMarker } from "leaflet-drift-marker";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { newDepartmentData,newVehicleData,getNewDriver } from "../../redux/actions/userAction";
import TrackCar from "./TrackCar";
import dataPost from "../../api/data"
import UpdateDeleteCars from "./UpdateDeleteCars";

function Cars(props) {

  const { register, handleSubmit, errors,control } = useForm();
  const dispatch = useDispatch();
  const { className } = props;
  const [section, setSection] = useState(true);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false)

    

  

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal(!modal);

  const handleShow = () => setSection(true);
  const handleShow2 = () => setSection(false);

  const active = {
    background: "white",
    boderBottom: "none",
    border: "2px solid white",
    borderBottom: "0px",
    borderRadius: "0px",
  };
  const modulColor = {
    background: "#f2f2f2",
  };
  const modulFooter = {
    background: "#5c7d94",
  };

  const myIcon = L.icon({
    iconUrl: marker,
    iconSize: [35, 35],
    iconAnchor: [12.4, 41],
    popupAnchor: [0, -41],
  });

  // const [startDate1, setStartDate1] = useState(new Date());
  // const [endDate1, setEndDate1] = useState(new Date());

  const department = useSelector((state) => state.departmentReducer);
  const vehicles = useSelector((state) => state.vehicleDataReducer);
  const drivers = useSelector(state => state.driverDataReducer)

  console.log(vehicles);
  console.log(department);
  console.log(drivers);
  

  const [location] = useState({
    lat: 40.410629,
    lng: 49.861457,
  });

  const position = location;

  const handleGroup = (data) => {
   

    var newGroups = {
      Action: "new",
      GroupName: data.GroupName,
      GroupAddress: data.GroupAddress,
    };

    dataPost.post("/group", { ...newGroups })
      .then((res) => {
        if (res.data.error === false) {
          dispatch(newDepartmentData(res.data.data));
        } else {
          alert("not added")
        }
      });
  };

  const handleAddVehicle = (data) => {

    var addVehicle = {
      Action: "new",
      Name:data.Name, 
      IdDevice:data.IdDevice, 
      IdGroup:data.IdGroup, 
      IdModel:data.IdModel, 
      IdType:data.IdType, 
      IdSubtype:data.IdSubtype, 
      Vin:data.Vin, 
      PlateNum:data.PlateNum, 
      FuelType:data.FuelType, 
      FuelConsumption:data.FuelConsumption, 
      FuelBankCapacity:data.FuelBankCapacity, 
      WheelNumber:data.WheelNumber, 
      WheelSize:data.WheelSize, 
      CascoNumber:data.CascoNumber, 
      CascoEndDate:data.CascoEndDate, 
      InsuranceNumber:data.InsuranceNumber, 
      InsuranceEndDate:data.InsuranceEndDate 
    }


    dataPost.post("/vehicle", {...addVehicle})
    .then(res => {
      if (res.data.error === false) {
        dispatch(newVehicleData(res.data.data))
      } else {
        alert("not added")
      }
    })

  } 

  const handleNewDriver = (data) => {
    console.log(data)

    var addVehicle = {
        Action: "new",
        Name:data.Name, 
        Surname: data.Surname,
        IdDevice:data.IdDevice,
        IdGroup:data.IdGroup,
        Phone:data.Phone,
        Email:data.Email,
        DriverLicenseN:data.DriverLicenseN,
        Category:data.Category,
        DriverLicenseEndDate:data.DriverLicenseEndDate,
        IdTrust:data.IdTrust,
        Address:data.Address 
    }

    dataPost.post("/driver", {...addVehicle})
    .then(res => {
      if (res.data.error === false) {
        console.log(res.data.data)
        dispatch(getNewDriver(res.data.data))
      } else {
        alert("not added")
      }
    })
  }


  if (section) {
    return (
      <div id="vehicle" className="activity">
        <Container fluid={true}>
          <button style={active} className="btn" onClick={handleShow}>
            Vehicles
          </button>
          <button className="disable-shadow btn" onClick={handleShow2}>
            Drivers
          </button>
          <Row className="wrap-box m-0" style={{ height: "90vh" }}>
            <Col md={8} className="h-100">
              <div className="action-button justify-content-start">
                <button className="blue-button mr-2" onClick={toggle}>
                  Add vehicle
                </button>
                <button className="blue-button" onClick={toggle2}>
                  +New Group
                </button>
                <Modal
                  isOpen={modal2}
                  toggle={toggle2}
                  className="toggle2 modal-color"
                >
                  <ModalHeader toggle={toggle2}>New Group</ModalHeader>
                  <form onSubmit={handleSubmit(handleGroup)}>
                    <ModalBody style={modulColor}>
                      <label className="m-2">Department-name:</label>
                      <input
                        name="GroupName"
                        type="text"
                        ref={register({ required: true })}
                        className="custom-input"
                        style={{ width: "90%" }}
                      />
                      {errors.GroupName && (
                        <span className="text-danger">bos buraxılmamalıdı</span>
                      )}
                      <label className="m-2">Adress:</label>
                      <textarea
                        name="GroupAddress"
                        ref={register({ required: true })}
                        type="text"
                        className="custom-textarea"
                        style={{ width: "90%" }}
                      />
                      {errors.GroupAddress && (
                        <span className="text-danger">bos buraxılmamalıdı</span>
                      )}
                    </ModalBody>
                    <ModalFooter style={modulFooter}>
                      <Button className="btn blue-button" onClick={toggle2}>
                        Cancel
                      </Button>{" "}
                      <button type="submit" className="btn blue-button">
                        Save
                      </button>
                    </ModalFooter>
                  </form>
                </Modal>
              </div>
              <div style={{overflowY: "scroll",height: "86%"}}>
                <Table  striped hover bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Model</th>
                      <th>Tracker</th>
                      <th>Qeydiyyat m.</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      vehicles && vehicles.map((index,key) => (
                      <tr style={{cursor: "pointer"}} key={key}>
                        <th>{index.Name}</th>
                        <td>{index.IdModel}</td>
                        <td>{index.IdDevice}</td>
                        <td>{index.PlateNum}</td>
                        <td>{index.IdType}</td>
                      </tr>
                      ))
                    }
                    
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="box-header text-left">
                  <span>Map</span>
                </div>
                <div style={{ height: "342px" }}>
                  <TrackCar />
                </div>
              </div>
              <div>
                <div className="box-header text-left">
                  <span>Status</span>
                </div>
                <div>
                  <ul className="list-unstyled">
                    <li>Name:</li>
                    <li>Device name:</li>
                    <li>Online status:</li>
                    <li>Last date:</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className={`modal-color ${className}`}
        >
          <ModalHeader toggle={toggle}>New Vehivle</ModalHeader>
          <form onSubmit={handleSubmit(handleAddVehicle)}>
          <ModalBody style={modulColor}>
          
            <Row>
              <Col md={4}>
                <ul className="list-unstyled">
                  <li>
                    <label>
                      Name:
                      <input name="Name" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Device:
                      <input name="IdDevice" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Group:
                      <select name="IdGroup" ref={register({required: true})} className="custom-input">
                      <option disabled selected>Qruplar</option>  
                        {
                          department && department.map((index, key) => (
                            <option key={key} value={index.UniqueId}>{index.GroupName}</option>
                          ))
                        }
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Model:
                      <select  name="IdModel" ref={register({required: true})} className="custom-input" >
                        <option selected disabled>
                          Bütün markalar
                        </option>
                        <option value="Abarth">Abarth</option>
                        <option value="Alfa Romeo">Alfa Romeo</option>
                        <option value="Aston Martin">Aston Martin</option>
                        <option value="ATV">ATV</option>
                        <option value="Audi">Audi</option>
                        <option value="Baic">Baic</option>
                        <option value="Bajaj">Bajaj</option>
                        <option value="Bentley">Bentley</option>
                        <option value="BMW">BMW</option>
                        <option value="BMW Alpina">BMW Alpina</option>
                        <option value="Brilliance">Brilliance</option>
                        <option value="Buick">Buick</option>
                        <option value="BYD">BYD</option>
                        <option value="Cadillac">Cadillac</option>
                        <option value="CFMOTO">CFMOTO</option>
                        <option value="Changan">Changan</option>
                        <option value="Chery">Chery</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Chrysler">Chrysler</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Dacia">Dacia</option>
                        <option value="Daewoo">Daewoo</option>
                        <option value="DAF">DAF</option>
                        <option value="Daihatsu">Daihatsu</option>
                        <option value="Dodge">Dodge</option>
                        <option value="DongFeng">DongFeng</option>
                        <option value="Ducati">Ducati</option>
                        <option value="FAW">FAW</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Ford">Ford</option>
                        <option value="Foton">Foton</option>
                        <option value="GAC">GAC</option>
                        <option value="GAZ">GAZ</option>
                        <option value="Geely">Geely</option>
                        <option value="GMC">GMC</option>
                        <option value="Great Wall">Great Wall</option>
                        <option value="Haojue">Haojue</option>
                        <option value="Harley-Davidson">Harley-Davidson</option>
                        <option value="Haval">Haval</option>
                        <option value="Honda">Honda</option>
                        <option value="HOWO">HOWO</option>
                        <option value="Hummer">Hummer</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="IJ">IJ</option>
                        <option value="Infiniti">Infiniti</option>
                        <option value="Iran Khodro">Iran Khodro</option>
                        <option value="Isuzu">Isuzu</option>
                        <option value="Iveco">Iveco</option>
                        <option value="JAC">JAC</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Jeep">Jeep</option>
                        <option value="Jonway">Jonway</option>
                        <option value="KamAz">KamAz</option>
                        <option value="Kawasaki">Kawasaki</option>
                        <option value="Khazar">Khazar</option>
                        <option value="Kia">Kia</option>
                        <option value="KrAZ">KrAZ</option>
                        <option value="Kuba">Kuba</option>
                        <option value="LADA (VAZ)">LADA (VAZ)</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Land Rover">Land Rover</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Lifan">Lifan</option>
                        <option value="Lincoln">Lincoln</option>
                        <option value="LuAz">LuAz</option>
                        <option value="MAN">MAN</option>
                        <option value="Maserati">Maserati</option>
                        <option value="MAZ">MAZ</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Mercedes-Maybach">Mercedes-Maybach</option>
                        <option value="Mercury">Mercury</option>
                        <option value="MG">MG</option>
                        <option value="Mini">Mini</option>
                        <option value="Minsk">Minsk</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Mondial">Mondial</option>
                        <option value="Moskvich">Moskvich</option>
                        <option value="Muravey">Muravey</option>
                        <option value="Nama">Nama</option>
                        <option value="Neman">Neman</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Opel">Opel</option>
                        <option value="PAZ">PAZ</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Porsche">Porsche</option>
                        <option value="RAF">RAF</option>
                        <option value="Ravon">Ravon</option>
                        <option value="Renault">Renault</option>
                        <option value="Rolls-Royce">Rolls-Royce</option>
                        <option value="Rover">Rover</option>
                        <option value="Saab">Saab</option>
                        <option value="Saipa">Saipa</option>
                        <option value="Scania">Scania</option>
                        <option value="SEAT">SEAT</option>
                        <option value="Shacman">Shacman</option>
                        <option value="Shaolin">Shaolin</option>
                        <option value="Skoda">Skoda</option>
                        <option value="Smart">Smart</option>
                        <option value="Ssang Yong">Ssang Yong</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Tofas">Tofas</option>
                        <option value="Toyota">Toyota</option>
                        <option value="UAZ">UAZ</option>
                        <option value="Ural">Ural</option>
                        <option value="Vespa">Vespa</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Yamaha">Yamaha</option>
                        <option value="ZAZ">ZAZ</option>
                        <option value="ZIL">ZIL</option>
                        <option value="Zongshen">Zongshen</option>
                        <option value="Zontes">Zontes</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Type:
                      <select name="IdType" ref={register({required: true})} className="custom-input">
                        <option selected disabled>
                          Bütün tiplər
                        </option>
                        <option value="Avtobus">Avtobus</option>
                        <option value="Dartqı">Dartqı</option>
                        <option value="Furqon">Furqon</option>
                        <option value="Hetcbek">Hetçbek / Liftbek</option>
                        <option value="Kabrio">Kabrio</option>
                        <option value="Kupe">Kupe</option>
                        <option value="Minivan">Minivan</option>
                        <option value="Motosiklet">Motosiklet</option>
                        <option value="Offroad">Offroader / SUV</option>
                        <option value="Pikap">Pikap</option>
                        <option value="Qolfkar">Qolfkar</option>
                        <option value="Rodster">Rodster</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Van">Van</option>
                        <option value="Yukmasını">Yük maşını</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Subtype:
                      <select name="IdSubtype" ref={register({required: true})} className="custom-input">
                        <option value="test">test</option>
                        <option value="test">test</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Qey.Niş :
                      <input name="PlateNum" ref={register({required: true})}  className="custom-input" type="text" />
                    </label>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <ul className="list-unstyled">
                  <li>
                    <label>
                      Vin:
                      <input name="Vin" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Yanacaq:
                      <select name="FuelType" ref={register({required: true})} className="custom-input">
                        <option disabled selected>Bütün tiplər</option>
                        <option value="Benzin">Benzin</option>
                        <option value="Dizel">Dizel</option>
                        <option value="Qaz">Qaz</option>
                        <option value="Elektro">Elektro</option>
                        <option value="Hibrid">Hibrid</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Teker sayı:
                      <select name="WheelNumber" className="custom-input" ref={register({required: true})}>
                        <option>Bütün ölçülər</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                      </select>
                    </label>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <ul className="list-unstyled">
                  <li>
                    <label>
                      Təkər olç:
                      <input name="WheelSize" className="custom-input" ref={register({required: true})}   type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Kasko №:
                      <input name="CascoNumber" className="custom-input" ref={register({required: true})} type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Bitme vaxt:
                      {/* <Controller
                            control={control}
                            name="CascoEndDate"
                            render={({ onChange, onBlur, value}) => (
                            <DatePicker
                                className="custom-input"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                // selected={new Date()}
                        />
                        )}
                    /> */}
                     <Controller
                        control={control}
                        name="CascoEndDate"
                        render={({ onChange, onBlur, value}) => (
                          <ReactDatePicker
                            className="custom-input"
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                          />
                        )}
                      />
                      
                    </label>
                  </li>
                  <li>
                    <label>
                      İcbari №:
                      <input name="InsuranceNumber" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Bitme vaxt:
                      {/* <DatePicker className="custom-input" ref={register({required: true})} name="InsuranceEndDate" selected={new Date()}/> */}
                    </label>
                  </li>
                </ul>
              </Col>
            </Row>

          </ModalBody>
          <ModalFooter style={modulFooter}>
            <Button className="btn blue-button" onClick={toggle}>
              Cancel
            </Button>
            <Button className="btn blue-button" type="submit">
              Save
            </Button>
          </ModalFooter>
          </form>
        </Modal>
        {/* <UpdateDeleteCars modulFooter={modulFooter} modulColor={modulColor} department={department} toggle={toggle5} modal={modal5} /> */}
      </div>
    );
  } else {
    return (
      <div id="driver" className="activity">
        <Container fluid={true}>
          <button className="btn disable-shadow " onClick={handleShow}>
            Vehicles
          </button>
          <button style={active} className="btn" onClick={handleShow2}>
            Drivers
          </button>
          <Row className="wrap-box m-0" style={{ height: "90vh" }}>
            <Col md={8}>
              <div className="action-button justify-content-start">
                <button className="blue-button" onClick={toggle4}>
                  Add Driver
                </button>
                <Modal
                  isOpen={modal3}
                  toggle={toggle3}
                  className="toggle2 modal-color"
                >
                  <ModalHeader toggle={toggle3}>New Group</ModalHeader>
                  <ModalBody style={modulColor}>
                    <form>
                      <label className="m-2">Department-name:</label>
                      <input
                        type="text"
                        className="custom-input"
                        style={{ width: "90%" }}
                      />
                      <label className="m-2">Adress:</label>
                      <textarea
                        type="text"
                        className="custom-textarea"
                        style={{ width: "90%" }}
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter style={modulFooter}>
                    <Button className="btn blue-button" onClick={toggle3}>
                      Cancel
                    </Button>{" "}
                    <Button className="btn blue-button" onClick={toggle3}>
                      Save
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
              <div style={{overflowY: "scroll", height: "86%"}}>
                <Table  striped hover bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Vehicle</th>
                      <th>Vehicle number</th>
                      <th>Type</th>
                 
                    </tr>
                  </thead>
                  <tbody>
                    {
                     drivers && drivers.map((index, key) => (
                      <tr style={{cursor: "pointer"}} key={key}>
                        <th>{index.Name}</th>
                        <td>{index.Phone}</td>
                        <td>{index.IdDevice}</td>
                        <td>{index.Address}</td>
                        <td>{index.Email}</td>
                      </tr>
                     ))
                    }
                    
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="box-header text-left">
                  <span>Map</span>
                </div>
                <div style={{ height: "342px" }}>
                  <Map style={{ height: "100%" }} center={position} zoom={13}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker icon={myIcon} position={position}>
                      <Popup>
                        A pretty CSS3 popup.
                        <br />
                        Easily customizable.
                      </Popup>
                    </Marker>
                  </Map>
                </div>
              </div>
              <div>
                <div className="box-header text-left">
                  <span>Status</span>
                </div>
                <div>
                  <ul className="list-unstyled">
                    <li>Name:</li>
                    <li>Device name:</li>
                    <li>Online status:</li>
                    <li>Last date:</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal
          isOpen={modal4}
          toggle={toggle4}
          className={`modal-color ${className}`}
        >
          <ModalHeader toggle={toggle4}>New Driver</ModalHeader>
          <form onSubmit={handleSubmit(handleNewDriver)}>
          <ModalBody style={modulColor}>
            <Row>
              <Col md={4}>
                <ul className="list-unstyled">
                  <li>
                    <label>
                      Name:
                      <input name="Name" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Surname:
                      <input name="Surname" className="custom-input" ref={register({required: true})} type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Device:
                      <select name="IdDevice" ref={register({required: true})} className="custom-input">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Department:
                      <input name="IdGroup" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Phone:
                      <input name="Phone" ref={register({required: true})} className="custom-input" type="text" />
                    </label>
                  </li>
                  <li>
                    <label>
                      E-mail:
                      <input name="Email" ref={register({required: true})} className="custom-input" type="email" />
                    </label>
                  </li>
                </ul>
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li>
                        <label>
                          Sürücü vesi:
                          <input name="DriverLicenseN" ref={register({required: true})} className="custom-input" type="text" />
                        </label>
                      </li>
                      <li>
                        <label>
                          Kategoriya:
                          <select name="Category" ref={register({required: true})} className="custom-input">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </label>
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li>
                        {/* <label>
                          Bitme tarixi:
                          <DatePicker
                            name="DriverLicenseEndDate"
                            className="custom-input w-100"
                            selected={startDate1}
                            onChange={(date) => setStartDate1(date)}
                          />
                        </label> */}
                      </li>
                      <li>
                        {/* <label>
                          Etibarname:
                          <DatePicker
                            name="IdTrust"
                            className="custom-input w-100"
                            selected={endDate1}
                            onChange={(date) => setEndDate1(date)}
                          />
                        </label> */}
                      </li>
                    </ul>
                  </Col>
                  <Col md={12}>
                    <label>Yaşasyış yeri ünvanı</label>
                    <textarea name="Address" ref={register({required: true})} rows="4" className="custom-textarea w-100" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter style={modulFooter}>
            <Button className="btn blue-button" onClick={toggle4}>
              Cancel
            </Button>
            <Button className="btn blue-button" type="submit">
              Save
            </Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Cars;
