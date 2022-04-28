import React from 'react';
import './About.css';
import frog from '../assets/all-the-homies-love-ctc-frog.png';

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="title">About us!</h1>
        <p className="description">
          We are a group of undergraduate students at UC Irvine affilitated with Commit the Change.
          Our passion for volunteering and social justice issues motivated us to use our tech skills
          to create a product for social good.
        </p>
      </div>
      <img className="frog-img" src={frog} alt="ctc frog happy" />
    </div>
  );
}

export default About;
