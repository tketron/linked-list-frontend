import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ProfileCard from '../ProfileCard';
import { callAPI } from '../../services/api';
import Header from '../../containers/Header';

class ProfilePage extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    const user = await callAPI(
      'GET',
      `/users/${this.props.match.params.username}`,
      true
    );
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <div className="ProfilePage">
          <h1>Profile Page</h1>
          <div>
            <ProfileCard
              name={this.state.user.first_name}
              companyname={this.state.user.current_company}
              image={this.state.user.photo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
