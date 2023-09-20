import React from 'react'
import './about.css'
import { useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        <div className="col-5 p-5 bg-light">
        <h1 className='m-3 p-4'>Life is Short And The World is Wide!</h1>
        <h5  className=" mx-3 px-3" >Lets Take You With us to explore the world</h5>
        </div>
        <div className="col-7 col-img d-flex align-items-center justify-content-center">
          <h3 className='btn bg-white' onClick={()=> navigate('/') } >Book Now</h3>
        </div>
        <h4></h4>
        <div className="col-6 col-img2 bg-primary">
        </div>
        <div className="col-6 p-5 bg-warning ">
        <p>Udaan is India’s leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes. Through GoStays, our customers enjoy standardised stay experience at certified hotel properties. With industry first virtual travel booking currency GoCash and travel social network, GoCash+ Rewards – Udaan is the number one choice for new India on the move.</p>
        <button className='btn btn-light' onClick={()=>navigate('/contact')} >Contact With Us</button>
        </div>
      </div>
    </>
  )
}

export default About
