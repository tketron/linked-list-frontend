import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ResultPage extends Component {
  render() {
    let results;
    if (this.props.searchType === 'users') {
      results = this.props.searchResults.map(user => <li>{user.username}</li>);
    } else if (this.props.searchType === 'companies') {
      results = this.props.searchResults.map(company => (
        <li>{company.handle}</li>
      ));
    } else if (this.props.searchType === 'jobs') {
      results = this.props.searchResults.map(job => (
        <li>
          {job.title} &nbsp;&nbsp;
          {job.company}
        </li>
      ));
    }
    return (
      <div className="ResultPage">
        <h1> Result Page</h1>
        {results}
      </div>
    );
  }
}
