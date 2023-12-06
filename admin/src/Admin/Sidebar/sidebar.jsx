import React from "react";
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Wanderest</span>
        </div>
        <hr/>
        <div className="lists">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/dashboard" style={{textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <li>
                    <SensorDoorOutlinedIcon className="icon"/>
                    <span>Rooms</span>
                </li>
                <li>
                    <PollOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">USER</p>
                <Link to="/info" style={{textDecoration: "none"}}>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                </Link>
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
    
    )
}

export default Sidebar