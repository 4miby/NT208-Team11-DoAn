import "./newHotel.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import { useState } from "react";
import axios from "axios";
import { hotelInputs } from "../../formsource";
import useFetch from "../../hooks/useFetch"
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import slugigy from 'slugify'
const NewHotel = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  // Xử lý khi nhập liệu
  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const handleClick = async e=>{
    e.preventDefault();
    try{
      // Post từng ảnh để trả về một mảng url
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
      const slug = slugigy(info.name,'-');
      console.log(slug)
      // Thêm mảng url vào dữ liệu sẽ gửi vào database
      const newHotel = {
        ...info,
        photos:list,
        slug: slug
      };
      // Thực hiện việc post dữ liệu lên database
      await axios.post("/hotels", newHotel)
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
          <h1>Add new Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
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
                  multiple
                  onChange={(e)=>setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
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
                  <label>Fetured</label>
                  <select id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
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

export default NewHotel