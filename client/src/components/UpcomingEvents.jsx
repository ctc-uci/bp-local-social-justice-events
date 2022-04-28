import React from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';

import CalendarIcon from '../assets/calendar-icon.svg';

function UpcomingEvents() {
  let state = 0;
  const [active, setActive] = React.useState(state);

  const SetView = i => {
    state = 1 - i;
    setActive(state);
  };

  const ActiveView = () => {
    switch (active) {
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
        return (
          <div>
            <h1>TO DO: Calendar here</h1>
          </div>
        );
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
          <button type="button" className="button" onClick={() => SetView(state)}>
            <img className="calendar-view-symbol" src={CalendarIcon} alt="Calendar View" />
          </button>
        </li>
      </ul>
      {ActiveView()}
    </div>
  );
}

export default UpcomingEvents;
