/**
 * Created by nicholas on 23/01/16.
 */

import { REQUEST_HOME, SUCCESS_HOME, FAILURE_HOME } from '../actions/HomeActions';

const initialState = {
  isFetching: false,
  data: []
}

export default function home(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HOME:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SUCCESS_HOME:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        errorMessage: '',
      });
    case FAILURE_HOME:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        errorMessage: action.msg,
      });
    default:
      return state;
  }
}
