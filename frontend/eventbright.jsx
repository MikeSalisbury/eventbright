import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, signup, logout, emailCheck } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById('root');
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.emailCheck = emailCheck;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
