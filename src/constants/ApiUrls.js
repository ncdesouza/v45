/**
 * Created by nicholas on 23/01/16.
 */

const BASE_URL = 'http://video45.cloudapp.net'
//const BASE_URL = 'http://127.0.0.1:3033';


export function loginApi() {
  return '/api/login';
}

export function homeApi() {
  return '/api/home';
}

export function profileApi(username) {
  return '/api/profile/' + username;
}

export function newCommentApi() {
  return '/api/comment/new'
}

export function followUserApi() {
  return '/api/user/following/add'
}

export function unFollowUserApi() {
  return '/api/user/following/remove'
}

export function profilePrivacyApi() {
  return '/api/profile/settings/privacy'
}

export default BASE_URL
