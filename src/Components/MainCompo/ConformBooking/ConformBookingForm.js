import React from 'react'

const ConformBookingForm = () => {
    return (
        <div>
            <form>
                <div className='BookingForm card p-5' >
                <div className='Contact_information row justify-content-center' >
                    <h4 className='m-3 text-center' >Contact Information</h4>
                    <label htmlFor="" className='col-5' >EmailId:
                        <input type="Email" className='form-control' />
                    </label>
                    <label htmlFor="" className='col-5' >Mobile:
                        <input type="mobile" className='form-control' />
                    </label>
                </div>
                <div className='traveler_information row justify-content-center' >
                    <h4 className='m-3 text-center' >Travelars Information</h4>
                    <label htmlFor="" className='col-5'>Adult
                        <select className='form-control' >
                        <option value="1" >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        </select>
                    </label>
                    <label htmlFor="" className='col-5'>Children
                    <select className='form-control'  >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </label>
                    <label htmlFor=""  className='col-8' >First Name:
                    <input type="text" className=' form-control' />
                    </label>
                    <label htmlFor="" className='col-8' >last Name:
                    <input type="text" className=' form-control' />
                    </label>
                </div>
                <div className="buttons m-3 d-flex justify-content-center ">
                    <button className='btn btn-primary m-2 p-2 ' >Confirm Ticket</button>
                    <button className='btn btn-outline-primary m-2 p-2' >Reset</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default ConformBookingForm
