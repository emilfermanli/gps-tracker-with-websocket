import React from 'react'
import { Col, Row, Container } from "reactstrap"
import CarNotes from "./CarNotes"

function Regulation() {

    return (
        <div className="activity">
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Car List</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>
                                <button style={{ borderRadius: "0px", width: "100%" }} className="blue-button">90-00-90</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={9} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Regulation</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>
                                <Row className="pt-2">
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər"/>
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər"/>
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər" />
                                    </Col>
                                    <Col lg={4}>
                                        <CarNotes params="Parametrlər"/>
                                    </Col>
                                    <Col lg={12} className="text-right pt-3">
                                        <button className="blue-button">Save</button>
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

export default Regulation
