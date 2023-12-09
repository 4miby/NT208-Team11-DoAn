import React, { useContext, useState } from 'react'
import BackgrounSlider from './BackgrounSlider'
import logo from './hotel1.png'
import './Login.scss'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const imageslide = [
    "https://images.pexels.com/photos/14435439/pexels-photo-14435439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1602646994030-464f98de5e5c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557770401-dabe8321c0c5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username:undefined,
    password:undefined
  })
  const {loading,error,dispatch} = useContext(AuthContext); 
  const handleChange = (e)=>{
    setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}))
  }
  const handleSubmit =async e=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login",credentials);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
      if(res.data.isAdmin){
        navigate("/")
      }   
      else{
        dispatch({type:"LOGIN_FAILURE", payload: {message:"Bạn không có quyền truy cập !"}})
      }
    }
    catch(err)
    {
      dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
    }
  }
  return (
    <div className='login-page'>
      <div className="backgroundSlider">   
        <BackgrounSlider imageslide={imageslide}></BackgrounSlider>
      </div>
      <div className='loginContainer'>
        <img alt="" src={logo}></img>
        <div className='loginInfoContainer'>
          <h1>WandeRest</h1>
          <h3>Đăng nhập vào trang Admin</h3>
          <form className='loginInfo' onSubmit={handleSubmit}>
            <label>Tên đăng nhập</label>
            <input type='text' required id="username" 
            onChange={handleChange}
            placeholder='Nhập tên đăng nhập của bạn'></input>
            <label>Mật khẩu</label>
            <input type='password' required id="password"
            onChange={handleChange}
            placeholder='Nhập mật khẩu của bạn'></input>
            <button disabled={loading}>Đăng nhập</button>
          </form>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  )
}

export default Login