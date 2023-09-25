import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Navbar.css'
import Footer from '../Components/MainCompo/Footer/Footer'
import { useState } from 'react'
import hamber, { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);



  return (
    <>
    <div className='Navbar m-3 '>
        <div className="wrapper p-2 m-2">
            <div className='w-25 row align-items-center'>
                <h4 className='col-6 udaan'>FlyFinders.Com</h4>
                <img className='img col-4 mx-3 w-25' src="https://i.pinimg.com/originals/bd/ba/9b/bdba9b09e40bc2eb4281078049263d08.gif" alt="" />
            </div>
        <ul className='nav nav-ul'>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to="/" >Home</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/contact'>Contact Us</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/about' >AboutUs</Link>
            </li>
                <div className="SignUp btn btn-primary ">
                        <Link to='/signup' className='text-light text-decoration-none' > SignUp</Link>
                </div>
        </ul>
        <div className="hambergerbtn">
            <button className='btn btn-warning' onClick={()=>setMenuOpen(!menuOpen)} >{<GiHamburgerMenu/>}</button>
        </div>
            </div>
            
        </div>
            <div className= {menuOpen ?  "card hambergerMenu active " : "card hambergerMenu deActive " } >
                <ul  className="menu-link">
                    <div className='menu-items card' >
                <Link className='nav-link text-dark' to="/" >Home</Link>
                    </div>
                    <div className='menu-items card'>
                <Link className='nav-link text-dark' to='/contact'>Contact Us</Link>
                    </div>
                    <div className='menu-items card' >
                <Link className='nav-link text-dark' to='/about' >AboutUs</Link>
                    </div>
                    <div className='menu-items card'>
                <Link to='/signup' className='text-info  text-decoration-none' > SignUp</Link>
                    </div>
                </ul>
            </div>
        <Outlet/>

        <Footer/>
    </>
  )
}

export default Navbar
