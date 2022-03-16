import React from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';

import CalendarIcon from '../assets/calendar-icon.svg';

function UpcomingEvents() {
  return (
    <div>
      <ul className="upcoming-events-header">
        <li className="upcoming-events-title">
          <h1 className="upcoming-events-title-text">Upcoming Events</h1>
        </li>
        <li className="calendar-view">
          <a href="./#">
            <img className="calendar-view-symbol" src={CalendarIcon} alt="Calendar View" />
          </a>
        </li>
      </ul>
      <div className="card-grid">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default UpcomingEvents;
