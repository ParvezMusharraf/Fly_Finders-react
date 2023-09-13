import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import Main from '../Components/MainCompo/Main'


const Navbar = () => {


    const [show,setShow]=useState(false);
  return (
    <>
    <div className='Navbar m-3 '>
        <div className="wrapper p-2 ">
            <div className='w-20'>
                <h4>Logo</h4>
            </div>
        <ul className='nav nav-ul'>
            <li className='nav-city-li nav-item  shadow-sm' >
                <Link className='nav-link text-dark' to="/pune" >Pune</Link>
            </li>
            <li className='nav-city-li nav-item  shadow-sm' >
                <Link className='nav-link text-dark' to="/main" >Home</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm'  >
                <Link className='nav-link text-dark' to='/mumbai' >Mumbai</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/hydrabad'>Hydrabad</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/delhi' >Delhi</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/Nagpur' >Nagpur</Link>
            </li>
            <li className='nav-city-li nav-item shadow-sm' >
                <Link className='nav-link text-dark' to='/Chennai' >Chennai</Link>
            </li>
        </ul>
                <div className="SignUp btn btn-primary ">
                        <Link to='/signup' className='text-light text-decoration-none' > SignUp</Link>
                </div>
            </div>
        </div>
            <div>
                <Main show={show} setShow={setShow} />
            </div>
        <Outlet/>
    </>
  )
}

export default Navbar
