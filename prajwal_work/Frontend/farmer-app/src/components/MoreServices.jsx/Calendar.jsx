/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Calendar} from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import calendarcss from './Calendarcss.css'
const Calendarcomp = () => {
    const [date, setDate] = useState(new Date());
    return (
       <div>
        
          {/* <h1 className='text-center'>React Calendar</h1> */}
          <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
          </div>
          {/* <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p> */}
        </div>
      
      );
}

export default Calendarcomp
