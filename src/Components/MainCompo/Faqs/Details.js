import React from 'react'
import './faqs.css'

const Details = ({Question,Answer}) => {
  return (
    <div className='d-flex container justify-content-center align-items-center ' >
        <details className='details-container m-3'>
            <summary className='Summ '>{Question} <span className='text-primary d-flex ' >Now More</span> </summary>
            <p className='summ-para p-3'>{Answer}</p>
        </details>
    </div>
  )
}

export default Details
