import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ProfileCard from '../ProfileCard';

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
      </div>
    );
  }
}

export default Profile;
