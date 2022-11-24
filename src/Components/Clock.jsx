import React from 'react'
import { useState, useEffect } from 'react'

import "../Style/clock.css"

export default function Clock() {
  const [theme, setTheme] = useState('claro');
  const [time, setTime ] = useState(new Date());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSecunds] = useState(time.getSeconds());
  const [hours, setHours] = useState(time.getHours());
  const [date, setDate] = useState(time.getDate());
  const [day, setDay] = useState(time.getDay());
  const [month, setMonth] = useState(time.getMonth());

  useEffect(()=>{
    setInterval(()=>{
      const date = new  Date();
      setTime(date);
      setSecunds(date.getSeconds());
      setMinutes(date.getMinutes());
      setSecunds(date.getSeconds());
      setHours(date.getHours());
      setDate(date.getDate());
      setDay(date.getDay());
      setMonth(date.getMonth());
    },1000)
  },[])
  

  const days = ['domingo','Segunda-Feira', 'terca-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado']
  const months = ['jan','fev','mar','abr','may','jun','jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  const hoursForClock = hours % 12;
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

  const needleHours = {
    transform : `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  }
  const needleMinutes = {
    transform : `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  }
  const needleSecund = {
    transform : `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  }

  const handleClick = (e) => {
    if(theme === 'claro'){
      setTheme('escuro');
    }else{
      setTheme('claro')
    }
  };

  return (
    <div className={`clock-project dark ${theme}`}>
      <button className="toggle" onClick={handleClick}>modo {theme}</button>
      <div className="clock-container">
        <div className="clock">
          <div
            className="needle hour"
            style= { needleHours } 
          ></div>
          <div 
            className="needle minute"
            style={ needleMinutes }
          ></div>
          <div 
            className="needle secund"
            style = { needleSecund }
          ></div>
          <div className="center-point"></div>
        </div>

        <div className="time">
        {
          `${hours}:${minutes} ${ampm}`
        }
        </div>
        <div className="date">
          {
            `${days[day]}, ${months[month]}, `
          }
          <span className="circle"> {date} </span>
        </div>
      </div>
    </div>
  )
}
