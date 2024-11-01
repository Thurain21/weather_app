import React, { useState } from 'react'

const  Form = ({searchCountry}) => {

    const [countryData , setCountryData] = useState('');

    const search = () => {
        searchCountry(countryData);
        setCountryData('');
    };
  return (
    <div className='w-100 d-flex justify-content-center mt-5'>
        <input className='form-control ms-5' onChange={(e) => setCountryData(e.target.value)} type="text" name="country" id="country" placeholder='Enter Region' value={countryData}/>
        <input className='btn btn-secondary me-5 ms-3' onClick={() => search()} type="button" value="Search" />
    </div>
  )
}

export default Form;