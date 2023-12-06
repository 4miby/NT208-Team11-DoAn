import React from "react";
import './users.scss'
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import UsersDataGrid from "../UsersDataGrid/usersdatagrid";

const Users = () => {
    return (
        <div className="user">
        <Sidebar/>
        <div className="userContainer">
          <Navbar/>
          <UsersDataGrid/>
        </div>
      </div>
    );  
};
  
export default Users; 