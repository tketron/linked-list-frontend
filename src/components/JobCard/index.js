import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { callAPI } from '../../services/api';

export default class JobCard extends Component {
  async jobapplied() {
    console.log('JOb applied');
    const result = await callAPI(
      'Post',
      `/jobs/${this.props.jobid}/applications`,
      true
    );
  }

  render() {
    return (
      <div className="JobCard">
        <div className="job-info">
          <img src={this.props.image} alt="Company Logo" />
          <ul>
            <li>
              {this.props.title} @{this.props.company}
            </li>
            <li>
              {this.props.salary} | {this.props.equity}
            </li>
          </ul>
        </div>
        <button className="apply-button" onClick={() => this.jobapplied()}>
          Apply
        </button>
      </div>
    );
  }
}

JobCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  salary: PropTypes.number,
  equity: PropTypes.number
};
