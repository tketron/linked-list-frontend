import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import JobCard from '../../containers/JobCard';
import './style.css';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
    this.props.fetchCurrentUser();
  }

  render() {
    const { jobs } = this.props;
    const appliedtoid = this.props.currentUser.applied_to.map(
      obj => obj.job_id
    );
    let displayJobs;

    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => {
        let appliedto;
        if (appliedtoid.includes(job.id)) {
          appliedto = true;
        } else {
          appliedto = false;
        }
        return (
          <JobCard
            key={job.id}
            jobid={job.id}
            title={job.title}
            company={job.company}
            salary={job.salary}
            equity={job.equity}
            appliedto={appliedto}
          />
        );
      });
    }

    return (
      <div>
        <Header history={this.props.history} />
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
