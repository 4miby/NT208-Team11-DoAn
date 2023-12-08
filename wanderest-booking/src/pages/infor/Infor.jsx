import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './infor.css'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
const Infor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {data, loading, error} = useFetch(`/users/${id}`);
  const [user, setUser] = useState({
    address: undefined,
    phoneNumber: undefined,
    GT: undefined,
    Birth: undefined,
  });
  // Xử lý nhập dữ liệu
  const inputChangeHandler = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }
  // Xử lý nhập ngày sinh
  const handleSelect = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }
  // Xu ly khi bam nut update
  const handleClick = async(e)=>{
    e.preventDefault();
    try{
      await axios.put(`/users/${id}`, user);
      navigate("/");
    }
    catch(err)
    {
      console.log(err);
    }
  }

  return (
      <div className="inforPage">
        <Navbar/>
        {loading ? "Loading" : (
        <div className='inforContainer'>
          <div className='imgContainer'>
            <img src="" alt="" />
            <h1 className='name'>{data.username}</h1>
          </div>
          <div className='changeContainer'>
            <h2>Thay đổi thông tin</h2>
            <form className='changeInfo'>
              <div className='changeItem'>
                <label>Tên người dùng</label>
                <input type='text' disabled 
                placeholder={data.username}></input>
              </div>
              <div className='changeItem'>
                <label>Email</label>
                <input type='email' disabled 
                placeholder={data.email}></input>
              </div>
              <div className='changeItem'>
                <label>Địa chỉ</label>
                <input type='text' name="address"
                placeholder={data.address || ""} 
                onChange={inputChangeHandler}></input>
              </div>
              <div className='changeItem'>
                <label>SĐT</label>
                <input type='text' name="phoneNumber"
                placeholder={data.phoneNumber || ""} 
                onChange={inputChangeHandler}></input>
              </div>
              <div className='changeItem'>
                <label>Giới tính</label>
                <input className='Ngày sinh' name="GT"
                placeholder={data.GT || ""}
                onChange={inputChangeHandler}></input>
              </div>
              <div className='changeItem'>
                <label>Ngày sinh</label>
                <input type='date' onChange={handleSelect} name='Birth' placeholder={data.Birth}></input>
              </div>
              <button onClick={handleClick}>Thay đổi thông tin</button>
            </form>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default Infor