import SearchBar from "../SerachBar/SearchBar";
import { useState } from "react";
import React from 'react'
import FaQs from "./Faqs/FaQs";
import FlightBookingCardList from "../FlightBookingCard/FlightBookingCardList";
import Crausel from "../Crausel/Crausel";
import FlightCityData from "../../flight_Data/flightData";

const Main = ({date,setDate}) => {

  const [cityIdSelected, setcityIdSelected] = useState(1);
  const [toCityIdSelected, settoCityIdSelected] = useState(2);

  const [show,setShow]=useState(false);

  const citieiesFrom = FlightCityData.find(c=>c.id == cityIdSelected)
  const citieiesTo=FlightCityData.find(c=>c.id==toCityIdSelected)

  return (
    <div className=" justify-content-center align-items-center ">
      <SearchBar cityIdSelected={cityIdSelected}  setcityIdSelected={setcityIdSelected}
            toCityIdSelected={toCityIdSelected} settoCityIdSelected={settoCityIdSelected}
            date={date} setDate={setDate}
                    show={show} setShow={setShow} />

        {show ? <div className="container h-100 mt-5" >
            <h4 className="d-flex justify-content-center align-item-center">Search Results for {citieiesFrom.city} to {citieiesTo.city} <br/></h4>
            <span>Date: {date} </span>
            <FlightBookingCardList toCityIdSelected={toCityIdSelected} cityIdSelected={cityIdSelected} date={date} />
            
        </div>:
        <div className='container' style={{ 
          width:'80vw',
          height:"400px",
        }} >
        <Crausel/>
        </div>
        }
        <FaQs/>
    </div>
  )
}

export default Main
