import React from "react";
import "../../css/2023_02/230204_analog_clock.css";

const Clock = () => {
  let hr = document.querySelector('#hr');
  let mn = document.querySelector('#mn');
  let sc = document.querySelector('#sc');

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  })

  return (
    <div className="wrap">
      <div className="clock">
        <div className="numbers">
          <span style={{ "--i": 0 }}><b>12</b></span>
          <span style={{ "--i": 1 }}><b>3</b></span>
          <span style={{ "--i": 2 }}><b>6</b></span>
          <span style={{ "--i": 3 }}><b>9</b></span>
          <div className="circle" id="hr"><i></i></div>
          <div className="circle" id="mn"><i></i></div>
          <div className="circle" id="sc"><i></i></div>
        </div>
      </div>
    </div>
  )
}

export default Clock;