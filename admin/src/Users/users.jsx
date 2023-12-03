import React from "react";
import './users.scss'
import Sidebar from "../Admin/Sidebar/sidebar";
import Navbar from "../Admin/Navbar/navbar";

const Users = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
        </div>
      </div>
    );  
};
  
export default Users; 