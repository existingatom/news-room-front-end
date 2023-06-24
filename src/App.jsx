// import { useState } from 'react'
import './App.css'
import Footer from './footer'
import Landing from './landing'
import Navbar from './nav.jsx'
import Slider from './slider.jsx'
import { SliderImage } from './sliderimage'
import { SliderText } from './slidertext'
import Explore from './explore'
import Exploreextended from './exploreextended'
import Learn from './learn'


function App() {


  return (
    <>
      <Navbar />
      <Landing h="Welcome to News-Room!!" name="Take the first step towards your dream. Your next step will be in your favourite news agency." but="Get started"></Landing>
      <Slider slides={SliderImage} words={SliderText}/>
      <Footer />
    </>
  )
}

export default App
