import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coins from './pages/Coins/Coins'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      
      <Navbar/>
      <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path='/coin/:coinId' element={<Coins/>}/>
          </Routes>
          <Footer/>
     
    </div>
  )
}

export default App