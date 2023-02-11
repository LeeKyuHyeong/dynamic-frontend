import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let milliseconds = time.getMilliseconds();
    let hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
    let minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    let secondDeg = (seconds / 60) * 360 + (milliseconds / 1000) * 6;

    return {
      hour: hourDeg,
      minute: minuteDeg,
      second: secondDeg,
    };
  };

  let { hour, minute, second } = handleTime();

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hour}deg)` }}
        />
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minute}deg)` }}
        />
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${second}deg)` }}
        />
      </div>
    </div>
  );
}

export default Clock;