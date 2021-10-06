import React, { useState } from 'react'
import { Row, Col, Table } from 'reactstrap'
import DatePicker from "react-datepicker";


function ActivityLog() {


    const [startDate, setStartDate] = useState(new Date());


    return (
        <Row className="wrap-box m-0">
            <Col md={12}>
                <div className="action-button">
                    <form className="w-100" style={{ marginRight: "150px" }}>
                        <ul className="list-unstyled d-flex justify-content-between pr-5 w-100">
                            <li>
                                <label>
                                    ActivityLog
                                </label>
                                <br />
                                <select className="custom-input">
                                    <option value="volvo"></option>
                                    <option value="saab"></option>
                                    <option value="mercedes"></option>
                                    <option value="audi"></option>
                                </select>

                            </li>
                            <li>
                                <label>
                                    To date:
                                </label>
                                <br />
                                <DatePicker
                                    className="custom-input w-100"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />

                            </li>
                            <li>
                                <label>
                                    Action type
                                </label>
                                <br />
                                <select className="custom-input">
                                    <option value="volvo"></option>
                                    <option value="saab"></option>
                                    <option value="mercedes"></option>
                                    <option value="audi"></option>
                                </select>

                            </li>
                            <li>
                                <label>
                                    User
                                </label>
                                <br />
                                <select className="custom-input">
                                    <option value="volvo"></option>
                                    <option value="saab"></option>
                                    <option value="mercedes"></option>
                                    <option value="audi"></option>
                                </select>

                            </li>
                            <li className="d-flex align-items-end" style={{paddingBottom: "8px"}}>
                                <button className="blue-button">Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
                <div>
                    <Table bordered>
                        <thead className="table-header">
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Action type</th>
                                <th>Log info</th>
                                <th>Etc</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr>
                                <th scope="row">1</th>
                                <td>tark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    )
}

export default ActivityLog
