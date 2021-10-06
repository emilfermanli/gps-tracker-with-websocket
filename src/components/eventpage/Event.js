import React from 'react'
import { Container, Row, Col, FormGroup, Label, Input, Form } from 'reactstrap'

function Event() {
    return (
        <div className="activity">
            <Container fluid={true}>
                <Row>
                    <Col md={12} xl={12} lg={12} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Events</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>

                            </div>
                        </div>
                    </Col>
                    {/* <Col md={3} xl={3} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>Events rules</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>

                            </div>
                        </div>
                    </Col> */}
                    {/* <Col md={6} xl={6} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>New rules</span>
                            </div>
                            <div className="p-2 " style={{ height: "85vh", overflow: "scroll", overflowX: "hidden", overflowY: "hidden" }}>
                                <Form>
                                    <Row className="h-100">
                                        <Col md={6}>
                                            <ul className="p-0">
                                                <li>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Rule name:</Label>
                                                        <Input className="custom-input w-100" type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                                    </FormGroup>
                                                </li>
                                                <li>
                                                    <FormGroup>
                                                        <Label for="exampleEmail1">Description:</Label>
                                                        <Input className="custom-input w-100" type="text" name="email" id="exampleEmail1" placeholder="with a placeholder" />
                                                    </FormGroup>
                                                </li>
                                                <li>
                                                    <FormGroup>
                                                        <Label for="exampleSelectMulti">Car list</Label>
                                                        <Input style={{
                                                            height: "250px", overflowX: "hidden",
                                                            overflowY: "hidden"
                                                        }} className="custom-input w-100" type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Input>
                                                    </FormGroup>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleSelectMulti2">Car list</Label>
                                                <Input style={{
                                                    height: "400px",
                                                    overflowX: "hidden",
                                                    overflowY: "hidden"
                                                }} className="custom-input w-100" type="select" name="selectMulti" id="exampleSelectMulti2" multiple>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="text-right event-bottom">
                                        <button className="blue-button ml-1">Cancel</button>
                                        <button className="blue-button ml-1">Save</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Event
