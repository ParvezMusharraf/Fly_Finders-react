import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  const [isSignUpSubmited,setIsSignUpSubmitted] = useState(false)
  const [UserNo, setUserNo] = useState({
    MobileNo:'',
  }) ;
  

    const handleSubmit =(e)=>{
      e.preventDefault()
      setIsSignUpSubmitted(true)
      alert(`Continue With ${UserNo.MobileNo} `)
    }

    const handleChange =(e)=>{
      setUserNo({MobileNo:e.target.value})
    }
    const handleNavigate = ()=>{
      navigate('/main')
    }

  return (
    <div className='m-5'>
      <form onSubmit={handleSubmit} >
        <div className="SignUpwrapper d-flex justify-content-center alighn-item-center shadow-sm">
        <div className="left bg-primary d-flex align-item-center justify-content-center ">
          <img className='img-fluid w-100'  src='https://i.pinimg.com/originals/3f/00/4f/3f004fbd0825ffbd4b9b11656a38f451.gif'
          alt="Airplane" />
        </div>
        <div className="right form-group bg-light">
          <label htmlFor="InputForNo" className='m-2' >Enter Your No</label>
          <input required className='form-control m-2'
            value={UserNo.MobileNo}
            onChange={handleChange}
           type="tel"
           pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" 
           id='InputForNo'
            placeholder='Enter No' />
          <small className='mx-2' >Enter Your Mobile No on tickets information will be shown</small>
          <div className="row">

          <button className=' col btn btn-primary m-2 '  type='submit' >Submit</button>
          <button onClick={handleNavigate} className= ' col btn btn-primary m-2' type='continue'>Continue</button>
          

          </div>
        </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
