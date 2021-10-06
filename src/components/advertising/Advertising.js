import React, {useState} from 'react'
import { Col, Row, Container, Toast, ToastBody, ToastHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

function Advertising() {
    const [modal, setModal] = useState(false);
    const [_modal, _setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    const toggleAdd = () => _setModal(!_modal);



    return (
        <div className="activity">
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header add-header text-left">
                                <span>Senari</span>
                                <button onClick={toggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                    <span>Add Senari</span>
                                </button>
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
                                <Row>
                                    <Col lg={6} className="add-form">
                                        <ul className="list-unstyled">
                                            <li>
                                                <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Model name:
                                                <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                </label>
                                            </li>
                                            <li>
                                                <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Serial number
                                                <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                </label>
                                            </li>
                                            <li>
                                                <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        SIM number
                                                <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                </label>
                                            </li>
                                    </ul>
                                    </Col>
                                    <Col lg={12} className="add-form">
                                       <ul className="list-unstyled w-100 d-flex flex-column align-items-center">
                                                <li>
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Reklam Mətini:
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        Car number: 
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label style={{ marginBottom: "25px" }} className="text-right d-flex justify-content-end align-items-center w-100">
                                                        SIM number
                                                    <input style={{ width: "60%", marginLeft: "20px" }} className="custom-input" type="text" />
                                                    </label>
                                                </li>
                                    </ul>
                                    </Col>
                                    <Col lg={6} className="add-selection" >
                                    <div className="my-2 rounded add-list">
                                        <Toast className="adver-list">
                                            <ToastHeader className="add-tab-header">
                                                    <span>Reklam</span>
                                                    <button >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                                        <span>Add Ad</span>
                                                    </button>
                                            </ToastHeader>
                                            <ToastBody>
                                                <ul>
                                                    <li>test Reklam</li>
                                                </ul>
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                    </Col>
                                    <Col lg={6} className="add-selection" >
                                    <div className="my-2 rounded add-list">
                                        <Toast className="adver-list">
                                            <ToastHeader>
                                                Car list
                                            </ToastHeader>
                                            <ToastBody>
                                                <ul>
                                                    <li>90-00-90</li>
                                                </ul>
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                    </Col>
                                    <Col lg={12}>
                                    <form>
                                        <ul>
                                            <li className="text-right pt-3">
                                                <button className="blue-button">CANCEL</button>
                                                    {" "}
                                                <button onClick={toggleAdd} className="blue-button">Save</button>
                                            </li>
                                        </ul>
                                    </form>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal className="modal-w" isOpen={_modal} toggle={toggleAdd}>
                    <ModalHeader toggle={toggleAdd}>Modal title</ModalHeader>
                    <ModalBody className="verify-add text-center d-flex flex-column justify-content-center">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 24 24"><path d="M21.855 10.303c.086.554.145 1.118.145 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.348 0 4.518.741 6.304 1.993l-1.421 1.457c-1.408-.913-3.083-1.45-4.883-1.45-4.963 0-9 4.038-9 9s4.037 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.865-1.902zm-.951-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
                        </div>
                        <h2 className="text-white mt-4 ">Reklam müvəffəqiyyətlə Göndərildi</h2>
                        <h6 className="mb-4 text-white">Reklamınız 90 dəqiqə ərzində tracker-ə əlavə olunacaq</h6>
                        <div className="mt-4">
                        <Button color="primary" onClick={toggleAdd}>Bağla</Button>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggleAdd}>Do Something</Button>{' '}
                    
                    </ModalFooter>
                </Modal>
          
        </div>
    )
}

export default Advertising
