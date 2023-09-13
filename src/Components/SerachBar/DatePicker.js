import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import { useState } from 'react'
import './SearchBar.css'

const ReactDatePicker = () => {

    const [selectedDate, setselectedDate] = useState('');
    console.log(setselectedDate)

  return (

    <div>
      <DatePicker className='p-3 dropdown_menu'
      selected={selectedDate}
      onChange={date => setselectedDate(date)}
      dateFormat ="yyyy/MM/dd"
      minDate={new Date()}
      
      />
    </div>
  )
}

export default ReactDatePicker
