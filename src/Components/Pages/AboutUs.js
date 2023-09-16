import React from 'react'
import Employes from '../../flight_Data/aboutData'
import EmployeCard from './EmployeCard'


const About = () => {

      const employesList = Employes.map(e=><EmployeCard name={e.name} about={e.about} />)
  return (
    <>
    <div className='card m-5 bg-primary text-light shadow-sm'>
      <div className="card-title m-3">
        <h4>About Udaan.com</h4>
      </div>
      <div className="container card-body">
        <p>
        Udaan is India’s leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes. Through GoStays, our customers enjoy standardised stay experience at certified hotel properties. With industry first virtual travel booking currency GoCash and travel social network, GoCash+ Rewards – Udaan is the number one choice for new India on the move.
        </p>
      </div>
    </div>
    <div className='container d-flex align-item-center justify-content-center' >
    <h3>Managment Team</h3>
    </div>
    <div className=" container w-100 d-flex justify-content-center align-items-center " >
      <div className="row">
        {employesList}
      </div>
      </div>
    </>
  )
}

export default About
