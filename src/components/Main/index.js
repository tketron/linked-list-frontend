import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Homepage from '../../containers/Homepage';
import ProfilePage from '../../containers/ProfilePage';
import NoAuthRoute from '../../containers/NoAuthRoute';
import ProtectedRoute from '../../containers/ProtectedRoute';
import { Route } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {/* NoAuthRoutes only let you go to them if you haven't authenticated */}
          <NoAuthRoute exact path="/login" component={Login} />
          <NoAuthRoute exact path="/signup" component={Signup} />
          {/* ProtectedRoutes only let you go to them if you are authenticated */}
          <Route path="/users/:username" component={ProfilePage} />
          {/* <ProtectedRoute path="/users/:username" component={ProfilePage} /> */}
          <ProtectedRoute exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}
