import React from 'react';
import './UpcomingEvents.css';
import Event from '../backend/event';
// import EventCard from './EventCard';
import Calendar from './Calendar';

import CalendarIcon from '../assets/calendar-icon.svg';

function UpcomingEvents() {
  const [events, setEvents] = React.useState([]);
  const [state, setState] = React.useState(0);

  const ActiveView = () => {
    Event.getEvents().then(response => setEvents(response.data.events));
    // eslint-disable-next-line no-console
    console.log(events);

    switch (state) {
      case 1:
        return <Calendar />;
      default:
        return (
          <div className="card-grid">
            {events.map(event => (
              <div key="event-card" className="event-card">
                <h1 className="card-date">Feb</h1>
                <div className="card-info">
                  <h1>{event.title}</h1>
                  <p>Saturday, 4:00 PM</p>
                  <p>123 Somewhere Rd</p>
                  <h3 className="card-tag">Fundraiser</h3>
                </div>
              </div>
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
