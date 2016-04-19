/**
 * Created by nicholas on 23/01/16.
 */

import { combineReducers } from 'redux';

import auth from './AuthReducer';
import home from './HomeReducer';
import profile  from './ProfileReducer';
import user from './UserReducer';
import privacy from './PrivacyReducer';

const reducer = combineReducers({
  auth,
  home,
  profile,
  user,
  privacy,
});

export default reducer;
