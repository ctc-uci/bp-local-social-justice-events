import React from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';
import Calendar from './Calendar';

import CalendarIcon from '../assets/calendar-icon.svg';

function UpcomingEvents() {
  const [state, setState] = React.useState(0);

  const ActiveView = () => {
    switch (state) {
      case 0:
        return (
          <div className="card-grid">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        );
      case 1:
        return <Calendar />;
      default:
        return (
          <div className="card-grid">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
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
