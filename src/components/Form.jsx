import React from 'react'

const 
input = () => {
  return (
    <div className='w-100 d-flex justify-content-center mt-5'>
        <input className='form-control ms-5' type="text" name="country" id="country" placeholder='Enter Region'/>
        <input className='btn btn-secondary me-5 ms-3' type="button" value="Search" />
    </div>
  )
}

export default 
input