/**
 * Created by nicholas on 31/01/16.
 */
/**
 * Created by nicholas on 31/01/16.
 */
import fetch from '../core/fetch';
import { followUserApi, unFollowUserApi } from '../constants/ApiUrls';

export const
  FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST',
  FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS',
  FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE',
  UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST',
  UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS',
  UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

function followUserRequest() {
  return {
    type: FOLLOW_USER_REQUEST,
    isFetching: true,
  }
}

function followUserSuccess() {
  return {
    type: FOLLOW_USER_SUCCESS,
    isFetching: false,
    msg: '',
  }
}

function followUserError(msg) {
  return {
    type: FOLLOW_USER_FAILURE,
    isFetching: false,
    msg,
  };
}

function unFollowUserRequest() {
  return {
    type: FOLLOW_USER_REQUEST,
    isFetching: true,
  }
}

function unFollowUserSuccess() {
  return {
    type: FOLLOW_USER_SUCCESS,
    isFetching: false,
    msg: '',
  }
}

function unFollowUserError(msg) {
  return {
    type: FOLLOW_USER_FAILURE,
    isFetching: false,
    msg,
  };
}

export function followUser(myId, theirId) {
  return dispatch => {
    dispatch(followUserRequest());
    return fetch(followUserApi(), {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        myId: myId,
        theirId: theirId,
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          return dispatch(followUserSuccess());
        } else {
          dispatch(followUserError(data));
        }
      })
      .catch((err) => dispatch(followUserError(err)))
  }
}

export function unFollowUser(myId, theirId) {
  return dispatch => {
    dispatch(unFollowUserRequest());
    return fetch(unFollowUserApi(), {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        myId: myId,
        theirId: theirId,
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          return dispatch(unFollowUserSuccess());
        } else {
          dispatch(unFollowUserError(data));
        }
      })
      .catch((err) => dispatch(unFollowUserError(err)))
  }
}
