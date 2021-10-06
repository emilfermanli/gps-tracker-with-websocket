import React,{useState} from 'react'
import { Container, Col, Row } from "reactstrap"
import DatePicker from "react-datepicker";
import HistoryTable from './HistoryTable';

function Activity() {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    return (
        <div className="activity" style={{paddingBottom: "0px"}}>
            <Container fluid={true}>
                <Row>
                    <Col md={6}>
                        <Col md={12} className="act-mini">
                        <div className="wrap-box">
                            <div className="box-header">
                                <span>Account info</span>
                            </div>
                            <div className="box-inside" style={{height: "32vh"}}>
                                <ul className="list-unstyled text-left">
                                    <li>
                                        Username:
                                </li>
                                    <li>
                                        ID:
                                </li>
                                    <li>
                                        Balance:
                                </li>
                                    <li>
                                        Bonus:
                                </li>
                                    <li>
                                        <a className="text-decoration-none" href="/">
                                            Add Balance
                                        </a>
                                    </li>
                                </ul>
                                <div className="text-left">
                                    <form>
                                        <label>
                                            <input placeholder="demo@gmail.com" className="custom-input" type="text" />
                                            <button style={{margin: "0px 10px"}} className="custom-button">Save</button>
                                        </label>
                                        <span className="small text-danger">low balance alert email to sent</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </Col>
                        
                        <Col md={12} className="act-mini">
                        <div className="wrap-box">
                            <div className="box-header">
                                <span>Account settings</span>
                            </div>
                            <div className="box-inside" style={{height: "50vh"}}>
                                <Row className="text-left">
                                    <Col md={4}>
                                        <form>
                                            <ul className="list-unstyled acc-setting text-center">
                                                <li>
                                                    <span>Time zone</span>
                                                </li>
                                                <li>
                                                    <select className="custom-input">
                                                        <option value="volvo"></option>
                                                        <option value="saab"></option>
                                                        <option value="mercedes"></option>
                                                        <option value="audi"></option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <span>Language</span>
                                                </li>
                                                <li>
                                                    <select className="custom-input">
                                                        <option value="volvo"></option>
                                                        <option value="saab"></option>
                                                        <option value="mercedes"></option>
                                                        <option value="audi"></option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <span>Measurment</span>
                                                </li>
                                                <li>
                                                    <select className="custom-input">
                                                        <option value="volvo"></option>
                                                        <option value="saab"></option>
                                                        <option value="mercedes"></option>
                                                        <option value="audi"></option>
                                                    </select>
                                                </li>
                                                <li className="text-center">
                                                    <button className="blue-button">Save</button>
                                                </li>

                                            </ul>
                                        </form>
                                    </Col>
                                    <Col md={3}>
                                    </Col>
                                    <Col md={5} >
                                        <form>
                                        <ul className="list-unstyled">
                                            <li>
                                                Change password
                                            </li>
                                            <li>
                                                <input className="custom-input" type="password" />
                                            </li>
                                            <li>
                                                Verify password
                                                
                                            </li>
                                            <li>
                                                <input className="custom-input" type="password" />
                                            </li>
                                            <li>
                                            <button style={{marginTop: "10px", marginBottom: "0px"}} className="custom-button change-password">Change</button>
                                            </li>
                                        </ul>
                                        </form>
                                    </Col>
                                    <span style={{ color: "#9e9e9f", fontSize: "11px", marginLeft: "0px", paddingLeft: "15px" }} className="font-sm"><strong>*Storage size:</strong>1 mb is med</span>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    </Col>
                    <Col md={6} >
                        <div className="wrap-box">
                            <div className="box-header">
                                <span>Trousaction history</span>
                            </div>
                            <div style={{height: "88.50vh"}}>
                                <Col md={12} className="text-center mb-4">
                                    <div className="text-left">
                                    <span>Data</span>
                                    </div>
                                    <Row>
                                    <Col md={9}>
                                        
                                    <div className="mb-2">
                                        <Row>
                                        <Col md={6}>
                                                <DatePicker className="custom-input w-100" 
                                                selected={startDate} 
                                                onChange={date => setStartDate(date)} />
                                            </Col>
                                            <Col md={6}>
                                                <DatePicker className="custom-input w-100" 
                                                selected={endDate} 
                                                onChange={date => setEndDate(date)} />
                                        </Col>
                                        </Row>
                                    </div>
                                        <input placeholder="search" type="search" className="w-100 custom-input" />
                                        </Col>
                                        <Col md={3} className="custom-flex" style={{justifyContent: "center"}}>
                                            <button className="blue-button w-100 p-1"><span>Show</span></button>
                                        </Col>
                                     </Row>
                                </Col>
                                <HistoryTable />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Activity
