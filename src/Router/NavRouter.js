import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nagpur from '../Components/CityPages/Nagpur'
import Pune from '../Components/CityPages/Pune'
import Mumbai from '../Components/CityPages/Mumbai'
import Delhi from '../Components/CityPages/Delhi'
import Hydrabad from '../Components/CityPages/Hydrabad'
import Chennai from '../Components/CityPages/Chennai'
import SignUp from '../Components/SignUp/SignUp'
import Navbar from './Navbar'
import ConformBookingForm from '../Components/MainCompo/ConformBooking/ConformBookingForm'



const NavRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
          <Route path='/pune' element={<Pune/>} />
          <Route path='/Mumbai' element={<ConformBookingForm/>} />
          <Route path='/Nagpur' element={<Nagpur/>} />
          <Route path='/Delhi' element={<Delhi/>} />
          <Route path='/Chennai' element={<Chennai/>} />
          <Route path='/Hydrabad' element={<Hydrabad/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/ConformBooking' element={<ConformBookingForm/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default NavRouter
