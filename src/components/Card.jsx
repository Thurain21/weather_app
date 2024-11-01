import React from "react";
import { WiShowers } from "react-icons/wi";
import { RiArrowRightSFill } from "react-icons/ri";
import { TiSocialVimeoCircular } from "react-icons/ti";

const Card = () => {
  return (
    <div >
      <div className="mt-4">
        <p>Nov 1, 08:42am</p>
        <h3>London, GB</h3>
        <h3>
          <WiShowers size={35} />
          13°C
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
};

export default Card;
