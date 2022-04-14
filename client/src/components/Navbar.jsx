import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <navbar className="landing-navbar">
      <ul className="navbar--items">
        <li className="navbar--title">
          <a href="./#">OC Acts</a>
        </li>
        <li className="navbar--item">
          <a href="./resources">Resources</a>
        </li>
        <li className="navbar--item">
          <a href="./about">About</a>
        </li>
        <li className="navbar--item">
          <button className="submit-event-button" type="button">
            Submit Event
          </button>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
