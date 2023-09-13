import React from 'react'
import faqsData from "./faqsData"
import Details from './Details'

const FaQs = () => {

    const optionDetailsList = faqsData.map(d=><Details id={d.id} Answer={d.Answer} Question={d.Question} />)
  return (
    <div className='container-fluid mx-3 justify-content-center'>
      <h2 className='d-flex justify-content-center p-3 m-3' >FaQs</h2>
      {optionDetailsList}
    </div>
  )
}

export default FaQs
