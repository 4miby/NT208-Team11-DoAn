import React from "react";
import './info.scss'
import Sidebar from "../components/Sidebar/sidebar";
import Navbar from "../components/Navbar/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
const Info = ({ inputs }) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [info, setInfo] = useState({});
  const { data, loading, error } = useFetch(`/users/${id}`);
  const [file, setFile] = useState();
  const [img,setImg] = useState();
  useEffect(()=>{
    const userimg = data.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
    setImg(userimg);
  });
  // Xử lý nhập liệu
  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info);
  }
  // Xử lý bấm nút gửi
  const handleClick = async e=>{
    e.preventDefault();
    // Tạo Form data để gửi ảnh
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset","upload");
    try{
      // Post ảnh lên cloudinary và nhận về url
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/amiby/image/upload",data);
      const {url} = uploadRes.data

      const newUser = {
        ...info,
        img:url
      }
      // Update User
      await axios.put(`/users/${id}`, newUser)
      .then((respone)=>{
        toast.success(respone.data, {position:'top-right'});
        navigate("/");
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{data.username} info</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : img
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
                    onChange={(e)=>setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Username</label>
                  <input
                  type="text"
                  id="username"
                  placeholder={data.username}
                  onChange={handleChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Email</label>
                  <input
                  type="email"
                  id="email"
                  placeholder={data.email}
                  onChange={handleChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Address</label>
                  <input
                  type="text"
                  id="address"
                  placeholder={data.address}
                  onChange={handleChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">phoneNumber</label>
                  <input
                  type="text"
                  id="phoneNumber"
                  placeholder={data.phoneNumber}
                  onChange={handleChange}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Birth</label>
                  <input
                  type="date"
                  id="Birth"
                  placeholder={data.Birth}
                  onChange={handleChange}
                  />
                </div>
                
                <div className="formInput">
                  <label htmlFor="">Gender</label>
                  <select id="GT" onChange={handleChange}>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Không xác định">Không xác định</option>
                  </select>
                </div>
                <button onClick={handleClick}>Change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )  
};
  
export default Info; 