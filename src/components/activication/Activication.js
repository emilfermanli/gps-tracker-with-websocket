import React from 'react'
import { Col, Row, Container } from "reactstrap"
import ActiveNote from './ActiveNote'

function Activication() {


    return (
        <div className="activity">
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Models</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>
                                <button style={{ borderRadius: "0px", width: "100%" }} className="blue-button">Simple model name 1</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Activation</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>
                                <Row className="pt-5">
                                    <Col md={6}>
                                        <form>
                                            <ul className="list-unstyled">
                                                <li >
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Model name:
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li >
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        İmei Number
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li >
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        SIM number
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li >
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Password
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li >
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Apn
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li className="text-right pt-3">
                                                    <button className="blue-button">CANCEL</button>
                                                    {" "}
                                                    <button className="blue-button">ACTIVATE</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </Col>
                                    <Col md={6}>
                                        <ActiveNote />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Activication
