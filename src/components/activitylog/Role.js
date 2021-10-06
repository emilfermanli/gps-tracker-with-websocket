import React, { useState } from "react";
import { Row, Col, Table, Modal, FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import usericon1 from "../../assets/img/usericon1.svg";
import cross from "../../assets/img/cross.svg";
import { useForm } from "react-hook-form";
import dataPost from "../../api/data";
import { getNewRole } from "../../redux/actions/userAction";

function Role() {
  const { register, handleSubmit, errors } = useForm();
  const [adminRole, setAdminRole] = useState(false)
  const dispatch = useDispatch();
  const roleList = useSelector((state) => state.roleDataReducer);

  console.log(roleList);

  

  const onSubmit = (data) => {

    var newGroups

    if (adminRole === true) {
       newGroups = {
        Action: "new",
        RoleName: data.RoleName,
        Admin: true,
        Basic: true,
        Events: true,
        Balance: true,
        RoleManagement: true,
        UserManagement:true,
        ActivityLog: true,
        TransactionHistory: true,
        DriversManagement: true,
        VehiclesManagement: true,
        Reports: true,
        Activation: true,
        Settings:true,
      };
    } else {
       newGroups = {
        Action: "new",
        RoleName: data.RoleName,
        Admin: data.Admin === "true" ? true : false,
        Basic: data.Basic === "true" ? true : false,
        Events: data.Events === "true" ? true : false,
        Balance: data.Balance === "true" ? true : false,
        RoleManagement: data.RoleManagement === "true" ? true : false,
        UserManagement: data.UserManagement === "true" ? true : false,
        ActivityLog: data.ActivityLog === "true" ? true : false,
        TransactionHistory: data.TransactionHistory === "true" ? true : false,
        DriversManagement: data.DriversManagement === "true" ? true : false,
        VehiclesManagement: data.VehiclesManagement === "true" ? true : false,
        Reports: data.Reports === "true" ? true : false,
        Activation: data.Activation === "true" ? true : false,
        Settings: data.Settings === "true" ? true : false,
      };
    }

    console.log(newGroups);

    dataPost.post("/role", { ...newGroups }).then((res) => {
      if (res.data.error === false) {
        dispatch(getNewRole(res.data.data));
      } else {
        console.log(res.data);
      }
    });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  const handleAdmin = () => {
    setAdminRole(!adminRole)
    
  }

  return (
    <Row className="wrap-box m-0" style={{ height: "90vh" }}>
      <Col md={12}>
        <div style={{ padding: "34px 15px" }}>
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li onClick={toggle} className="mr-1 d-flex align-items-center">
              <div
                className="user-icon float-left"
                style={{ marginRight: "-10px", zIndex: "2" }}
              >
                <img src={usericon1} alt="" />
              </div>
              <button className="blue-button pl-3">Add new role</button>
            </li>
          </ul>
        </div>
        <div>
          <Table bordered>
            <thead className="table-header">
              <tr>
                <th>Name</th>
                <th>Allowed access</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {roleList &&
                roleList.map((index, key) => (
                  <tr key={key}>
                    <td>{index.RoleName}</td>
                    <td>{console.log(index[key])}</td>
                  </tr>
                ))
                }
            </tbody>
          </Table>
        </div>
      </Col>
      <Modal className="modal-design2" isOpen={modal} toggle={toggle}>
        <div className="custom-modal">
          <div className="custom-modal-header d-flex align-items-center justify-content-between">
            <span>Add new role</span>
            <button
              onClick={toggle}
              style={{ background: "none", border: "none" }}
            >
              <img src={cross} alt="cross" />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ height: "auto" }} className="custom-modal-body p-2">
              <ul className="list-unstyled setUser">
                <li>
                  <label
                    style={{ flexDirection: "column" }}
                    className="d-flex align-items-start m-0"
                  >
                    <span>Role name</span>
                    <input
                      ref={register({ required: true })}
                      name="RoleName"
                      className="custom-input"
                      type="text"
                    />
                    {errors.RoleName && (
                      <span className="text-danger">bos buraxılmamalıdı</span>
                    )}
                  </label>
                </li>
                <li>
                 
                  <FormGroup>
                  <input
                      ref={register}
                      onChange={handleAdmin}
                      value="true"
                      name="Admin"
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="adminY"
                      type="checkbox"
                    />

                  <label htmlFor="adminY" className="mt-3 mb-1">Admin</label>
                    
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      ref={register}
                      defaultChecked={adminRole === true ? false : true}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      value="true"
                      name="Basic"
                      id="basicYes"
                      type="checkbox"
                    />
                    <label className="mt-3 mb-1">Basic</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      disabled={adminRole === true ? true : false}
                      ref={register}
                      className="mr-1"
                      style={{ width: "auto" }}
                      name="Events"
                      value="true"
                      id="Events"
                      type="checkbox"
                    />
                   <label className="mt-3 mb-1">Events</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup >
                    <input
                      disabled={adminRole === true ? true : false}
                      ref={register}
                      className="mr-1"
                      style={{ width: "auto" }}
                      name="Balance"
                      value="true"
                      id="BalanceY"
                      type="checkbox"
                    />
                   <label className="mt-3 mb-1">Balance</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="RoleManagementY"
                      name="RoleManagement"
                      value="true"
                      type="checkbox"
                    />
                   <label className="mt-3 mb-1">RoleManagement</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="UserManagementY"
                      name="UserManagement"
                      value="true"
                      type="checkbox"
                    />
                   <label className="mt-3 mb-1">UserManagement</label>
                  </FormGroup>
                </li>
                <li>
                 
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="ActivityLogY"
                      name="ActivityLog"
                      value="true"
                      type="checkbox"
                    />
                  <label className="mt-3 mb-1">ActivityLog</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup >
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="TransactionHistoryY"
                      name="TransactionHistory"
                      value="true"
                      type="checkbox"
                    />
                  <label className="mt-3 mb-1">TransactionHistory</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="DriversManagementY"
                      name="DriversManagement"
                      value="true"
                      type="checkbox"
                    />
                   <label className="mt-3 mb-1">DriversManagement</label>
                  </FormGroup>
                </li>
                <li>
                 
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="VehiclesManagementY"
                      name="VehiclesManagement"
                      value="true"
                      type="checkbox"
                    />
                     <label className="mt-3 mb-1">VehiclesManagement</label>
                  </FormGroup>
                </li>
                <li>
                  
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="ReportsY"
                      name="Reports"
                      value="true"
                      type="checkbox"
                    />
                    <label className="mt-3 mb-1">Reports</label>
                  </FormGroup>
                </li>
                <li>
                
                  <FormGroup>
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="ActivationY"
                      name="Activation"
                      value="true"
                      type="checkbox"
                    />
                    <label className="mt-3 mb-1">Activation</label>
                  </FormGroup>
                </li>
                <li>
                 
                  <FormGroup >
                    <input
                      ref={register}
                      disabled={adminRole === true ? true : false}
                      className="mr-1"
                      style={{ width: "auto" }}
                      id="SettingsY"
                      name="Settings"
                      value="true"
                      type="checkbox"
                    />
                    <label className="mt-3 mb-1">Settings</label>
                  </FormGroup>
                </li>
              </ul>
            </div>
            <div className="custom-modal-footer">
              <button onClick={toggle} className="blue-button">
                Cancel
              </button>
              <button type="submit" className="blue-button">
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </Row>
  );
}

export default Role;
