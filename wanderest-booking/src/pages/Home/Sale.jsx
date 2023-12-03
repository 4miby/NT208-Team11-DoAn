import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import './sale.css'
const Sale = () => {
  return (
    <div className='sale-container'>
      <h1></h1>
      <p></p>
      <div className='sale-room-container'>
        <div className='sale-room'>
          <img alt="" src=''></img>
          <div className='room-info'>
            <h4>Khách sạn ABC</h4>
            <div className='person'>
            <p>4</p>
            <FontAwesomeIcon icon={faPerson} className='icon'></FontAwesomeIcon>
            </div>
          </div>
          <p>Tìm ưu đãi khách sạn tuyệt vời cho đêm nay hoặc chuyến đi sắp tới</p>
          <p className='money'>VND 635.000 / Đêm</p>
          <p className='sale'>Ưu đãi 10 %</p>
        </div>
        <div className='sale-room'>
          <img alt="" src=''></img>
          <div className='room-info'>
            <h4>Khách sạn ABC</h4>
            <div className='person'>
              <p>4</p>
              <FontAwesomeIcon icon={faPerson} className='icon'></FontAwesomeIcon>
            </div>
          </div>
          <p>Tìm resort tại các điểm đến được ưa chuộng cho chuyến đi du lịch của bạn</p>
          <p className='money'>VND1.341.000/ Đêm</p>
          <p className='sale'>Ưu đãi 10 %</p>
        </div>
        <div className='sale-room'>
          <img alt="" src=''></img>
          <div className='room-info'>
            <h4>Khách sạn ABC</h4>
            <div className='person'>
              <p>4</p>
              <FontAwesomeIcon icon={faPerson} className='icon'></FontAwesomeIcon>
            </div>
          </div>
          <p>Trải nghiệm phong cảnh và dịnh vụ khó quên tại những villa tốt nhất cả nước.</p>
          <p className='money'>VND2.342.000/ Đêm</p>
          <p className='sale'>Ưu đãi 10 %</p>
        </div>
      </div>
    </div>
  )
}

export default Sale