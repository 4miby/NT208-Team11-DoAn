import React from "react";
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
                <li>
                    <DashboardIcon className="icon"/>
                    <span className="features">Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span className="features">Users</span>
                </li>
                <li>
                    <SensorDoorOutlinedIcon className="icon"/>
                    <span className="features">Rooms</span>
                </li>
                <li>
                    <PollOutlinedIcon className="icon"/>
                    <span className="features">Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span className="features">Notifications</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span className="features">Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span className="features">Logout</span>
                </li>
            </ul>
        </div>
    </div>
    
    )
}

export default Sidebar