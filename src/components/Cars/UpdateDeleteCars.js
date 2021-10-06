import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

function UpdateDeleteCars({modal5, toggle5, department,modulFooter,modulColor}) {

    const { register, handleSubmit, errors,control } = useForm();
    

    return (
        <div>
             <Modal
          isOpen={modal5}
          toggle={toggle5}
        //   className={`modal-color ${className}`}
        >
          <ModalHeader toggle={toggle5}>New Vehivle</ModalHeader>
          <form onSubmit={handleSubmit()}>
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
                      Qey.Niş:
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
            <Button className="btn blue-button" onClick={toggle5}>
              Cancel
            </Button>
            <Button className="btn blue-button" type="submit">
              Save
            </Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
    )
}

export default UpdateDeleteCars
