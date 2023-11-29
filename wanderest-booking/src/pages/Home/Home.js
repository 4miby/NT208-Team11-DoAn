import React from 'react'
import BackgrounSlider from './BackgrounSlider'
import '../../styles/home.css'
import Searchbar from './Searchbar'
import Explore from './Explore'
import Sale from './Sale'
const Home = () => {
  return (
    <div className='home-page'>
      <div className='background-slide'>
          <BackgrounSlider></BackgrounSlider>
      </div>
      <Searchbar></Searchbar>
      <Explore></Explore>
      <Sale></Sale>
    </div>

  )
}

export default Home