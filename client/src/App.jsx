import React from 'react'
import Top from './components/navbar/Top/Top'
import Center from './components/navbar/center/Center'
import Bottom from './components/navbar/bottom/Bottom'
import Home from './components/home/home-top/Home'
import HomeCenter from './components/home/home-center/HomeCenter'
import HomeLower from './components/home/home-lower/HomeLower'
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
    <Top />
    <Center />
    <Bottom/>
    <Home/>
    <HomeCenter />
    <HomeLower/>
    <Footer/>
   </>
  )
}

export default App
