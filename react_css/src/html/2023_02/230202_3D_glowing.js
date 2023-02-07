import React from "react";
import "../../css/2023_02/230202_3D_glowing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPhone, faWifi, faMoon, faVolumeXmark, faIndustry } from '@fortawesome/free-solid-svg-icons';
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css";

const Glow = () => {
  return (
    <div className="wrap">
      <div className="buttons">
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          {/* <i class="fa-solid fa-phone"></i> */}
          <FontAwesomeIcon icon={faPhone} />
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          <FontAwesomeIcon icon={faPlane} />
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          <FontAwesomeIcon icon={faWifi} />
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          <FontAwesomeIcon icon={faMoon} />
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span></span>
          <FontAwesomeIcon icon={faIndustry} />
        </label>
      </div>
    </div>
  )
}

export default Glow;