/**
 * Created by nicholas on 23/01/16.
 */
import fetch from '../core/fetch';
export const
  REQUEST_PUBLIC = 'REQUEST_PUBLIC',
  RECEIVE_PUBLIC = 'RECEIVE_PUBLIC',
  ERROR_PUBLIC   = 'ERROR_PUBLIC';


function publicRequest(username) {
  return {
    type: REQUEST_PUBLIC,
  }
}

function publicReceive(data) {
  return {
    type: REQUEST_PUBLIC,
    data
  }
}

function publicError(message) {
  return {
    type: ERROR_PUBLIC,
    message
  }
}


function fetchPublic() {
  return dispatch => {
    dispatch(publicRequest());

  }
}
