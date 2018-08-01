import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import JobCard from '../JobCard';
import './style.css';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
    this.props.fetchCurrentUser();
  }

  render() {
    const { jobs } = this.props;
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
        />
      ));
    }

    return (
      <div>
        <Header
          displayName={this.props.currentUser.first_name}
          profilePic={this.props.currentUser.photo}
          currentUsername={this.props.currentUser.username}
        />
        <div className="feed">
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

// Homepage.propTypes = {
//   currentUser: PropTypes.object,
// };
