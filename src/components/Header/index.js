import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';
import { callAPI } from '../../services/api';
import { Route, Redirect } from 'react-router-dom';
import ResultPage from '../ResultPage';
import { search } from '../../store/actions/search';
import ProtectedRoute from '../../containers/ProtectedRoute';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false
};

export default class Header extends Component {
  state = DEFAULT_STATE;

  handleSearch = e => {
    e.preventDefault();
    // TODO: search
    let chossedtype = this.props.searchCategories[this.state.searchCategoryIdx];
    const searchedtext = this.state.searchText;
    if (chossedtype === 'people') {
      chossedtype = 'users';
    }

    this.props.search({ chossedtype: chossedtype, searchedtext: searchedtext });
    this.props.history.push('/results'); // send the user to results
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  render() {
    const { searchText, searchCategoryIdx } = this.state;
    const { searchCategories, displayName, profilePic } = this.props;

    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={i === searchCategoryIdx}
                  onChange={() => this.handleClick(i)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <Link to={`/users/${this.props.currentUser.username}`}>
          <div className="profile-area">
            <img src={this.props.currentUser.photo} alt="Profile" />
            <span>{this.props.currentUser.first_name}</span>
          </div>
        </Link>
      </div>
    );
  }
}

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'people'],
  profilePic: UserProfilePlaceholder
};

Header.propTypes = {
  searchCategories: PropTypes.array,
  displayName: PropTypes.string,
  profilePic: PropTypes.string,
  currentUsername: PropTypes.string
};
