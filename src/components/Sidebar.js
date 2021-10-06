import React, { useState } from 'react'
import logo from "../assets/img/logo.png"
import menuLogo from "../assets/img/menu.png"
import profile from "../assets/img/profile.svg"
import { Switch, Route } from "react-router-dom"
import {Dropdown, DropdownToggle,DropdownItem, DropdownMenu,} from "reactstrap"
import { Link } from "react-router-dom"
import Activity from "./activity-page/Activity"
import Faq from './Faq/Faq'
import Event from "./eventpage/Event"
import Cars from './Cars/Cars'
import Activication from "./activication/Activication"
import MainPage from './mainPage/MainPage'
import ActivityLogPages from "./activitylog/ActivityLogPages"
import Advertising from './advertising/Advertising'
import Regulation from './Cars/Regulation'
import {useSelector} from "react-redux"

function Sidebar() {

    const [toggle, setToggle] = useState(true)
    const [carbox, setCarBox] = useState(true)
  
    const select = useSelector(state => state.userDataReducer)
    

    const sidebar = {
        width: toggle ? "250px" : "80px" ,
        // left: toggle ? "0" : "-180px",
        position: "relative",
        zIndex: 96
    }

    const handleClick = () => {
        setToggle(!toggle)
        setCarBox(!carbox)
    }

    // const menuClick = () => {
    //     setToggleList(!toggleList)
    // }

    // const userDrop = {
    //     justifyContent: !toggle ? "flex-end" : "space-between",
    //     width: "100%",
    //     padding: !toggle ? "10px 20px" : "10px 15px",
    //     color: "white",

    // }


    const listItem = {
        transition: "0.4s",
        paddingRight: "15px",
        cursor: "pointer",
        justifyContent: toggle ? null : "flex-end",
        marginBottom: toggle ? null : "20px"
    }
    const miniMenu = {
        height: toggle ? null : "200px !important",
        display: toggle ? null : "block"
    }
    const listSpan = {
        transition: "0.4s",
        display: toggle ? null : "none"
    }


    const menuList = {
        position: "absolute",
        transition: "0.4s",
        width: "100%",
    }


    const [toggleList, setToggleList] = useState(false)

    const tog = () =>{setToggleList(!toggleList)}
    
    

    return (
        <div>
            <div className="sidebar" style={sidebar}>
                <div className="sidebar-header custom-flex" style={{ justifyContent: "space-between" }}>
                    <img style={toggle ? {transition: "0.8s",height: "20px"} : {transition: "0.8s",display: "none"}}  src={logo} alt="logo" />
                    <button onClick={handleClick} className="menu-button">
                        <img height="30px" src={menuLogo} alt="menu" />
                    </button>
                </div>
                <div id="nav">        
                    <div style={menuList} className="menu-drop" >
                        <ul style={miniMenu} className={`list-unstyled menu-list`}>
                            <li style={listItem} className="side-mini-menu d-flex">
                                <Dropdown direction="right" isOpen={toggleList} toggle={tog}>
                                <DropdownToggle className="d-flex align-items-center justify-content-center" caret>
                                <img height="30" width="30" src={profile} alt="user" />    
                                <span style={listSpan}>{!select.name ? select.email : select.name}</span>
                                </DropdownToggle>
                                <DropdownMenu style={{ left: "150px !important"}} className="drop-itm">
                                    <DropdownItem>
                                        <Link to="/activity">
                                        Account
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/activitylog">
                                        Activity
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/settings">
                                            Settings
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/logout">
                                        Logout
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                            </li>
                                <li style={listItem} className="custom-flex">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" /></svg>
                                        <span style={listSpan}>İzləmə</span>
                                    </Link>
                                </li>
                                <li style={listItem} className="custom-flex">
                                    <Link to="/event">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" /></svg>
                                        <span style={listSpan}>Raporlar</span>
                                    </Link>
                                </li>
                            
                            
                                <li style={listItem} className="custom-flex">
                                    <Link to="/cars">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z" /></svg>
                                    <span style={listSpan}>Masinlar</span>
                                    </Link>
                                </li>
                                <li style={listItem} className="custom-flex">
                                    <Link to="/advertising">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm17.28-1.492h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-18 0h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm6-11c-3.037 0-5.5 2.462-5.5 5.5 0 3.037 2.463 5.5 5.5 5.5s5.5-2.463 5.5-5.5c0-3.038-2.463-5.5-5.5-5.5zm.306 1.833h-.612v.652c-1.188.164-1.823.909-1.823 1.742 0 1.49 1.74 1.717 2.309 1.982.776.347.632 1.069-.07 1.229-.609.137-1.387-.103-1.971-.33l-.278 1.005c.546.282 1.201.433 1.833.444v.61h.612v-.644c1.012-.142 1.834-.7 1.833-1.75 0-1.311-1.364-1.676-2.41-2.167-.635-.33-.555-1.118.355-1.171.505-.031 1.024.119 1.493.284l.221-1.007c-.554-.168-1.05-.245-1.492-.257v-.622zm8.694 2.167c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-18 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm5-11.316v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-1 6.316h-6c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414zm-3-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z"/></svg>
                                    <span style={listSpan}>Advertising</span>
                                    </Link>
                                </li>
                            
                        </ul>
                    </div>
                </div>
                <div  className="menu-bottom w-100" style={{ position: "absolute", bottom: 0 }}>
                    <ul className="list-unstyled">
                            <li style={listItem} className="custom-flex">
                                <Link to="/activication">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 16c1.361-5.928 8-7 8-7v-2l4 3.982-4 4.018v-2s-5.102-.104-8 3zm-4-4c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10-10 4.486-10 10zm22 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"/></svg>
                                <span style={listSpan}> Cihaz Aktivizasiya</span>
                                </Link>        
                            </li>
                            <li style={listItem} className="custom-flex">
                                <Link to="/event">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/></svg>
                                <span style={listSpan}>Bildirişlər</span>
                                </Link>
                            </li>
                            <li style={listItem} className="custom-flex">
                                <Link to="/regulation">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-11.036 0h-1.886c-.34-.957-.437-1.571-1.177-1.878h-.001c-.743-.308-1.251.061-2.162.494l-1.333-1.333c.427-.899.804-1.415.494-2.163-.308-.74-.926-.839-1.878-1.177v-1.886c.954-.339 1.57-.437 1.878-1.178.308-.743-.06-1.248-.494-2.162l1.333-1.333c.918.436 1.421.801 2.162.494l.001-.001c.74-.307.838-.924 1.177-1.877h1.886c.34.958.437 1.57 1.177 1.877l.001.001c.743.308 1.252-.062 2.162-.494l1.333 1.333c-.435.917-.801 1.421-.494 2.161v.001c.307.739.915.835 1.878 1.178v1.886c-.953.338-1.571.437-1.878 1.178-.308.743.06 1.249.494 2.162l-1.333 1.333c-.92-.438-1.42-.802-2.157-.496-.746.31-.844.926-1.183 1.88zm-.943-4.667c-1.289 0-2.333-1.044-2.333-2.333 0-1.289 1.044-2.334 2.333-2.334 1.289 0 2.333 1.045 2.333 2.334 0 1.289-1.044 2.333-2.333 2.333zm-8.021-5.333h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z"/></svg>
                                    <span style={listSpan}> Cihaz tənzimləmə</span>
                                </Link>
                            </li>
                            <li style={listItem} className="custom-flex">
                                <Link to="/faq">
                                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" /></svg>
                                    <span style={listSpan}>Kömək</span>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
            <div style={toggle ? { 
                width: "calc(100% - 250px)",
                position: "relative",
                float: "left",
                padding: "15px 0px",
                transition: "0.4s"
                } :  {
                width: "calc(100% - 80px)",
                position: "relative",
                float: "left",
                padding: "15px 0px",
                transition: "0.4s"
                }}>
                <Switch>
                    <Route exact path="/">
                        <MainPage carbox={carbox}/>
                    </Route>
                    <Route path="/activity">
                        <Activity />
                    </Route>
                    <Route path="/faq">
                        <Faq />
                    </Route>
                    <Route path="/cars">
                        <Cars />
                    </Route>
                    <Route path="/activication">
                        <Activication />
                    </Route>
                    <Route path="/activitylog">
                        <ActivityLogPages />
                    </Route>
                    <Route path="/event">
                        <Event />
                    </Route>
                    <Route path="/Advertising">
                        <Advertising />
                    </Route>
                    <Route path="/regulation">
                        <Regulation />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar
