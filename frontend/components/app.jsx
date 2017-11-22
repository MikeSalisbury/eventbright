import React from 'react';
import { Route } from 'react-router-dom';
import SessionContainer from './session_form/session_form_container';

const App = ({store}) => (
  <div>
    <Route path='/signin/login' component={SessionContainer} />
    <Route path='/signin/signup' component={SessionContainer} />
  </div>
);

export default App;
