import React, { useContext }  from "react";
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DomainIcon from '@mui/icons-material/Domain';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from 'axios'

const Sidebar = () => {
    const {dispatch} = useContext(AuthContext);
    const handleClick = async ()=>{
        dispatch({type:"LOGOUT"});
        await axios.get("/auth/logout");
    }
    return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Wanderest</span>
        </div>
        <hr/>
        <div className="lists">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
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
                <Link to="/hotels" style={{textDecoration: "none"}}>
                    <li>
                        <DomainIcon className="icon"/>
                        <span>Hotels</span>
                    </li>
                </Link>
                <Link to="/rooms" style={{textDecoration: "none"}}>
                    <li>
                        <SensorDoorOutlinedIcon className="icon"/>
                        <span>Rooms</span>
                    </li>
                </Link>
                <li>
                    <PollOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">LOGOUT</p>
                
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span onClick={handleClick}>Logout</span>
                </li>
            </ul>
        </div>
    </div>
    
    )
}

export default Sidebar