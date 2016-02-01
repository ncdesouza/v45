/**
 * Created by nicholas on 23/01/16.
 */
import {
  REQUEST_PROFILE,
  SUCCESS_PROFILE,
  ERROR_PROFILE } from '../actions/ProfileActions';


const defaultState = {
  isFetching: false,
  data: [],
  error: '',
};

export default function profile(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username,
      });
    case SUCCESS_PROFILE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        error: '',
      });
    case ERROR_PROFILE:
      return Object.assign({}, state, {
        isFetching: false,
        data: [],
        error: action.message,
      });
    default:
      return state;
  }
}
