import React from 'react'
import { Container } from 'reactstrap'
import Users from "./Users"
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Role from './Role';
import ActivityLog from './ActivityLog';




function ActivityLogPages() {

    const active = {
        background: "white",
        boderBottom: "none",
        border: "2px solid white",
        borderBottom: "0px",
        borderRadius: "0px",
        borderTopRightRadius: "5px",
        borderTopLeftRadius: "5px"
    }

    const deactive = {
        background: "transparent"
    }

    let { path, url } = useRouteMatch();

    let loc = window.location.pathname


    return (
        <div className="activity">
            <Container fluid={true}>
                <Link to={`${url}`}>
                    <button style={loc === "/activitylog" ? active : deactive} className="btn">User</button>
                </Link>
                <Link to={`${url}/activitylog`}>
                    <button style={loc === "/activitylog/activitylog" ? active : deactive} className=" btn" >Activity log</button>
                </Link>
                <Link to={`${url}/role`}>
                    <button style={loc === "/activitylog/role" ? active :deactive} className=" btn" >Role meng.</button>
                </Link>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Users />
                    </Route>
                    <Route path={`${path}/:topicId`} >
                        <System exact />
                    </Route>
                </Switch>
            </Container>
        </div>
    )

}

function System() {

    let { topicId } = useParams();


    if (topicId === "role") {
        return (<Role />)
    }
    if (topicId === "activitylog") {
        return (<ActivityLog />)
    }

}

export default ActivityLogPages
