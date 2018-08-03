import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ProfileCard extends Component {
  render() {
    return (
      <div className="profilecard">
        <p className="edit">Edit</p>
        <div>
          <img className="image" src={this.props.image} />
        </div>
        <div>{this.props.name}</div>
        <div> Employed By @ {this.props.companyname}</div>
        <div />
      </div>
    );
  }
}

export default ProfileCard;

ProfileCard.propTypes = {
  image: PropTypes.string,
  companyname: PropTypes.string,
  name: PropTypes.string
};
