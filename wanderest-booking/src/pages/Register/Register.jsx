import React from 'react'
import BackgrounSlider from '../Home/BackgrounSlider'
import logo from '../../Resources/icons/hotel1.png'
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
  const imageslide = [
    "https://images.pexels.com/photos/14435439/pexels-photo-14435439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1602646994030-464f98de5e5c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557770401-dabe8321c0c5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
    <div className='register-page'>
      <div className="backgroundSlider">   
        <BackgrounSlider imageslide={imageslide}></BackgrounSlider>
      </div>
      <div className="registerContainer">
        <img src={logo}></img>
        <div className="registerInfoContainer">
          <h1>WandeRest</h1>
          <h3>Tạo tài khoản mới</h3>
          <form className='registerInfo'>
            <label>Email</label>
            <input type='email' required id="email" 
            placeholder='Nhập email của bạn'></input>
            <label>Tên đăng nhập</label>
            <input type='text' required id="username" 
            placeholder='Nhập tên đăng nhập của bạn'></input>
            <label>Mật khẩu</label>
            <input type='password' required id="password"
            placeholder='Nhập mật khẩu của bạn'></input>
            <button>Đăng ký</button>
          </form>
          <div className='LinktoLogin' >
              <p>Đã có tài khoản?</p>
              <Link to={"/login"}>Đăng nhập</Link>
          </div>
          <div className='LinktoServices'>
            <Link>Điều khoản</Link>
            <Link>Chính sách</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register