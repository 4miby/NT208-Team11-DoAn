import React from 'react'
import './list.scss'
import Sidebar from '../components/Sidebar/sidebar';
import Navbar from '../components/Navbar/navbar';
import Datatable from '../components/DataTable/Datatable';
const List = ({columns}) => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable columns={columns}/>
    </div>
  </div>
  );
}

export default List