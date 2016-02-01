/**
 * Created by nicholas on 23/01/16.
 */

import {
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from '../actions/UserActions';


const defaultState = {
  isFetching: false,
  data: [],
  error: '',
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
    case UNFOLLOW_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FOLLOW_USER_SUCCESS:
    case UNFOLLOW_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: '',
      });
    case FOLLOW_USER_FAILURE:
    case UNFOLLOW_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.msg,
      });

    default:
      return state;
  }
}
