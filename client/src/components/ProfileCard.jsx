import React from 'react';
import PropTypes from 'prop-types';
import linkedinLogo from '../assets/linkedin.svg';
import './ProfileCard.css';

function ProfileCard(props) {
  const { name, position, linkedinURL, imageURL } = props;
  return (
    <div className="card-container">
      <img className="profile-img" src={imageURL} alt="team member" />
      <div className="card-bottom">
        <div className="info">
          <h3 className="person-name">{name}</h3>
          <p className="person-title">{position}</p>
        </div>
        <div className="logoborder">
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ProfileCard;
