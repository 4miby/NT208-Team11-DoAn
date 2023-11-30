import React from 'react'
import { Link } from 'react-router-dom'
import Hanoi from '../../Resources/pictures/Hanoi.png'
import DaNang from '../../Resources/pictures/DaNang.png'
import HCM from '../../Resources/pictures/HoChiMinh.png'
import NhaTrang from '../../Resources/pictures/Nha Trang.png'
import DaLat from '../../Resources/pictures/DaLat.png'
import './explore.css'
const Explore = () => {
  return (
    <div className='explore-container'>
      <h1 className='explore-title'>Khám phá</h1>
      <div className='row-image'>
        <Link>  <img src={Hanoi}  alt=""></img></Link>
      
        <div className='column-image'>
          <Link>
            <img src={HCM} alt=""></img>
          </Link>
          <Link> <img src={DaNang} alt=""></img></Link>
        </div>
        <div className='column-image'>
          <Link><img src={NhaTrang} alt=""></img></Link>
          <Link><img src={DaLat} alt=""></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Explore