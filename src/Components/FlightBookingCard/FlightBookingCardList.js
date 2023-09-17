import React from 'react'
import FlightRoutesDetails from '../../flight_Data/DelhiData'
import FlightBookingCard from './FlightBookingCard'
import FlightCityData from '../../flight_Data/flightData'

const FlightBookinCardList = ({cityIdSelected,toCityIdSelected}) => {

  const ct = FlightCityData.find(cd=>cd.id==cityIdSelected)
  const tct = FlightCityData.find(tcd=>tcd.id==toCityIdSelected)


  const FilterdCitysList = FlightRoutesDetails.filter(ct=> { return ct.FromCityFlightId==cityIdSelected ,ct.ToCityFlightId==toCityIdSelected})


    const DelhiOptionList = FilterdCitysList.map(d=><FlightBookingCard
        id={d.id} At={d.At} To={d.To} hours={d.hours} Airline={d.Airline} Price={d.Price} cityIdSelected={ct.city}
        toCityIdSelected={tct.city} AirlineLogo = {d.AirlineLogoPng} />)

  return (
    <div>
      {DelhiOptionList}
    </div>
  )
}

export default FlightBookinCardList
