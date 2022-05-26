import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Event from '../backend/event';
import leftArrow from '../assets/left_navigation_arrow.svg';
import rightArrow from '../assets/right_navigation_arrow.svg';

function OurCalendar() {
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
  const current = new Date();
  // current calendar month
  const [selectedMonth, setSelectedMonth] = useState(allMonthValues[current.getMonth()]);
  // current calendar year
  const [selectedYear, setSelectedYear] = useState(current.getFullYear());

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // Function to update selected date and calander text
  const handleDateChange = value => {
    setSelectedDate(value);
    setSelectedMonth(allMonthValues[value.getMonth()]);
    setSelectedYear(value.getFullYear());
  };

  // Function to handle selected Year change
  const handleYearChange = value => {
    const yearValue = value.getFullYear();
    setSelectedYear(yearValue);
  };

  // Function to handle selected Month change
  const handleMonthChange = value => {
    const monthValue = allMonthValues[value.getMonth()];
    setSelectedMonth(monthValue);
  };

  const navigationLabel = () => {
    return `${selectedMonth} ${selectedYear}`;
  };

  const handleActiveStartDateChange = ({ activeStartDate, view }) => {
    if (view === 'month') {
      const monthValue = allMonthValues[activeStartDate.getMonth()];
      setSelectedMonth(monthValue);
    }
    if (view !== 'decade') {
      const yearValue = activeStartDate.getFullYear();
      setSelectedYear(yearValue);
    }
  };

  const [events, setEvents] = React.useState([]);
  const [init, setInit] = React.useState(true);
  if (init === true) {
    Event.getEvents().then(response => setEvents(response.data.events));
    setInit(false);
  }

  const eventsMap = new Map();
  events.map(event => eventsMap.set(new Date(event.datetime).toLocaleDateString(), event.title));
  // eslint-disable-next-line no-console
  console.log(eventsMap);

  const tileContent = ({ date, view }) => {
    if (view === 'month' && eventsMap.has(date.toLocaleDateString())) {
      return (
        <div>
          <br />
          <button type="button" className="calendar-event-label">
            {eventsMap.get(date.toLocaleDateString())}
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        className="calendar"
        calendarType="US"
        next2Label={null}
        prev2Label={null}
        nextLabel={<img src={rightArrow} alt="Right navigation arrow" />}
        prevLabel={<img src={leftArrow} alt="Right navigation arrow" />}
        minDetail="decade"
        onActiveStartDateChange={handleActiveStartDateChange}
        navigationLabel={navigationLabel}
        onClickMonth={handleMonthChange}
        onClickYear={handleYearChange}
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default OurCalendar;
