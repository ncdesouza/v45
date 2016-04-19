import {
  UPDATE_PROFILE_PRIVACY,
  SUCCESS_PROFILE_PRIVACY,
  ERROR_PROFILE_PRIVACY
} from '../actions/ProfileActions';


const initialState = {
  isFetching: false,
};

export default function privacy(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_PRIVACY:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SUCCESS_PROFILE_PRIVACY:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: '',
      });
    case ERROR_PROFILE_PRIVACY:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.msg,
      });
    default:
      return state;
  }
}
