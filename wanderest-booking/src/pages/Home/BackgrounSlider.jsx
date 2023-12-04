
import { useEffect, useState } from 'react'
import './backgroundslide.css'
const BackgrounSlider = ({imageslide}) => {
  const imageSlide = imageslide;

  const [currentState, setCurrentState] = useState(0);
  useEffect(()=>
  {
    setTimeout(()=>
    {
      if(currentState===2)
      {
        setCurrentState(0);
      }
      else
      {
        setCurrentState(currentState+1);
      }
    },5000);
  })

  const bgImagestyle = {
    backgroundImage:`url(${imageSlide[currentState]})`,
    backgroundSize:'cover',
    height: '100vh',
  }
  
  const gotoNext= (currentState)=>
  {
    setCurrentState(currentState);
  }
  return (
      <div style={bgImagestyle} className='container'>
        <div className='carousel-boullt'>
        {
          imageSlide.map((image,currentState)=>
          (
            <span key={currentState} onClick={()=>gotoNext(currentState)}></span>
          ))
        }
      </div>
      </div>
  )
}

export default BackgrounSlider