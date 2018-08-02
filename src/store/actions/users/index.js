import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';

export function createUserRequest(newUserPayload) {
  return async dispatch => {
    // login for users
    try {
      dispatch({ type: t.CREATE_USER_REQUEST });
      let newUser = await callAPI('POST', '/users', false, newUserPayload);
      dispatch(createUserSuccess(newUser));
    } catch (error) {
      dispatch(createUserFail(error));
      return Promise.reject();
    }
  };
}

export function fetchUserRequest(user) {
  return async dispatch => {
    //fetch a user
    try {
      //make an API call to get a user
      dispatch({ type: t.FETCH_USER_REQUEST });
      let user = await callAPI('GET', `/users/${user.username}`, true);
      dispatch(fetchUserSuccess(user));
    } catch (error) {
      dispatch(fetchUserFail(error));
      return Promise.reject();
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: t.CREATE_USER_SUCCESS,
    newUser
  };
}

function createUserFail(error) {
  return {
    type: t.CREATE_USER_FAIL,
    error
  };
}

function fetchUserSuccess(user) {
  return {
    type: t.FETCH_USER_SUCCESS,
    user
  };
}

function fetchUserFail(error) {
  return {
    type: t.FETCH_USER_FAIL,
    error
  };
}
