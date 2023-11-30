import React from 'react'
import './SearchItem.css'
const SearchItem = () => {
  return (
    <div className='Search-Item'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/488464820.webp?k=f1d9cbce3641563ab982f07a3cdeef7079d883f91c36a2176ba7342435b22bcb&o=" 
      alt=""
      className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Khach San ABC</h1>
        <span className='siAddress'>Quận 7, Thành phố Hồ Chí Minh</span>
        <span className='siDistance'>Cách xa Trung Tâm thành phố 500m</span>
        <span className='siSubtitle'>
          Phòng có điều hòa, rộng 21 m vuông và có 2 giường ngủ
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Tuyệt vời</span>
          <button>8.9</button>
        </div>
        <div className='siDetailTexts'>
            <span className='siPrice'>VNĐ 1.500.000</span>
            <span className='siTaxOp'>Đã bao gồm thuế</span>
            <button className='siCheckButton'>Xem Phòng</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem