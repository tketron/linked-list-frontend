import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../ProfileCard';
import JobCard from '../JobCard';

export default class ResultPage extends Component {
  render() {
    let results;
    if (this.props.searchType === 'users') {
      results = this.props.searchResults.map(user => (
        <ProfileCard
          image={user.photo}
          companyname={user.current_company}
          name={`${user.first_name} ${user.last_name}`}
        />
      ));
    } else if (this.props.searchType === 'companies') {
      results = this.props.searchResults.map(company => (
        <ProfileCard image={company.logo} name={company.name} />
      ));
    } else if (this.props.searchType === 'jobs') {
      results = this.props.searchResults.map(job => (
        <JobCard
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
        />
      ));
    }
    return (
      <div className="ResultPage">
        <h1>Search Results</h1>
        {results}
      </div>
    );
  }
}
