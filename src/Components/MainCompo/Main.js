import SearchBar from "../SerachBar/SearchBar";
import FlightBookingCard from '../FlightBookingCard/FlightBookingCard'
import FlightRoutesDetails from '../../flight_Data/DelhiData'
import { useState } from "react";


import React from 'react'
import FaQs from "./Faqs/FaQs";
import ConformBookingForm from "./ConformBooking/ConformBookingForm";
import Navbar from "../../Router/Navbar";

const Main = ({show,setShow}) => {

  const [cityIdSelected, setcityIdSelected] = useState();
  const [toCityIdSelected, settoCityIdSelected] = useState();

    const DelhiOptionList = FlightRoutesDetails.map(d=><FlightBookingCard
        id={d.id} At={d.At} To={d.To} hours={d.hours} Airline={d.Airline} Price={d.Price} cityIdSelected={cityIdSelected}
        toCityIdSelected={toCityIdSelected} />)
  return (
    <div>
      <Navbar/>
      <SearchBar cityIdSelected={cityIdSelected}  setcityIdSelected={setcityIdSelected}
            toCityIdSelected={toCityIdSelected} settoCityIdSelected={settoCityIdSelected}
                    show={show} setShow={setShow} />
        {show ? <div className="container h-100" >
            {DelhiOptionList}
        </div>:
        <ConformBookingForm/>
        }
        <FaQs/>
        
    </div>
  )
}

export default Main
