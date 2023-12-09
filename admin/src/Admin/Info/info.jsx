import React from "react";
import './info.scss'
import Sidebar from "../components/Sidebar/sidebar";
import Navbar from "../components/Navbar/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Info = () => {
  const [file, setFile] = useState("");
  return (
    <div className="info">
      <Sidebar/>
      <div className="infoContainer">
        <Navbar/>
        <div className="top">
          <h1>Admin Info</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input 
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="sujin"/>   
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="Su Jin"/>   
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="jin@gmail.com"/>   
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="0358 349 839"/>   
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />   
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton St. 216 NewYork"/>   
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Viet Nam"/>   
              </div>
              <button>Change Info</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );  
};
  
export default Info; 