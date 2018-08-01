import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ProfileCard from '../ProfileCard';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div>
          <ProfileCard />
        </div>
      </div>
    );
  }
}

export default Profile;
