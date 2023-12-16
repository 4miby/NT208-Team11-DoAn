import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/Sidebar/sidebar";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"
const New = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  // Xử lý nhập liệu
  const handleChange = (e)=>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
      // Post new user lên database
      await axios.post("/auth/register", newUser)
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
          <h1>{title}</h1>
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
                  onChange={(e)=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
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
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New