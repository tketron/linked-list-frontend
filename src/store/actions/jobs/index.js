import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchJobsRequest() {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_JOBS_REQUEST });
      // call the API for /jobs, auth required
      let jobs = await callAPI('get', '/jobs', true);
      // dispatch the success action creator and the jobs that we got back
      dispatch(fetchJobsSuccess(jobs));
    } catch (error) {
      dispatch(fetchJobsFail(error));
      return Promise.reject();
    }
  };
}

export function applytojob(jobid) {
  console.log('Hello');
  return async dispatch => {
    try {
      dispatch({ type: t.APPLY_JOB });
      let appliedjobs = await callAPI(
        'Post',
        `/jobs/${this.props.jobid}/applications`,
        true
      );
      console.log(appliedjobs);
      dispatch({ type: t.APPLY_JOB, appliedjobs });
    } catch (e) {
      dispatch({ type: t.APPLY_JOB_ERROR });
    }
  };
}
export function fetchJobsSuccess(jobs) {
  return { type: t.FETCH_JOBS_SUCCESS, jobs };
}

export function fetchJobsFail(error) {
  return { type: t.FETCH_JOBS_FAIL, error };
}
