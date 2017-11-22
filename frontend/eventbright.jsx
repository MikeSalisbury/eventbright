import React from 'React';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
