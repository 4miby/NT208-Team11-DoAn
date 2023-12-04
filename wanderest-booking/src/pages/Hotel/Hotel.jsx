import React, { useContext } from 'react'
import {useState} from 'react'
import './Hotel.css'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faSquareParking, faStore } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/Footer"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { currencyFormat } from '../../utils/CurrencyFormat'
const Hotel = () => {
  const {id} = useParams();
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const {data, loading, error} = useFetch(`/hotels/find/${id}`);

  const {dates,options} = useContext(SearchContext);
  // Hàm đếm số ngày cách nhau
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate,dates[0].startDate);
  // Xử lý khi bấm vào ảnh
  const handleOpen= (i)=>{
    setSlideNumber(i);
    setOpenSlider(true);
  }
  // Xử lý khi bấm vào nút qua lại
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
  
  return (
    <div>
      <Navbar/>
      {loading ? "loading":(<div className='hotelContainer'>
       { openSlider && <div className="slider">
          <div className="sliderWrapper">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpenSlider(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          </div>
          
        </div>  }
        <div className="hotelWrapper">
          <button className="bookNow">Đặt Ngay</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span className=''>{data.address}, {data.city}</span>
          </div>
          <span className="hotelDistance">
            Cách xa trung tâm thành phố {data.distance}m
          </span>
          <div className="hotelImages">
            {
              data.photos?.map((photo, index)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(index)} src={photo} alt="" className="hotelImg" />
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
             <h1 className="hotelTitle">{data.title}</h1>
             <p className="hotelDesc">
              {data.desc}
             </p>
            </div>
            <div className="hotelDetailsPrice">
              <div className='hotelDetailsPriceTitle'>
                <h1>Điểm nổi bật của chỗ nghỉ</h1>
                <h2>Hoàn hảo cho kỳ nghỉ {days} đêm!</h2>
              </div>
              <div className='hotelHighlight'>
                <FontAwesomeIcon icon= {faSquareParking} />
                <span>Có chỗ đậu xe riêng MIỄN PHÍ!</span>
              </div>
              <div className="hotelHighlight">
                <FontAwesomeIcon icon={faStore}/>
                <span>Gần trung tâm mua sắm Cresent Mall</span>
              </div>
              <h2>
                <b>VNĐ {currencyFormat(data.cheapestPrice * days * options.room)}/ {days} Đêm</b>
              </h2>
              <button>Lưu lại hoặc đặt chỗ ngay!</button>
            </div>
          </div>
        </div>
      </div>)}
      <Footer/>
    </div>
  )
}

export default Hotel