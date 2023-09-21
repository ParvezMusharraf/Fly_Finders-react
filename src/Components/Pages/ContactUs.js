import React, { useState } from 'react'
import './contactUs.css'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hydrabad = () => {
      const [formSubmiited, setformSubmiited] = useState(false)
      const [userInfo,setUserInfo] = useState({
        name:'',
        lastName:'',
        mobileNo:"",
        email:'',
        query:'',
      })


      const handleSubmit=(e)=>{
        e.preventDefault()
        setformSubmiited(true)

      }
      const handleNameChange=(e)=>{
          setUserInfo({...userInfo,name:e.target.value})
          console.log(userInfo.name)
      }
      const handleLastName=(e)=>{
        setUserInfo({...userInfo,lastName:e.target.value})
        console.log(userInfo.lastName)
      }
      const handlemobileChange=(e)=>{
        setUserInfo({...userInfo,mobileNo:e.target.value})
        console.log(userInfo.mobileNo)
      }
      const handleEmailChange=(e)=>{
        setUserInfo({...userInfo,email:e.target.value})
        console.log(userInfo.email)
      }
      const handleQueryChange=(e)=>{
        setUserInfo({...userInfo,query:e.target.value})
        console.log(userInfo.query)
      }



  return (
    <div>
      <div className="container">
        <div className="Contact-wrapper mt-3">
          <div className="uppersection">
          <h1 className='text-white mt-5'>Contact Us</h1>
          </div>
          <div className="loversection">
            <div className="heading mt-3">
              <h3>Lets Start Conversation</h3>
            </div>
            <div className="row">
            <div className="form-wrapper container d-flex p-5">
              <div className="col-6">
                  <div className="heading">
                    <h4>Ask how can I help You</h4>
                  </div>
                    <div >
                      <h6 className='p-3'>Contact Us Throw </h6>
                      <div className="info">
                      <label className='p-3' >Email: 
                        <span className=' text-warning' > parvezmusharraf61@gmail.com</span>
                      </label>
                      <label className='p-3'>Mobile No: 
                        <span className=' text-warning'  > 7020543440</span>
                      </label>
                      <label className='p-3' > Also Follow Us On :
                        <ul className='nav p-3' >
                          <Link className='p-1 link-text'  >{<FaInstagram/>}</Link>
                          <Link className='p-1 link-text' >{<FaFacebookF/>}</Link>
                          <Link className='p-1 link-text' >{<FaTwitter/>}</Link>
                          <Link className='p-1 link-text' >{<FaLinkedinIn/>}</Link>
                        </ul>
                      </label>
                      </div>
                    </div>
              </div>
              <div className="col-6 row " >
                <h5>Plaese Feel Free To ask any Query</h5>
                <form onSubmit={handleSubmit} >
                <div className="form-inputs row form-group ">
                <label>First Name:
                  <input type="text" className=' form-control w-75' value={userInfo.name} onChange={handleNameChange} required/>
                </label>
                <label>Last Name:
                  <input type="text" className=' form-control w-75' value={userInfo.lastName} onChange={handleLastName} required  />
                </label>
                <label>Mobile:
                  <input type="tel" className=' form-control w-75' value={userInfo.mobileNo} onChange={handlemobileChange} required  />
                </label>
                <label>Email:
                  <input type="email" className=' form-control w-75' value={userInfo.email} onChange={handleEmailChange} required />
                </label>
                <label>Enter Query:
                  <textarea type="text" className=' form-control w-75'value={userInfo.query} onChange={handleQueryChange} required />
                </label>
                </div>
                <button className=' btn btn-warning mt-2 p-2 w-25 ' >Submit</button>
                </form>
              </div>
            </div>
            </div>
          </div>
          {formSubmiited &&
          <div>
            <div className="card container resultCard m-5">
              <div className="card-titile container m-2">
                <h3>Thanks For Your Response</h3>
                <span className='text-warning' >Our Team will reach you within 24hours</span>
              </div>
              <div className="card-body row">
                <span>Name : {userInfo.name}</span>
                <span>Last Name : {userInfo.lastName}</span>
                <span >Email : {userInfo.email}</span>
                <span>Query : {userInfo.query}</span>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Hydrabad
