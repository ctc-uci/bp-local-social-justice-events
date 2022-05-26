import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import navbarFrog from '../assets/all-the-homies-love-ctc-frog.png';

function Navbar() {
  return (
    <navbar className="landing-navbar">
      <ul className="navbar--items">
        <li className="navbar--item">
          <NavLink to="./#">
            <img className="navbar-frog-img" src={navbarFrog} alt="ctc frog holding heart" />
          </NavLink>
        </li>
        <li className="navbar--title">
          <NavLink to="./#">OC Acts</NavLink>
        </li>
        <li className="navbar--item">
          <NavLink to="./resources" className="selectable">
            Resources
          </NavLink>
        </li>
        <li className="navbar--item">
          <NavLink to="./about" className="selectable">
            About
          </NavLink>
        </li>
        <li className="navbar--item">
          <NavLink to="./submit-event">
            <button className="submit-event-button" type="button">
              Submit Event
            </button>
          </NavLink>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <navbar className="landing-navbar">
//       <ul className="navbar--items">
//         <li className="navbar--item">
//           <a href="./#">
//             <img className="navbar-frog-img" src={navbarFrog} alt="ctc frog holding heart" />
//           </a>
//         </li>
//         <li className="navbar--title">
//           <a href="./#">OC Acts</a>
//         </li>
//         <li className="navbar--item">
//           <a href="./resources">Resources</a>
//         </li>
//         <li className="navbar--item">
//           <a className="selected" href="./about">
//             About
//           </a>
//         </li>
//         <li className="navbar--item">
//           <a href="./submit-event">
//             <button className="submit-event-button" type="button">
//               Submit Event
//             </button>
//           </a>
//         </li>
//       </ul>
//     </navbar>
//   );
// }
