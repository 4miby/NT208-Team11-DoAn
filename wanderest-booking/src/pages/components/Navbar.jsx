import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../../Resources/icons/hotel.png'
import { Link, useNavigate } from 'react-router-dom'
import userpng from "../../Resources/icons/user.png"
import logout from '../../Resources/icons/log-out.png'
import question from '../../Resources/icons/question.png'
import reserve from "../../Resources/icons/reserve.png"
import DropDownItem from './Dropdownitem'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
const Navbar = () => {
  const navigate = useNavigate();
  const [isDrop,setIsDrop]= useState(false);
  const {user,dispatch} = useContext(AuthContext);
  // Hàm xóa trường dữ liệu trong cookie
// Xử lý khi bấm vào nút đăng nhập
  const handleSignIn =()=>{
      navigate("/login")
  }
  // Xử lý khi bấm vào nút đăng xuất
  const handleSignOut = ()=>{
    dispatch({type:"LOGOUT"});
    setIsDrop(false);
    axios.get("/auth/logout");
    navigate("/");
  }
  const onclickHandle = ()=>
  {
    setIsDrop(!isDrop);
  }

  const ExploreClick = ()=>
  {
    window.scrollTo(
      {
        top:1200,
        behavior:'smooth'
      }
    )
  }

  const RoomClick = ()=>
  {
    window.scrollTo(
      {
        top:2080,
        behavior:'smooth'
      }
    )
  }

  const ServiceClick = ()=>
  {
    window.scrollTo(
      {
        top: 2500,
        behavior:'smooth'
      }
    )
  }
  
  return (
    <div className='navbar'>
      <img src={logo}></img>
      <Link to="/" className='Home-link'>Trang Chủ</Link>
      <p onClick={ExploreClick}>Khám Phá</p>
      <h1>WandeRest</h1>
      <p onClick={RoomClick}>Phòng</p>
      <p onClick={ServiceClick}>Dịch Vụ</p>
      {!user &&<button onClick={handleSignIn}>Đăng nhập</button>}
      { user && (<div className='AccountButton'>
        <img src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} /> 
        <span onClick={onclickHandle}>{user.username}</span>
      </div>)
      }

      {user && (<div className={`DropDownMenu ${isDrop ? 'active' :'inactive'}`}>
      <DropDownItem text="Thông tin" img={userpng} path={`/infor/${user._id}`}></DropDownItem>
      <DropDownItem text="Đặt chỗ" img={reserve} path="/AboutUs"></DropDownItem>
      <DropDownItem text="Về chúng tôi" img={question} path="/AboutUs"></DropDownItem>
      <div onClick={handleSignOut}>
        <DropDownItem text="Đăng xuất"  img={logout}></DropDownItem>
      </div>
      </div>)}
    </div>
  )
}

export default Navbar