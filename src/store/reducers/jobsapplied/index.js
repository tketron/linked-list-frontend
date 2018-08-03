import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function jobsappliedReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.APPLY_JOB: {
      return [action.appliedjobs, ...state];
    }

    default:
      return state;
  }
}
