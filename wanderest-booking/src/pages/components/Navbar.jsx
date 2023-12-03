import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Resources/icons/hotel.png'
import { Link } from 'react-router-dom'
import user from '../../Resources/icons/user.png'
import logout from '../../Resources/icons/log-out.png'
import question from '../../Resources/icons/question.png'
import reserve from "../../Resources/icons/reserve.png"
import DropDownItem from './Dropdownitem'
const Navbar = () => {
  const [isLogin,setisLogin] = useState(false);
  const [isDrop,setIsDrop]= useState(false);
  const handleLogin = ()=>{
    setisLogin(true);
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
      {!isLogin &&<button onClick={handleLogin}>Đăng nhập</button>}
      {isLogin && <button onClick={onclickHandle}>Tài khoản</button>}
      {<div className={`DropDownMenu ${isDrop ? 'active' :'inactive'}`}>
      <DropDownItem text="Thông tin" img={user} path="/infor"></DropDownItem>
      <DropDownItem text="Đặt chỗ" img={reserve} path="/AboutUs"></DropDownItem>
      <DropDownItem text="Về chúng tôi" img={question} path="/AboutUs"></DropDownItem>
      <DropDownItem text="Đăng xuất" img={logout}></DropDownItem>
      </div>}

      
    </div>
  )
}

export default Navbar