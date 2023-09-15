import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Delhi from '../Components/Pages/AboutUs'
import Hydrabad from '../Components/Pages/ContactUs'
import SignUp from '../Components/SignUp/SignUp'
import Navbar from './Navbar'
import ConformBookingForm from '../Components/MainCompo/ConformBooking/ConformBookingForm'
import Main from '../Components/MainCompo/Main'



const NavRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
          <Route path= '/main' element={<Main/>}/>
          <Route path='/conformDetailsform' element={<ConformBookingForm/>} />
          <Route path='/about' element={<Delhi/>} />
          <Route path='/contact' element={<Hydrabad/>} />
          <Route path='/signup' element={<SignUp/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default NavRouter
