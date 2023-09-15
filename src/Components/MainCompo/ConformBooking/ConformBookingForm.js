import React from 'react'
import { useState } from 'react'

const ConformBookingForm = () => {

    const [User,setUser]=useState({
        emailId:'',
        mobileNo:'',
        FirstName:'',
        LastName:"",
        Adult:'',
        child:""
    })

    const [isSubmiited, setisSubmiited] = useState(false)

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
        alert(`Form Submmited ${User}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='BookingForm card p-5' >
                <div className='Contact_information row justify-content-center' >
                    <h4 className='m-3 text-center' >Contact Information</h4>
                    <label className='col-5' >EmailId:
                        <input type="Email" className='form-control' required value={User.emailId} onChange={handleEmailChange} />
                    </label>
                    <label  className='col-5'  >Mobile:
                        <input type="tel" pattern='[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]' className='form-control' required value={User.mobileNo} onChange={handleMobileNo} />
                    </label>
                </div>
                <div className='traveler_information row justify-content-center' >
                    <h4 className='m-3 text-center' >Travelars Information</h4>
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
                    <button className='btn btn-outline-primary m-2 p-2' >Reset</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default ConformBookingForm
