import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = { type: '', results: [] };

export default function search(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.SEARCH_SUCCESS: {
      return { type: action.searchType, results: action.result };
    }

    default:
      return state;
  }
}
