import React, { useState } from 'react'
import './SearchBar.css'
import FlightCityData from '../../flight_Data/flightData'

const SearchBar = ({cityIdSelected,setcityIdSelected,toCityIdSelected,settoCityIdSelected,show,setShow,date,setDate}) => {
  const [isSubmited, setIsSubmited] = useState(false);



    const citiesOptionList = FlightCityData.map(ct => <option key={ct.id} value={ct.id} >{ct.city}</option>)
    const ToCitiesOptionList = FlightCityData.map(tct=><option key={tct.id} value={tct.id} >{tct.city}</option>)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmited(!isSubmited)
  }


  const handleDate =(e)=>{
    setDate(e.target.value)
    console.log(date)
  }

  const handleFromCityChange = (e) => {
      setcityIdSelected(e.target.value)
      console.log(setcityIdSelected)

  }
  const handleToCityChange = (e) => {
      settoCityIdSelected(e.target.value)
      console.log(settoCityIdSelected)
  }


  return (
    <div>
      <form className="searchBar m-3" onSubmit={handleSubmit}>
        <div className="searchbar_wrapper">
          <div className="upperSection">
            Search Your Flight Here
          </div>
          <div className="mainSection">
            <div className="upper">
              <div className="from-dropdown m-3 ">
                <select className='dropdown_menu bg-light ' value={cityIdSelected} onChange={handleFromCityChange} >
                  {citiesOptionList}
                </select>
              </div>
              <h4>To</h4>
              <div className="to-dropdown m-3">
                <select className='dropdown_menu bg-light' value={toCityIdSelected} onChange={handleToCityChange} >
                  {ToCitiesOptionList}
                </select>
              </div>
            </div>
            <div >
              {/* <DatePicker /> */}
              <input className='p-3 dropdown_menu bg-light' value={date} type="date"  onChange={handleDate} />
            </div>
            <div className="ClassType">
              <select className='dropdown_menu bg-light' >
                <option className='dropdown_item' value="Economy">Economy Class</option>
                <option className='dropdown_item' value="First">First Class</option>
                <option className='dropdown_item' value="Bussiness">Bussiness Class</option>
              </select>
            </div>
          </div>
          <div className="lowerSection d-flex justify-content-center">
            <button className='btn btn-primary' type='submit' onClick={()=>setShow(!show)} >Search Flights</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
