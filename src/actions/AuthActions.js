/**
 * Created by nicholas on 21/01/16.
 */
import fetch from '../core/fetch';
import { loginApi } from '../constants/ApiUrls';
import { USER, TOKEN } from '../constants/Cookie';

export const
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_USER = 'LOGOUT_USER';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user.user,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_USER,
    isFetching: false,
    isAuthenticated: false,
  };
}


const cred = { 'email': 'user2', 'password': 'test' };
export function loginUser(credentials = cred) {
    return dispatch => {

      dispatch(requestLogin(credentials));

      return fetch(loginApi(), {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            console.log(data);
            document.cookie = TOKEN + '=' + data.token;
            dispatch(receiveLogin(data));
          } else {
            dispatch(loginError(data.message));
            let date = new Date();
            date.setDate(date.getDate() - 1);
            document.cookie = getCookie(TOKEN) + date;
            return Promise.reject(data)
          }

        })
        .catch(err => console.log(err));
    }
}


function getCookie(cname) {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}


export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    delete_cookie(TOKEN);
    delete_cookie(USER);
    window.location.replace('/');
  }
}

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
