import "./newRoom.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import { useState } from "react";
import axios from "axios";
import { roomInputs } from "../../formsource";
import useFetch from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
const NewRoom = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const {data,loading,error} = useFetch("/hotels");
  // Xử lý nhập liệu
  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  // Xử lý khi bấm nút gửi
  const handleClick = async e=>{
    e.preventDefault();
    const roomNumbers = rooms.split(",").map(room=>({number:room}))
    try{
        await axios.post(`/rooms/${hotelId}` ,{...info, roomNumbers})
        .then((respone)=>{
          toast.success(respone.data, {position:'top-right'});
          navigate("/");
        })
    }catch(err){
      console.log(err);
    }

  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <div className="formInput">
                  <label>Rooms</label>
                  <textarea placeholder="give comma beetween room number"
                  onChange={e=>setRooms(e.target.value)}
                  ></textarea>
              </div>
              <div className="formInput" >
                  <label>Choose a hotel</label>
                  <select id="hotelId" onChange={(e)=>{
                    setInfo({...info,hotelId:e.target.value})
                    setHotelId(e.target.value)}}
                  >
                    {loading ? "loading" : data && data.map(hotel=>(
                      <option key={hotel.id} 
                      value={hotel._id}
                      >
                        {hotel.name}
                      </option>
                    ))}
                  </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewRoom