import React, { useState } from 'react'
import './SearchBar.css'
import FlightCityData from '../../flight_Data/flightData'
import DatePicker from './DatePicker';

const SearchBar = ({cityIdSelected,setcityIdSelected,toCityIdSelected,settoCityIdSelected,show,setShow}) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [Date,setDate]=useState();



    
    const citiesOptionList = FlightCityData.map(ct => <option key={ct.id} value={ct.city} >{ct.city}</option>)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmited(!isSubmited)
  }

  const handleDate =(e)=>{
    setDate(e.target.value)
    console.log(Date)
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
                <select className='dropdown_menu' value={cityIdSelected} onChange={handleFromCityChange} >
                  {citiesOptionList}
                </select>
              </div>
              <h4>To</h4>
              <div className="to-dropdown m-3">
                <select className='dropdown_menu' value={toCityIdSelected} onChange={handleToCityChange} >
                  {citiesOptionList}
                </select>
              </div>
            </div>
            <div >
              {/* <DatePicker /> */}
              <input className='p-3 dropdown_menu' type="date"  onChange={handleDate} />
            </div>
            <div className="ClassType">
              <select className='dropdown_menu' >
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
