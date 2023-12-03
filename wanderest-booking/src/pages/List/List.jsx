import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from './SearchItem'
const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Địa điểm</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className='lsItem'>
              <label>Ngày đặt phòng</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate,"dd/MM/yyyy")} tới ${format(date[0].endDate,"dd/MM/yyyy")}`}
              </span>
              {openDate &&( <DateRange 
              onChange={(item)=>setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />)}
            </div>

            <div className='lsItem'>
            <label>Tùy Chọn</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Giá thấp nhất<small> /Đêm</small></span>
                  <input type='number' className='lsOptionInput'/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Giá cao nhất<small> /Đêm</small></span>
                  <input type='number' className='lsOptionInput'/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Người lớn</span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.adult}/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Trẻ nhỏ</span>
                  <input type='number' min={0} className='lsOptionInput' placeholder={options.children}/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Phòng</span>
                  <input type='number' min={1} className='lsOptionInput'placeholder={options.room}/>
                </div>
              </div>
          </div>
          <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List