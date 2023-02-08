import React from "react";
import "../../css/2023_02/230203_mini_calendar.css";

const Calendar = () => {

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let day = new Date();
  let dayNum = day.getDay();
  let dayList = document.querySelectorAll('.week li');

  let h1 = document.createElement('h1');
  h1.innerHTML = day.getDate();

  let h3 = document.createElement('h3');
  h3.innerHTML = day.getFullYear();

  let h5 = document.createElement('h5');
  h5.innerHTML = months[day.getMonth()];

  dayList.forEach((e, i) => {
    if (i === dayNum - 1) {
      e.classList.add('current');
      e.appendChild(h1);
      e.appendChild(h3);
      e.appendChild(h5);
    }
  })

  return (
    <div className="wrap">
      <ul className="week">
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
      </ul>
    </div>
  )
}

export default Calendar;