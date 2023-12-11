import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { currencyFormat } from '../../utils/CurrencyFormat'
import './mybooking.css'
const MyBooking = () => {
  return (
    <div className='mybooking-page'>
      <Navbar/>
      <h2>Đặt chỗ của bạn</h2>
      <div className="bookingContainer">
        <div className="bookingItem">
          <img src="" alt="" />
          <div className="bookingInfo">
              <h3>Khách sạn ABC</h3>
              <span>Thành phố Hồ Chí Minh, Quận 2</span>
              <span>Loại phòng: Phòng đôi</span>
              <span>Thời gian nhận phòng:12h-07/11/2023</span>
              <span>Thời gian trả phòng:12h-08/11/2023</span>
          </div>
          <div className="bookingPrice">
            <span>Tuyệt vời</span>
            <button>8.9</button>
            <span className='siPrice'>VNĐ {currencyFormat(500000)}</span>
          </div>
        </div>
        <div className="bookingItem">
          <img src="" alt="" />
          <div className="bookingInfo">
              <h3>Khách sạn ABC</h3>
              <span>Thành phố Hồ Chí Minh, Quận 2</span>
              <span>Loại phòng: Phòng đôi</span>
              <span>Thời gian nhận phòng:12h-07/11/2023</span>
              <span>Thời gian trả phòng:12h-08/11/2023</span>
          </div>
          <div className="bookingPrice">
            <span>Tuyệt vời</span>
            <button>8.9</button>
            <span className='siPrice'>VNĐ {currencyFormat(500000)}</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MyBooking