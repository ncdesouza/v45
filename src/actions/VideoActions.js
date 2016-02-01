/**
 * Created by nicholas on 31/01/16.
 */
import fetch from '../core/fetch';
import { newCommentApi } from '../constants/ApiUrls';
import { fetchHome } from './HomeActions';
const
  NEW_COMMENT_REQUEST = 'NEW_COMMENT_REQUEST',
  NEW_COMMENT_SUCCESS = 'NEW_COMMENT_SUCCESS',
  NEW_COMMENT_FAILURE = 'NEW_COMMENT_FAILURE';

function newCommentRequest() {
  return {
    type: NEW_COMMENT_REQUEST,
    isPosting: true,
  }
}

function newCommentSuccess(data) {
  return {
    type: NEW_COMMENT_REQUEST,
    isPosting: false,
    data,
  }
}

function newCommentError(msg) {
  return {
    type: NEW_COMMENT_FAILURE,
    isFetching: false,
    msg,
  };
}

export function newComment(userId, videoId, comment) {
  return dispatch => {
    dispatch(newCommentRequest());
    return fetch(newCommentApi(), {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        videoId: videoId,
        comment: comment
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(newCommentSuccess(data));
          return dispatch(fetchHome())
        } else {
          dispatch(newCommentError(data));
        }
      })
      .catch((err) => dispatch(newCommentError(err)))
  }
}
