import React from 'react'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import GetinTouch from './components/GetinTouch'
import Header from './components/Header'
import HowitWorks from './components/HowitWorks'
import Navbar from './components/Navbar'
import SubscribeArea from './components/SubscribeArea'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Features/>
      <About/>
      <SubscribeArea/> 
      <HowitWorks/>
      <GetinTouch/>
      <Footer/>
    </>
  )
}

export default App