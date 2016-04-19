/**
 * Created by nicholas on 23/01/16.
 */
import fetch from '../core/fetch';
import { profileApi, profilePrivacyApi } from '../constants/ApiUrls';

export const
  REQUEST_PROFILE = 'REQUEST_PROFILE',
  SUCCESS_PROFILE = 'SUCCESS_PROFILE',
  ERROR_PROFILE   = 'ERROR_PROFILE',
  UPDATE_PROFILE_PRIVACY = 'UPDATE_PROFILE_PRIVACY',
  SUCCESS_PROFILE_PRIVACY = 'SUCCESS_PROFILE_PRIVACY',
  ERROR_PROFILE_PRIVACY   = 'ERROR_PROFILE_PRIVACY';

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

function updateProfilePrivacy(username, setting) {
  return {
    type: UPDATE_PROFILE_PRIVACY,
    isFetching: true,
    username: username,
    setting: setting,
  };
}

function receiveProfilePrivacy(profile) {
  return {
    type: SUCCESS_PROFILE_PRIVACY,
    isFetching: false,
  }
}

function errorProfilePrivacy(message) {
  return {
    type: ERROR_PROFILE_PRIVACY,
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

export function fetchProfilePrivacy(username) {
  return dispatch => {
    dispatch(updateProfilePrivacy(username));
    return fetch(profilePrivacyApi(username), {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(username)
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          dispatch(receiveProfilePrivacy(data.data));
        } else {
          dispatch(errorProfilePrivacy(data.message));
          Promise.reject(data)
        }
      })
      .catch(err => console.log(err));
  }
}
