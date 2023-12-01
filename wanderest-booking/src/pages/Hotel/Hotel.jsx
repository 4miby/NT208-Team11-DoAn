import React from 'react'
import {useState} from 'react'
import './Hotel.css'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faSquareParking, faStore } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/Footer"
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const handleOpen= (i)=>{
    setSlideNumber(i);
    setOpenSlider(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction === "l")
    {
      newSlideNumber = slideNumber ===0 ? 5 : slideNumber-1;
      setSlideNumber(newSlideNumber);
    }
    else 
    {
      newSlideNumber = slideNumber ===5 ? 0 : slideNumber+1;
      setSlideNumber(newSlideNumber);
    }
  }
  const photo=[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/495325827.jpg?k=0d2427c627abce0f8d74dafdad58a82a214c60785edbe9462be65c62eb476b5a&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/499284096.jpg?k=d16ee2fc2047280e5a70531052febd6db74274770d5aa24a0621582b941e73bf&o=&hp=1"  
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/499284091.jpg?k=a0ed3e1e99a5aded8738668c729c788101078b4d0330ae8b4b4d769e722e7c2f&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/499284093.jpg?k=3146f5f0d336fa11e59ce7dc9af0c3583b93e03d6c7076701216409b33a1048a&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/499284250.jpg?k=dd9502e4840f3186a0ae636fa1801de5b4a9ab8e6099fd8f1e9a6332e828686d&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/499284254.jpg?k=ac20dd93417e1fe90e6222d6c1a93eda0deb836c5f670f10a87c7a6dcede54e3&o=&hp=1"
    }
  ]
  return (
    <div>
      <Navbar/>
      <div className='hotelContainer'>
       { openSlider && <div className="slider">
          <div className="sliderWrapper">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpenSlider(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <img src={photo[slideNumber].src} alt="" className="sliderImg" />
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          </div>
          
        </div>  }
        <div className="hotelWrapper">
          <button className="bookNow">Đặt Ngay</button>
          <h1 className="hotelTitle">Khách Sạn ABC</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span className=''>Quận 7 thành phố Hồ Chí Minh</span>
          </div>
          <span className="hotelDistance">
            Cách xa trung tâm thành phố 500 m
          </span>
          <div className="hotelImages">
            {
              photo.map((photo, index)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
             <h1 className="hotelTitle">Giới thiệu sơ lược về khách sạn</h1>
             <p className="hotelDesc">
              Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng. Nằm ở vị trí trung tâm tại Quận 7 của Hồ Chí Minh, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích chiến tranh nổi tiếng. Được xếp hạng 4 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng bể bơi ngoài trời và spa ngay trong khuôn viên.
             </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <div className='hotelHighlight'>
                <FontAwesomeIcon icon= {faSquareParking} />
                <span>Có chỗ đậu xe riêng MIỄN PHÍ!</span>
              </div>
              <div className="hotelHighlight">
                <FontAwesomeIcon icon={faStore}/>
                <span>Gần trung tâm mua sắn Cresent Mall</span>
              </div>
              <h2>
                <b>VNĐ 500.000 / Đêm</b>
              </h2>
              <button>Lưu lại hoặc đặt chỗ ngay!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hotel