import React from 'react'
import FlightRoutesDetails from '../../../flight_Data/DelhiData'
import FlightBookingCard from '../../FlightBookingCard/FlightBookingCard'

const FlightBookinCardList = ({cityIdSelected,toCityIdSelected}) => {

    const DelhiOptionList = FlightRoutesDetails.map(d=><FlightBookingCard
        id={d.id} At={d.At} To={d.To} hours={d.hours} Airline={d.Airline} Price={d.Price} cityIdSelected={cityIdSelected}
        toCityIdSelected={toCityIdSelected} />)

  return (
    <div>
      {DelhiOptionList}
    </div>
  )
}

export default FlightBookinCardList
