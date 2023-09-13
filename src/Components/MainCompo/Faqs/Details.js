import React from 'react'
import './faqs.css'

const Details = ({Question,Answer}) => {
  return (
    <div>
        <details className='container details-container m-3'>
            <summary className='Summ'>{Question} <span className='btn btn-primary float-end d-flex align-content-center ' >Now More</span> </summary>
            <p className='summ-para p-3'>{Answer}</p>
        </details>
    </div>
  )
}

export default Details
