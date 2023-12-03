import React from "react";
import Sidebar from "../Sidebar/sidebar";
import './dashboard.scss'
import Navbar from "../Navbar/navbar";
import Widget from "../Widgets/widgets";
import Chart from "../Chart/chart";
import Featured from "../Featured/featured";
import Tables from "../Table/table";

const Dashboard = () => {
    return (
      <div className='dashboard'>
        <Sidebar/>
        <div className="container">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div> 
          <div className="charts">
            <Featured/>
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables/>
        </div>
        </div>
      </div>
    );  
  };

  export default Dashboard; 