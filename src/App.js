import Form from './components/Form';
import Card from './components/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import { api, api_key } from './api/api';

function App() {

  const [country,setCountry ] = useState('Yangon');

  const searchCountry = async(countrydata) => {
      setCountry(countrydata);
  }

  const [weatherData , setWeatherData] = useState({});

  const weatherFetch = async() => {
    const res = await api.get(`/weather?q=${country}&appid=${api_key}`)

    setWeatherData(res.data)
    
  }

 useEffect(()=> {
  weatherFetch();
  // eslint-disable-next-line
 },[country])

  return (
    <div className='w-full min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='shadow-lg gap-4 rounded'>
        <Form searchCountry={searchCountry}/>
        <Card weatherData={weatherData}/>
      </div>
    </div>
  );
}

export default App;
