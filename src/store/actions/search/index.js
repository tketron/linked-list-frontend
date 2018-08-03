import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function search(searchdetails) {
  return async dispatch => {
    try {
      let result = await callAPI(
        'get',
        `/${searchdetails.chossedtype}?search=${searchdetails.searchedtext}`,
        true
      );
      dispatch(searchSucess(searchdetails.chossedtype, result));
    } catch (e) {
      dispatch(searchFail(e));
      return Promise.reject();
    }
  };
}
export function searchSucess(searchType, result) {
  return { type: t.SEARCH_SUCCESS, searchType, result };
}

export function searchFail(error) {
  return { type: t.SEARCH_FAIL, error };
}
