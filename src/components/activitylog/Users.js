import React, { useState } from 'react'
import { Row, Col, Table, Modal } from 'reactstrap'
import usericon1 from "../../assets/img/usericon1.svg"
import usericon2 from "../../assets/img/usericon2.svg"
import cross from "../../assets/img/cross.svg"
import { useForm } from "react-hook-form";
import dataPost from "../../api/data"

function Users() {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const toggle = () => setModal(!modal);
    const toggle1 = () => setModal1(!modal1)

    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data) => {
        var user = {
            action_type: "new",
            is_role: data.is_role,
            email: data.email,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            password: data.password,
            ConfirmPassword: data.confirm_password
        }


        console.log(user)

        dataPost.post("/user", {...user})
        .then((res) => {
            if (res.data.error === false) {
              console.log(res.data)
            } else {
              console.log(res.data)
            }
          });
    }


    return (
        <Row className="wrap-box m-0" style={{ height: "90vh" }}>
            <Col md={12}>
                <div>
                    <ul style={{padding: "34px 15px"}} className="list-unstyled d-flex align-items-center m-0">
                        <li onClick={toggle1} className="mr-1 d-flex align-items-center">
                            <div className="user-icon float-left" style={{ marginRight: "-10px", zIndex: "2" }}>
                            <img src={usericon2} alt="" />
                            </div>
                            <button className="blue-button pl-3">
                                Add User
                            </button>
                        </li>
                        <li onClick={toggle} className="d-flex align-items-center">
                            <button className="blue-button pr-3">Users
                         </button>
                            <div className="user-icon float-right" style={{ marginLeft: "-10px", zIndex: "2" }}>
                               
                                <img src={usericon1} alt="" />
                            </div>
                        </li>

                    </ul>
                </div>
                <div>
                    <Table bordered>
                        <thead className="table-header">
                            <tr>
                                <th>Username</th>
                                <th>Active</th>
                                <th>Email</th>
                                <th>Phone</th>

                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Col>
            <Modal style={{ borderRadius: "15px" }} className="modal-design" isOpen={modal} toggle={toggle} >
                <div style={{ background: "#5d7d94" }} className="custom-modal-header p-1 text-white d-flex align-items-center justify-content-between">
                    <span>List of devices</span>
                    <button onClick={toggle} style={{ background: "none", border: "none" }}>
                        <img src={cross} alt="cross" />
                    </button>
                </div>
                <div style={{ overflow: "scroll", overflowX: "hidden", height: "100px" }} className="custom-modal-body">
                    <form>
                        <ul className="list-unstyled ">
                            <li style={{ borderBottom: "1px solid #c8c9ca" }} className="pl-2">
                                <label className="d-flex align-items-center m-0">
                                    <input
                                        style={{ height: "16px", width: "16px" }}
                                        name="isGoing"
                                        type="checkbox"
                                        
                                    />
                                    <span className="pl-2">90-00-90</span>
                                </label>
                            </li>
                        </ul>
                    </form>
                </div>
                <div style={{ background: "#5d7d94" }} className="custom-modal-footer p-1 text-right">
                    <button onClick={toggle} className="blue-button mr-1">Cancel</button>
                    <button className="blue-button">Save</button>
                </div>
            </Modal>
            <Modal style={{ borderRadius: "15px" }} className="modal-design2" isOpen={modal1} toggle={toggle1} >
                <div className="custom-modal w-100">
                    <div className="custom-modal-header d-flex align-items-center justify-content-between">
                        <span>Add User</span>
                        <button onClick={toggle1} style={{ background: "none", border: "none" }}>
                            <img src={cross} alt="cross" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ height: "auto" }} className="custom-modal-body p-2">        
                            <ul className="list-unstyled setUser">
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Select role</span>
                                        <select name="is_role" ref={register({required: true})} placeholder="Select Role" className="custom-input">
                                            <option value="volvo"></option>
                                            <option value="saab"></option>
                                            <option value="mercedes"></option>
                                            <option value="audi"></option>
                                        </select>
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Name</span>
                                        <input name="name" ref={register({required:true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Surname</span>
                                        <input name="surname" ref={register({required: true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Phone</span>
                                        <input name="phone" ref={register({required: true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">E-mail</span>
                                        <input name="email" ref={register({required: true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Password</span>
                                        <input name="password" ref={register({required: true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label style={{ flexDirection: "column" }} className="w-100 d-flex align-items-start m-0">
                                        <span className="pl-2">Confirm password</span>
                                        <input name="confirm_password" ref={register({required: true})} className="custom-input" type="text" />
                                    </label>
                                </li>
                                <li className="mb-2" >
                                    <label className="d-flex align-items-center m-0">
                                        <input name="status" ref={register} defaultValue={false}  style={{ height: "16px", width: "16px", marginRight: "5px" }} type="checkbox" />
                                        <span>Active</span>
                                    </label>
                                </li>
                            </ul>
                    </div>
                    <div className="custom-modal-footer">
                        <button onClick={toggle1} className="blue-button">Cancel</button>
                        <button type="submit" className="blue-button">Save</button>
                    </div>
                    </form>
                </div>
            </Modal>
        </Row >
    )
}

export default Users
