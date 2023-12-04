import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import './sale.css'
import useFetch from "../../hooks/useFetch"
const Sale = () => {
  const {data,loading,error} = useFetch("/hotels?featured=true&limit=3");
  return (
    <div className='sale-container'>
      <h1>Các nhà ở được yêu thích</h1>
      <p className='sale-description'>Các nhà ở được khách hàng yêu mến và đặt trọn niềm tin</p>
      <div className='sale-room-container'>
      {loading ? ("Loading"): 
      (<>{data.map(item=>(
            <div className='sale-room' key={item._id}>
            <img alt="" src={item.photos[0]}></img>
            <div className='room-info'>
              <div className='roomTitleContainer'>
                <p className='typeTitle'>{item.type}</p>
                <h2>{item.name}</h2>
              </div>
                { item.rating && <button className='rating'>{item.rating}</button>}
            </div>

            <div className='address-container'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p>{item.address}, {item.city}</p>
            </div>
            <p>{item.title}</p>
            <p className='price'>VNĐ {item.cheapestPrice} / Đêm</p>
            <p className='sale'></p>
        </div>
      ))} 
      </>)}
        
        
      </div>
    </div>
  )
}

export default Sale