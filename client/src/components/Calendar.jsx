import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

function OurCalendar() {
  // const newDate = new Date();
  // const date = newDate.getDate();
  // const month = newDate.toLocaleString('en-US', { month: 'long' });
  // const year = newDate.getFullYear();

  // Array to store month string values
  const allMonthValues = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = value => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = value => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = value => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  };

  return (
    <div className="app">
      <h2 className="calander-details">{calendarText}</h2>
      <Calendar
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default OurCalendar;
