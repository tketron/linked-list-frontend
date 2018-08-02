import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  username: '',
  password: '',
  first_name: '',
  last_name: '',
  email: '',
  photo: '',
  current_company: '',
  applied_to: []
};

export default function user(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
}
