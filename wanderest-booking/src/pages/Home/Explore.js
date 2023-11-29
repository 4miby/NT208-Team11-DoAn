import React from 'react'
import { Link } from 'react-router-dom'
import Hanoi from '../../Resources/pictures/Hanoi.png'
import DaNang from '../../Resources/pictures/DaNang.png'
import HCM from '../../Resources/pictures/HoChiMinh.png'
import NhaTrang from '../../Resources/pictures/Nha Trang.png'
import DaLat from '../../Resources/pictures/DaLat.png'
import '../../styles/explore.css'
const Explore = () => {
  return (
    <div className='explore-container'>
      <h1 className='explore-title'>Khám phá</h1>
      <div className='row-image'>
        <Link>  <img src={Hanoi}></img></Link>
      
        <div className='column-image'>
          <Link>
            <img src={HCM}></img>
          </Link>
          <Link> <img src={DaNang}></img></Link>
        </div>
        <div className='column-image'>
          <Link><img src={NhaTrang}></img></Link>
          <Link><img src={DaLat}></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Explore