import React from 'react'
import Navbar from '../components/Navbar'
import './infor.css'
import Footer from '../components/Footer'
const Infor = () => {
  return (
    <div className="inforPage">
      <Navbar/>
      <div className='inforContainer'>
        <div className='imgContainer'>
          <img src="" alt="" />
          <h1 className='name'>Huy Võ</h1>
        </div>
        <div className='changeContainer'>
          <h2>Thay đổi thông tin</h2>
          <form className='changeInfo'>
            <div className='changeItem'>
              <label>Tên người dùng</label>
              <input type='text' disabled placeholder='Huy Võ'></input>
            </div>
            <div className='changeItem'>
              <label>Địa chỉ</label>
              <input type='text'></input>
            </div>
            <div className='changeItem'>
              <label>SĐT</label>
              <input type='text'></input>
            </div>
            <div className='changeItem'>
              <label>Giới tính</label>
              <input className='Ngày sinh'></input>
            </div>
            <div className='changeItem'>
              <label>Ngày sinh</label>
              <input type='date'></input>
            </div>
            <button>Thay đổi thông tin</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Infor