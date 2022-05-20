import React from 'react';
import './UpcomingEvents.css';
import Event from '../backend/event';
// import EventCard from './EventCard';
import Calendar from './Calendar';

import CalendarIcon from '../assets/calendar-icon.svg';

function UpcomingEvents() {
  const allMonthValues = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // let initEvents = [];
  // const setInitEvents = newInitEvents => {
  //   initEvents = newInitEvents;
  // };

  // Event.getEvents().then(response => setInitEvents(response.data.events));
  // console.log(initEvents);

  const [events, setEvents] = React.useState([]);
  const [state, setState] = React.useState(0);

  // if this is the initial page start up, get 6 upcoming events to display
  const [init, setInit] = React.useState(true);
  if (init === true) {
    Event.getEvents().then(response => setEvents(response.data.events));
    setInit(false);
  }

  const getMonth = dateString => {
    const date = new Date(dateString);
    return allMonthValues[date.getMonth()];
  };

  const getDay = dateString => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getDate = dateString => {
    const date = new Date(dateString);

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = weekdays[date.getDay()];

    let hours = date.getHours() % 12;
    if (hours === 0) {
      hours = 12;
    }

    let ampm;
    if (hours < 12) {
      ampm = 'AM';
    } else {
      ampm = 'PM';
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${day}, ${hours}:${minutes} ${ampm}`;
  };

  const ActiveView = () => {
    switch (state) {
      case 1:
        return <Calendar />;
      default:
        return (
          <div className="card-grid">
            {events.map(event => (
              <button type="button" key={`${event.title}${event.datetime}`} className="event-card">
                <h1 className="card-date">
                  {getMonth(event.datetime)}
                  <br />
                  {getDay(event.datetime)}
                </h1>
                <div className="card-info">
                  <h1>{event.title}</h1>
                  <p>{getDate(event.datetime)}</p>
                  <p>{event.address}</p>
                  <h3 className="card-tag">Fundraiser</h3>
                </div>
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <div>
      <ul className="upcoming-events-header">
        <li className="upcoming-events-title">
          <h1 className="upcoming-events-title-text">Upcoming Events</h1>
        </li>
        <li className="calendar-view">
          <button type="button" className="button" onClick={() => setState(1 - state)}>
            <img className="calendar-view-symbol" src={CalendarIcon} alt="Calendar View" />
          </button>
        </li>
      </ul>
      {ActiveView()}
    </div>
  );
}

export default UpcomingEvents;
