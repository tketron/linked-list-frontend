import { callAPI } from '../../../services/api';
import * as t from '../actionTypes';
import { getToken } from '../../../services/token';
import jwtDecode from 'jwt-decode';

export function fetchCurrentUser() {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_CURRENT_USER_REQUEST });
      let token = getToken();
      let decoded = jwtDecode(token);
      let currentUser = await callAPI(
        'get',
        `/users/${decoded.username}`,
        true
      );
      dispatch(fetchCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(t.FETCH_CURRENT_USER_FAIL(error));
      return Promise.reject();
    }
  };
}

function fetchCurrentUserSuccess(currentUser) {
  return {
    type: t.FETCH_CURRENT_USER_SUCCESS,
    user: currentUser
  };
}

function fetchCurrentUserFail(error) {
  return {
    type: t.FETCH_CURRENT_USER_FAIL,
    error
  };
}
