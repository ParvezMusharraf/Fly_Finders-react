import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
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
      navigate('/')
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="SignUpwrapper d-flex justify-content-center alighn-item-center">
        <div className="left bg-primary ">
        </div>
        <div className="right form-group bg-light">
          <label htmlFor="InputForNo" className='m-2' >Enter Your No</label>
          <input className='form-control m-2'
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
