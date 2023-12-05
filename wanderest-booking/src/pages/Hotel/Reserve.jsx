import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import React, { useContext, useState } from 'react'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { currencyFormat } from "../../utils/CurrencyFormat";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)
  const {dates} = useContext(SearchContext);

  const getDatesInRange = (startDay,endDay)=>{
    const start = new Date(startDay);
    const end = new Date(endDay);
    const date = new Date(start.getTime());
    let list =[]
    while(date<= end)
    {
      list.push(new Date(date).getTime())
      date.setDate(date.getDate()+1);
    }
    return list
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  //console.log(allDates);

  const isAvailable = (roomNumber)=>{
    const isFound = roomNumber.unavailableDates.some((date) =>
    allDates.includes(new Date(date).getTime())
  );
    return !isFound;
    
  }
  // Xử lý khi chọn phòng
  const handleSelect=(e)=>{
      const checked = e.target.checked;
      const value = e.target.value;
      setSelectedRooms(checked ? [...selectedRooms,value]: selectedRooms.filter((item)=>item !== value))
  }
  //Xử lý khi đặt phòng
  const handleClick = async()=>{
    try{
      await Promise.all(selectedRooms.map(roomId=>{
        const res = axios.put(`/rooms/availability/${roomId}`
        ,{dates:allDates});
        return res.data;
      }))
    }
    catch(err)
    {
      
    }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
        <span>Select your rooms:</span>
        {data.map(item=>(
            <div className="rItem">
              <div className="rItemInfo">
                <div className="rTitle"> {item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">Max People: 
                <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">{currencyFormat(item.price)} VNĐ</div>
              </div>
              <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber)=>(
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input type="checkbox" 
                  value={roomNumber._id}
                  disabled={!isAvailable(roomNumber)} 
                  onChange={handleSelect}/>
                </div>
              ))}
              </div>
            </div>
        ))}
        <button className="rButton" onClick={handleClick}>Đặt ngay</button>
      </div>
    </div>
  )
}

export default Reserve