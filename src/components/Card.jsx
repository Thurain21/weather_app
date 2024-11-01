import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { TiSocialVimeoCircular } from "react-icons/ti";

const Card = ({ weatherData }) => {
        
        console.log(weatherData);
        
    if(JSON.stringify(weatherData) !== '{}'){
        
        return (
            <div>
              <div className="mx-4 mt-4">
                <p>Nov 1, 08:42am</p>
                <h3>{weatherData.name}, {weatherData.sys.country}</h3>
                <h3>
                  <img src={`https://openweathermap.org//img/w/${weatherData.weather[0].icon}.png` } alt="weather"/>
                  {weatherData.main.temp}
                </h3>
                <div className="d-flex justify-content-center align-align-items-center gap-4">
                  <p>
                    <RiArrowRightSFill size={26} /> 3.6m/s WSW
                  </p>
                  <p>
                    <TiSocialVimeoCircular />
                    1024hPa
                  </p>
                </div>
              </div>
            </div>
          );
    }else{
        return(
            <div>
                <h1>loading....</h1>
            </div>
        )
    };
};

export default Card;
