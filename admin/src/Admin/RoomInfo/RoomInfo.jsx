import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import { useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import toast from "react-hot-toast";
import './RoomInfo.scss'
const RoomInfo = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data, loading, error} = useFetch(`/rooms/${id}`);
  const [info,setInfo] = useState({});
  const [rooms,setRooms] = useState([]);
  // Xử lý nhập liệu
  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  // Xử lý khi bấm nút update
  const handleClick = async(e)=>{
    e.preventDefault();
    // tách phòng
    const roomNumbers = rooms.split(",").map(room=>({number:room}));
    try{
      //Thực hiện post dữ liệu
      await axios.put(`/rooms/${id}` ,{...info, roomNumbers})
      .then((respone)=>{
        toast.success(respone.data, {position:'top-right'});
        navigate("/");
      })
    }catch(err){
      console.log(err);
    }
  }
  return(
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{data._id} Room Info</h1>
        </div>
        <div className="bottom">
          <div className="right">
              <form action="">
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
                  <label htmlFor="">Descriptions</label>
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
                  type="Number"
                  id="price"
                  onChange={handleChange}
                  placeholder={data.price}
                  />
              </div>
              <div className="formInput">
                  <label htmlFor="">Max people</label>
                  <input
                  type="number"
                  id="maxPeople"
                  onChange={handleChange}
                  placeholder={data.maxPeople}
                  />
              </div>
              <div className="formInput">
                  <label>Rooms</label>
                  <textarea placeholder="give comma beetween room number"
                  onChange={e=>setRooms(e.target.value)}
                  ></textarea>
              </div>
          
              <button onClick={handleClick}>Update</button>

              </form>
              
          </div>
        </div>
      </div>
    </div>
  )  
};
  
export default RoomInfo; 