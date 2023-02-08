import React from "react";
import "../../css/2023_02/230204_analog_clock.css";

const Clock = () => {
  return (
    <div className="wrap">
      <div className="clock">
        <div className="numbers">
          <span style={{ "--i": 0 }}><b>12</b></span>
          <span style={{ "--i": 1 }}><b>3</b></span>
          <span style={{ "--i": 2 }}><b>6</b></span>
          <span style={{ "--i": 3 }}><b>9</b></span>
        </div>
      </div>
    </div>
  )
}

export default Clock;