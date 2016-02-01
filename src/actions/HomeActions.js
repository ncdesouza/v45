/**
 * Created by nicholas on 23/01/16.
 */
import fetch from '../core/fetch';
import { homeApi } from '../constants/ApiUrls';
export const
  REQUEST_HOME = 'REQUEST_HOME',
  SUCCESS_HOME = 'SUCCESS_HOME',
  FAILURE_HOME = 'FAILURE_HOME';

function requestHome() {
  return {
    type: REQUEST_HOME,
    isFetching: true,
  };
}

function receiveHome(data) {
  return {
    type: SUCCESS_HOME,
    isFetching: false,
    data
  };
}

function errorHome(msg) {
  return {
    type: FAILURE_HOME,
    isFetching: false,
    msg,
  };
}

export function fetchHome() {
  return dispatch => {
    dispatch(requestHome());
    return fetch(homeApi(), {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(receiveHome(data.data));
        } else {
          dispatch(errorHome(data.msg));
          return Promise.reject(data)
        }
      }).catch(err => console.log(err));
  }
}
