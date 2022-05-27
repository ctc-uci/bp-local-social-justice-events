import React from 'react';
import './About.css';
import ProfileCard from '../components/ProfileCard';
import frog from '../assets/all-the-homies-love-ctc-frog.png';
import caroline from '../assets/caroline.jpeg';
import minh from '../assets/minh.jpg';
import johnny from '../assets/johnny.jpg';

function About() {
  const team = [
    {
      name: 'Caroline Wang',
      position: 'Developer',
      linkedinURL: 'https://www.linkedin.com/in/caroline-y-wang/',
      imageURL: caroline,
    },
    {
      name: 'Minh Nguyen',
      position: 'Designer',
      linkedinURL: 'https://www.linkedin.com/in/minh-nguyen16/',
      imageURL: minh,
    },
    {
      name: 'Johnny Phan',
      position: 'Developer',
      linkedinURL: 'https://www.linkedin.com/in/jphan345/',
      imageURL: johnny,
    },
  ];

  const profileImages = () => {
    return team.map(person => (
      <div key="teamProfileCards">
        <ProfileCard
          name={person.name}
          position={person.position}
          linkedinURL={person.linkedinURL}
          imageURL={person.imageURL}
        />
      </div>
    ));
  };
  return (
    <div>
      <div className="about">
        <div className="about-text">
          <h1 className="title">About us!</h1>
          <p className="description">
            We are a group of undergraduate students at UC Irvine affilitated with Commit the
            Change. Our passion for volunteering and social justice issues motivated us to use our
            tech skills to create a product for social good.
          </p>
        </div>
        <img className="frog-img" src={frog} alt="ctc frog happy" />
      </div>
      <div className="team-info">
        <h1 className="team-header">Meet the team!</h1>
        <div className="profile-cards">{profileImages()}</div>
      </div>
    </div>
  );
}

export default About;
