import React from 'react';
import './EventCard.css';

function EventCard() {
  return (
    <div className="event-card">
      <h1 className="card-date">
        Feb
        <br />
        12
      </h1>
      <div className="card-info">
        <h1>Event Title</h1>
        <p>Saturday, 4:00 PM</p>
        <p>123 Somewhere Rd</p>
        <h3 className="card-tag">Fundraiser</h3>
      </div>
    </div>
  );
}

export default EventCard;
