import React from 'react'
import { useParams } from 'react-router-dom'
import FlightRoutesDetails from '../../../flight_Data/DelhiData'
import FlightCityData from '../../../flight_Data/flightData'

import { useState } from 'react'
import {FcApproval, FcBusinessman, FcPrint} from 'react-icons/fc'
import {AiFillCalendar,} from 'react-icons/ai'
import { GiAirplaneDeparture, } from 'react-icons/gi'
import {FaChild} from 'react-icons/fa'
import {BiTransferAlt} from 'react-icons/bi'
import {MdConnectingAirports, MdOutlineAirportShuttle} from 'react-icons/md'
import './ConformBooking.css'
import ticket from '../../../Images/—Pngtree—ticket online booking for trip_6822189.png'


const ConformBookingForm = ({date}) => {

    const {FlightCardId} = useParams();
    const fly = FlightRoutesDetails.find(f=>f.id==FlightCardId)
    const citieiesFrom = FlightCityData.find(c=>c.id == fly.FromCityFlightId)
    const citieiesTo=FlightCityData.find(c=>c.id==fly.ToCityFlightId)
    
    const [isSubmiited, setisSubmiited] = useState(false)
    const [User,setUser]=useState({
        emailId:'',
        mobileNo:'',
        FirstName:'',
        LastName:"",
        Adult:'',
        child:""
    })


    const handleEmailChange =(e)=>{
        setUser({...User,emailId:e.target.value})
        console.log(User)
    }
    const handleMobileNo=(e)=>{
        setUser({...User,mobileNo:e.target.value})
        console.log(User)
    }
    const handleAdult = (e) =>{
        setUser({...User,Adult:e.target.value})
        console.log(User)
    }

    const handleChild =(e)=>{
        setUser({...User,child:e.target.value})
        console.log(User)
    }

    const handleFirstName =(e)=>{
        setUser({...User,FirstName:e.target.value})
        console.log(User)
    }

    const handleLastName =(e)=>{
        setUser({...User,LastName:e.target.value})
        console.log(User)
    }

    const handleReset =(e)=>{
        setUser({...User, emailId:'',
        mobileNo:'',
        FirstName:'',
        LastName:"",
        Adult:'',
        child:""})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setisSubmiited(true)
        alert('Ticket Confirmed')
    }

    return (
        <div className='container' >
            <div className=" card  w-100 container form-container  row">
            <form onSubmit={handleSubmit} className='left-form ' >
                <div className='p-2' >
                <div className='Contact_information' style={{
                    display:'flex',
                    justifyContent:'center',
                    alignContent:'center',
                    flexDirection:"column"
                }} >
                    <h4 className='m-3 text-warning' >Contact Information</h4>
                    <label className='col-9' >EmailId:
                        <input type="Email" className='form-control' required value={User.emailId} onChange={handleEmailChange} />
                    </label>
                    <label  className='col-9'  >Mobile:
                        <input type="tel" pattern='[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]' className='form-control' required value={User.mobileNo} onChange={handleMobileNo} />
                    </label>
                </div>
                <div className='traveler_information row' >
                    <h4 className='m-3 text-warning' >Travelars Information</h4>
                    <label  className='col-3'>Adult
                        <select className='form-control' value={User.Adult} onChange={handleAdult} >
                        <option value="1" >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        </select>
                    </label>
                    <label className='col-3'>Children
                    <select className='form-control' value={User.child} onChange={handleChild}  >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </label>
                    <label htmlFor=""  className='col-9' >First Name:
                    <input type="text" className=' form-control' value={User.FirstName} onChange={handleFirstName} />
                    </label>
                    <label htmlFor="" className='col-9' >last Name:
                    <input type="text" className=' form-control' value={User.LastName} onChange={handleLastName} />
                    </label>
                </div>
                <div className="btn-card d-flex justify-content-center ">
                    <button className='btn btn-primary m-2 p-2 ' type='submit' >Confirm Ticket</button>
                    <button className='btn btn-outline-warning m-2 p-2' onClick={handleReset} >Reset</button>
                </div>
                </div>
                </form>
                <div className="rightimg">
                        <img className='img-fluid img-cont' src={ticket} alt="ticket" />
                </div>
            </div>
            
            {isSubmiited &&
                <div className='Container ticket rounded m-5 bg-light border shadow-sm p-2' >
                <div className="ticket_wrapper m-2">
                    <h3 style={{
                        float:'right'
                    }} className='text-warning' >FlyFinders</h3>
                    <h4 className='text-green' >Congratulations</h4>
                    <h2>Your Ticket Is confirmed {<FcApproval/>}</h2>
                    <span className='m-2 ' >Your Reservation for <b>{citieiesFrom.city}</b> - <b>{citieiesTo.city}</b> flight on <b>{date}</b> at {fly.At} is confirmed </span>
                </div>
                <div className="container_wrapper my-4 shadow-sm rounded container p-3 card">
                <div className="names mx-3">
                    <div className="row">
                        <div className='col-6 mx-3'>
                        <h5>Name: {User.FirstName} {User.LastName}</h5>
                        <img className='img-fluid w-25 border rounded shadow-sm m-2 p-2'  src={fly.AirlineLogoPng} alt="" />
                        </div>
                        <div className='col-5'  style={{
                            float:'right'
                        }} >
                        <h5> Departure:{<MdConnectingAirports/>} </h5>
                        <span className='text-muted' >Chatrapti Shivaji Maharaj Tarminal</span>
                        <p>Reporting Time: <b>40 Mins before Flight Time</b> </p>
                        </div>
                    </div>
                    </div>
                    <div className="citys row m-3 ">
                        <div className='col-2 '>
                        <span className='text-muted' >From</span>
                        <h3  >{citieiesFrom.city}</h3>
                        </div>
                        <div className='col-1'  >
                        <h2 >{<BiTransferAlt/>} </h2> 
                        </div>
                        <div className='col-3 '  >
                            <span className='text-muted' >To</span>
                        <h3>{citieiesTo.city}</h3>
                        </div>
                    </div>
                    <div className="details row m-3 ">
                        <span className='col-2 border rounded shadow-sm p-2 m-1' >{<GiAirplaneDeparture/>} One Way</span>
                        <span className='col-2 border rounded shadow-sm p-2 m-1' >{<AiFillCalendar/>} <b>{date}</b></span>
                        <span className='col-2 border rounded shadow-sm p-2 m-1' > {<FaChild/>}Child: <b>{User.child}</b></span>
                        <span className='col-2 border rounded shadow-sm p-2 m-1' >{<FcBusinessman/>} Adult: <b>{User.Adult}</b></span>
                        <span className='col-2 border rounded shadow-sm p-2 m-1' >Price: <b>{fly.Price}</b>/-</span>
                    </div>
                    <div className="bookingStatus row my-3">
                        <div className="ref col-4 mx-3 ">
                            <span> PNR Booking refrence </span>
                            <h3 className='text-warning' >ASDFWDF43</h3>
                        </div>
                        <div className="pym col-4 mx-3 ">
                            <span>Payment Status</span>
                            <h3 style={{
                                color:"lightgreen"
                            }} ><b>Complete</b></h3>
                        </div>
                    </div>
                    <div className="icon-wrapper w-100">
                        <div className='btn btn-light' ><li style={{listStyle:'none',
                        float:'right',
                    fontSize:'40px',
                    }} >{<FcPrint/>}</li></div>
                    </div>
                </div>
                </div>
                }
        </div>
    )
}

export default ConformBookingForm
