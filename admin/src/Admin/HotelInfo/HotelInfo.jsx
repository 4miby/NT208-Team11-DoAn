import React from "react";
import './HotelInfo.scss'
import Sidebar from "../components/Sidebar/sidebar";
import Navbar from "../components/Navbar/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
const HotelInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const slug = pathname.split('/hotels/')[1];
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const {data, loading, error} = useFetch(`/hotels/find/${slug}`);
  const id = data._id;
  console.log(slug);
  
  const [img, setImg] = useState();
  useEffect(()=>{
    if (data.photos && data.photos.length > 0) {
      setImg(data.photos[0]);
    } else {
      setImg("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");
    }
  },[data])

  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const handleClick= async (e)=>{
      e.preventDefault();
      try{
        // Duyệt qua từng ảnh để trả về một mảng url
        const  list = await Promise.all
        (Object.values(files).map
        (async (file)=>{
            const data = new FormData();
            data.append("file",file);
            data.append("upload_preset","upload");
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/amiby/image/upload",data);
            const {url} = uploadRes.data;
            return url;
        })
        );
        const newHotel = {
          ...info,
          photos:list
        };
        await axios.put(`/hotels/${id}`, newHotel)
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
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{data.name}</h1>
        </div>
          <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
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
                  multiple
                  onChange={(e)=>setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                  <label htmlFor="">Hotel Name</label>
                  <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  placeholder={data.name}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Type</label>
                  <input
                  type="text"
                  id="type"
                  onChange={handleChange}
                  placeholder={data.type}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">City</label>
                  <input
                  type="text"
                  id="city"
                  onChange={handleChange}
                  placeholder={data.city}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Address</label>
                  <input
                  type="text"
                  id="address"
                  onChange={handleChange}
                  placeholder={data.address}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">distance</label>
                  <input
                  type="number"
                  id="distance"
                  onChange={handleChange}
                  placeholder={data.distance}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Title</label>
                  <input
                  type="text"
                  id="title"
                  onChange={handleChange}
                  placeholder={data.title}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Description</label>
                  <input
                  type="text"
                  id="desc"
                  onChange={handleChange}
                  placeholder={data.desc}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Price</label>
                  <input
                  type="number"
                  id="cheapestPrice"
                  onChange={handleChange}
                  placeholder={data.cheapestPrice}
                  />
              </div>
              <div className="formInput">
                  <label>Fetured</label>
                  <select id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
              <button onClick={handleClick}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )  
};
  
export default HotelInfo; 