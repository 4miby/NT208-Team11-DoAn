import React from 'react'
import '../../styles/searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { da } from 'date-fns/locale';
const Searchbar = () => {
  const [openDate, setopenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })
  const handleOpenDate = ()=>
  {
    setopenDate(!openDate);
  }
  const handleOption = (name,operation)=>
  {
    setOptions(prev=>{return{
      ...prev, 
      [name]: operation === "i" ? options[name] + 1 : options[name] -1,
    }})
  }
  const handleOpenOptions = ()=>
  {
    setOpenOptions(!openOptions);
  }
  return (
    <div className='search-bar-container'>
      <h1>Đặt Phòng</h1>
      <h3>Khám phá không gian phù hợp với bạn</h3>

      <div className='search-bar'>
        <div className='Search-item-container'>
          <p>Địa điểm</p>
          <div className='search-item'>
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <input type='text' placeholder='Tìm kiếm nơi muốn đến'></input>
          </div>
        </div>

        <div className='Search-item-container'>
          <p>Số lượng</p>
          <div className='search-item'>
            <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
            <span className='SearchText'
                  onClick={handleOpenOptions}>
                {`${options.adult} Người lớn · ${options.children} Trẻ nhỏ · ${options.room} Phòng`}
            </span>
            {openOptions && (<div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Người lớn</span>
                <div className='OptionCounter'>
                  <button className='optionCounterButton'
                   disabled={options.adult <=1}  
                  onClick={()=>handleOption("adult","d")}>-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button className='optionCounterButton'
                  onClick={()=>handleOption("adult","i")}>+</button>
                </div>
             
              </div>
              <div className='optionItem'>
                <span className='optionText'>Trẻ nhỏ</span>
                <div className='OptionCounter'>
                  <button className='optionCounterButton'
                    disabled={options.children <=1}  
                  onClick={()=>handleOption("children","d")}>-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className='optionCounterButton'
                  onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Phòng</span>
                <div className='OptionCounter'>
                  <button className='optionCounterButton'
                    disabled={options.room <=1} 
                  onClick={()=>handleOption("room","d")}>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className='optionCounterButton'
                  onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>)}
          </div>
        </div>

        <div className='Search-item-container'>
          <p>Ngày đặt phòng</p>
          <div className='search-item'>
            <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
            <span onClick={handleOpenDate}
            className='SearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} tới ${format(date[0].endDate,"MM/dd/yyyy")}` }</span>
            {openDate &&  <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />}
          </div>
        </div>  
      </div>

      <button className='booking-button'>ĐẶT NGAY</button>

    </div>
  )
}

export default Searchbar