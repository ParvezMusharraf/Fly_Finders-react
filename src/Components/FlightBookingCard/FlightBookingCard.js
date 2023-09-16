import React from 'react'
import '../FlightBookingCard/FlightBookingCard.css'
import { useNavigate } from 'react-router-dom'


const FlightBookingCard = ({At,To,hours,Price,Airline,cityIdSelected,toCityIdSelected,AirlineLogo}) => {


    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/conformDetailsform')
    }

  return (
    <div className='card-main my-3 mb-4 '>
        <div className="card-wrapper">
            <div className="from">
                <div className="from_city">
                    <div className="city-upper">
                        <span className='city-item' >PNR</span>
                        <span className='city-item' >{cityIdSelected}</span>
                        <span className='city-item' >{Airline}</span>
                        </div>
                        <img style={{
                            width:'auto',
                            height:"40px"
                        }} src={AirlineLogo} alt={Airline} />
                    <h4 className='from-time'>{At}</h4>
                </div>
            </div>
            <h4 className="hours">
                {hours}
            </h4>
            <div className="to">
            <div className="to_city">
                <div className="city-upper">
                    <span className='city-item'>PNR</span>
                    <span className='city-item'>{toCityIdSelected}</span>
                    <span className='city-item'>India</span>
                </div>
                <img style={{
                            width:'auto',
                            height:"40px"
                        }} src={AirlineLogo} alt={Airline} />
                    <h4 className='to-time'>{To}</h4>
                </div>
            </div>
            <h5>Price {Price}/rs</h5>
            <button className='btn btn-primary' onClick={handleClick} >Book Now </button>
        </div>
    </div>
  )
}

export default FlightBookingCard
