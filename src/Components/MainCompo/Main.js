import SearchBar from "../SerachBar/SearchBar";
import { useState } from "react";
import React from 'react'
import FaQs from "./Faqs/FaQs";
import FlightBookingCardList from "./ConformBooking/FlightBookingCardList";

const Main = () => {

  const [cityIdSelected, setcityIdSelected] = useState();
  const [toCityIdSelected, settoCityIdSelected] = useState();
  const [show,setShow]=useState(false);

    // const DelhiOptionList = FlightRoutesDetails.map(d=><FlightBookingCard
    //     id={d.id} At={d.At} To={d.To} hours={d.hours} Airline={d.Airline} Price={d.Price} cityIdSelected={cityIdSelected}
    //     toCityIdSelected={toCityIdSelected} />)
  return (
    <div>
      <SearchBar cityIdSelected={cityIdSelected}  setcityIdSelected={setcityIdSelected}
            toCityIdSelected={toCityIdSelected} settoCityIdSelected={settoCityIdSelected}
                    show={show} setShow={setShow} />
        {show && <div className="container h-100 mt-5" >
            <h4 className="d-flex justify-content-center align-item-center">Search Results </h4>
            <FlightBookingCardList toCityIdSelected={toCityIdSelected} cityIdSelected={cityIdSelected} />
            {/* {DelhiOptionList} */}
        </div>
        }
        <FaQs/>
        
    </div>
  )
}

export default Main
