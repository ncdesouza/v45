/**
 * Created by nicholas on 21/01/16.
 */


import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER } from '../actions/AuthActions';

const initialAuthState = {
  isFetching: false,
  isAuthenticated: false,
  user: null,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: null,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: '',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        user: null,
        errorMessage: action.message,
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        user: null,
      });
    default:
      return state;
  }
}


