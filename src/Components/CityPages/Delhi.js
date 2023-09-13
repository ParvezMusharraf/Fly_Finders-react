import React from 'react'
import FlightBookingCard from '../FlightBookingCard/FlightBookingCard'
import FlightRoutesDetails from '../../flight_Data/DelhiData'


const Delhi = ({cityIdSelected}) => {


      const DelhiOptionList = FlightRoutesDetails.map(d=><FlightBookingCard
        id={d.id} At={d.At} To={d.To} hours={d.hours} Airline={d.Airline} Price={d.Price} FromCityFlightId={cityIdSelected} />)

  

  return (
    <div>
      {DelhiOptionList}
    </div>
  )
}

export default Delhi
