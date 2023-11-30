
import { useEffect, useState } from 'react'
import './backgroundslide.css'
const BackgrounSlider = () => {
  const imageSlide = ['https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

  const [currentState, setCurrentState] = useState(0);
  useEffect(()=>
  {
    const timer = setTimeout(()=>
    {
      if(currentState===2)
      {
        setCurrentState(0);
      }
      else
      {
        setCurrentState(currentState+1);
      }
    },5000)
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