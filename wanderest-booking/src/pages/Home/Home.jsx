import React from 'react'
import BackgrounSlider from './BackgrounSlider'
import './home.css'
import Searchbar from './Searchbar'
import Explore from './Explore'
import Sale from './Sale'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <div className='background-slide'>
          <BackgrounSlider/>
      </div>
      <Searchbar/>
      <Explore/>
      <Sale/>
      <Footer></Footer>
    </div>
    
  )
}

export default Home