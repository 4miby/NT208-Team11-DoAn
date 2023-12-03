import React from 'react'
import { Link } from 'react-router-dom'
import Hanoi from '../../Resources/pictures/Hanoi.png'
import DaNang from '../../Resources/pictures/DaNang.png'
import HCM from '../../Resources/pictures/HoChiMinh.png'
import NhaTrang from '../../Resources/pictures/Nha Trang.png'
import DaLat from '../../Resources/pictures/DaLat.png'
import './explore.css'
import useFetch from '../../hooks/useFetch'
const Explore = () => {
  const {data,loading, error} = useFetch("/hotels/countbycity?cities=HaNoi,HCM,DaNang,NhaTrang,DaLat");
  return (
    <div className='explore-container'>
      <h1 className='explore-title'>Khám phá</h1>
      <div className='row-image'>
        <div className='exploreItem'>
            <img src={Hanoi}  alt=""></img>
            <h1>Hà Nội</h1>
            <h2>{data[0]} Dịch vụ</h2>
        </div>
        <div className='column-image'>
          <div className='exploreItem'>
            <img src={HCM} alt=""></img>
            <h1>Hồ Chí Minh</h1>
            <h2>{data[1]} Dịch vụ</h2>
          </div>
          <div className='exploreItem'>
            <img src={DaNang} alt=""></img>
            <h1>Đà Nẵng</h1>
            <h2>{data[2]} Dịch vụ</h2>
          </div>
        </div>
        <div className='column-image'>
          <div className='exploreItem'>
            <img src={NhaTrang} alt=""></img>
            <h1>Nha Trang</h1>
            <h2>{data[3]} Dịch vụ</h2>
          </div>
          <div className='exploreItem'>   
            <img src={DaLat} alt=""></img>
            <h1>Đà Lạt</h1>
            <h2>{data[4]} Dịch vụ</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore