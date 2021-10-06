import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FaqList from "./FaqList"

function Faq() {


    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    return (
        <div className="activity">
            <Container fluid={true}>
                <Row>
                    <Col md={6} className="pt-3">
                        <div className="wrap-box">
                            <div className="box-header text-left">
                                <span>FAQ</span>
                            </div>
                            <div className="p-4 wrap-box" style={{ height: "85vh", overflow: "scroll", overflowX: "hidden" }}>
                                <FaqList />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="pt-3">
                        <div className="wrap-box" >
                            <div className="box-header text-left">
                                <span>Asq Question</span>
                            </div>
                            <div className="p-4" style={{ height: "85vh", paddingTop: "20px" }}>
                                <form>
                                    <label style={style}>
                                        Name:
                                        <input className="custom-input" style={{ width: "300px" }} type="text" />
                                    </label>
                                    <label style={style}>
                                        E-mail:
                                        <input className="custom-input" style={{ width: "300px" }} type="text" />
                                    </label>
                                    <label style={style}>
                                        Subject:
                                        <input className="custom-input" style={{ width: "300px" }} type="text" />
                                    </label>
                                    <label style={{ display: "flex", flexDirection: "column" }}>
                                        <p>Question:</p>
                                        <textarea className="custom-textarea" rows="4" style={{ width: "100%", borderRadius: "10px" }}>

                                        </textarea>
                                    </label>
                                    <div className="w-100 text-right">
                                        <button className="custom-button m-2">Clear</button>
                                        <button className="custom-button m-2">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Faq
