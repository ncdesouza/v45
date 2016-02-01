/**
 * Created by nicholas on 23/01/16.
 */
import fetch from '../core/fetch';
import { profileApi } from '../constants/ApiUrls';

export const
  REQUEST_PROFILE = 'REQUEST_PROFILE',
  SUCCESS_PROFILE = 'SUCCESS_PROFILE',
  ERROR_PROFILE   = 'ERROR_PROFILE';

function requestProfile(username) {
  return {
    type: REQUEST_PROFILE,
    isFetching: true,
    username: username,
  };
}

function receiveProfile(profile) {
  return {
    type: SUCCESS_PROFILE,
    isFetching: false,
    data: profile,
  }
}

function errorProfile(message) {
  return {
    type: ERROR_PROFILE,
    isFetching: false,
    profile: [],
    message: message,
  }
}


export function fetchProfile(username) {
  return dispatch => {
    dispatch(requestProfile(username));
    return fetch(profileApi(username))
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          dispatch(receiveProfile(data.data));
        } else {
          dispatch(errorProfile(data.message));
          Promise.reject(data)
        }
      })
      .catch(err => console.log(err));
  }
}
