import React from 'react'
import { useState } from 'react'
import {FcApproval, FcBusinessman, FcPrint} from 'react-icons/fc'
import {AiFillCalendar,} from 'react-icons/ai'
import { GiAirplaneDeparture, } from 'react-icons/gi'
import {FaChild} from 'react-icons/fa'
import './ConformBooking.css'


const ConformBookingForm = () => {
    
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        setisSubmiited(true)
        alert('Form Submmited')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='row card' >
                <div className='BookingForm-right  p-5 col-7' >
                <div className='Contact_information' style={{
                    display:'flex',
                    justifyContent:'start',
                    alignContent:'start',
                    flexDirection:"column"
                }} >
                    <h4 className='m-3 text-warning' >Contact Information</h4>
                    <label className='col-5' >EmailId:
                        <input type="Email" className='form-control' required value={User.emailId} onChange={handleEmailChange} />
                    </label>
                    <label  className='col-5'  >Mobile:
                        <input type="tel" pattern='[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]' className='form-control' required value={User.mobileNo} onChange={handleMobileNo} />
                    </label>
                </div>
                <div className='traveler_information row justify-content-center' >
                    <h4 className='m-3 text-center text-warning' >Travelars Information</h4>
                    <label  className='col-5'>Adult
                        <select className='form-control' value={User.Adult} onChange={handleAdult} >
                        <option value="1" >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        </select>
                    </label>
                    <label className='col-5'>Children
                    <select className='form-control' value={User.child} onChange={handleChild}  >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </label>
                    <label htmlFor=""  className='col-8' >First Name:
                    <input type="text" className=' form-control' value={User.FirstName} onChange={handleFirstName} />
                    </label>
                    <label htmlFor="" className='col-8' >last Name:
                    <input type="text" className=' form-control' value={User.LastName} onChange={handleLastName} />
                    </label>
                </div>
                <div className="buttons m-3 d-flex justify-content-center ">
                    <button className='btn btn-primary m-2 p-2 ' type='submit' >Confirm Ticket</button>
                    <button className='btn btn-outline-warning m-2 p-2' >Reset</button>
                </div>
                </div>
                <div className="leftimg col-5">

                </div>
            </form>
            
            <div className='Container ticket rounded m-5 bg-light border shadow-sm p-2' >
                <div className="ticket_wrapper m-2">
                    <h4>Congratulations</h4>
                    <h2>Your Ticket Is confirmed {<FcApproval/>}</h2>
                    <span className='m-2 ' >your reservation for delhi - pune flight on 11 nov at 10:45 hourse is confirmed </span>
                </div>
                <div className="container_wrapper my-4 shadow-sm rounded container p-3 card">
                <div className="names mx-4">
                        Name:Parvez Musharraf
                    </div>
                    <div className="citys row m-3 ">
                        <h3 className='col-2' >Delhi</h3>
                        <h3 className='col-1' > To </h3> 
                        <h3 className='col' >Pune</h3>
                    </div>
                    <div className="details row m-3 ">
                        <span className='col-2' >{<GiAirplaneDeparture/>} One Way</span>
                        <span className='col-2' >{<AiFillCalendar/>} 11 Nove</span>
                        <span className='col-2' > {<FaChild/>}Child:1</span>
                        <span className='col-2' >{<FcBusinessman/>} Adult:1</span>
                    </div>
                    <div className="bookingStatus row my-3">
                        <div className="ref col-4 mx-3 ">
                            <span> PNR Booking refrence </span>
                            <h3>ASDFWDF43</h3>
                        </div>
                        <div className="pym col-4 mx-3 ">
                            <span>Payment Status</span>
                            <h3>Complete</h3>
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
        </div>
    )
}

export default ConformBookingForm
