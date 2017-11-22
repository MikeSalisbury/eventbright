import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = (user) => dispatch => (
  APIUtil.login(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(newUser => dispatch(receiveCurrentUser(newUser)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(user => dispatch(receiveCurrentUser(null)))
);
