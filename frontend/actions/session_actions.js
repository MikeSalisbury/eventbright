import * as APIUtil from '../util/session_api_util';
// import { fetchBookmarks } from './bookmark_actions';
// import { fetchRegistrations } from './registration_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_VALID_EMAIL = 'RECEIVE_VALID_EMAIL';
export const RECEIVE_DEMO_USER = 'RECEIVE_DEMO_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveValidEmail = (validEmail) => ({
  type: RECEIVE_VALID_EMAIL,
  validEmail
});

export const receiveDemoUser = (demoUser) => ({
  type: RECEIVE_DEMO_USER,
  demoUser
});

export const logoutUser = (currentUser) => ({
  type: LOGOUT_USER,
  currentUser
});

export const emailCheck = (email) => dispatch => (
  APIUtil.emailCheck(email)
  .then(validEmail => dispatch(receiveValidEmail(validEmail)))
);

export const login = (user) => dispatch => (
  APIUtil.login(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)),
   err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const demoLogin = (demoUser) => dispatch => (
  APIUtil.login(demoUser)
  .then(user => dispatch(receiveDemoUser(user)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)),
   err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(user => dispatch(logoutUser(null))
  )
);
