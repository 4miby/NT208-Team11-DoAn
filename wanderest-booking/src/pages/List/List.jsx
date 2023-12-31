import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format} from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from './SearchItem'
import useFetch from '../../hooks/useFetch'
const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [dates,setDates] = useState(location.state.dates);
  const [options,setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // Fetch Data
  const {data,loading, error,reFetch} = useFetch(`/hotels?city=${destination}&min=${min||0 }&max=${max || 10000000}`);
  //Xử lý nút tìm kiếm
  const handleClick = ()=>{
    reFetch();
  }

  return (
    <div>
      <Navbar/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Địa điểm</label>
              <input type="text" placeholder={destination} onChange={(e)=>setDestination(e.target.value)}/>
            </div>
            <div className='lsItem'>
              <label>Ngày đặt phòng</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(dates[0].startDate,"dd/MM/yyyy")} tới ${format(dates[0].endDate,"dd/MM/yyyy")}`}
              </span>
              {openDate &&( <DateRange 
              onChange={(item)=>setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}
              />)}
            </div>

            <div className='lsItem'>
            <label>Tùy Chọn</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Giá thấp nhất<small> /Đêm</small></span>
                  <input type='number' onChange={e=>setMin(e.target.value)} className='lsOptionInput'/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Giá cao nhất<small> /Đêm</small></span>
                  <input type='number' onChange={e=>setMax(e.target.value)} className='lsOptionInput'/>
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
          <button onClick={handleClick}>Search</button>
          </div>
          <div className='listResult'>
            {loading ? "Loading" :<>{data.map(item=>(
                   <SearchItem item={item} key={item._id}/>
            ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List