import React from 'react'

const EmployeCard = ({name,about}) => {
  return (
        <div className="col-5 card m-3 shadow-sm">
            <h5 className='card-title p-3' >{name}</h5>
            <h6 className='card-body' >{about}</h6>
            <button className='btn btn-primary w-25 m-1' >Now More</button>
        </div>
  )
}

export default EmployeCard
