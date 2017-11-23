import React from 'react';
import { Route } from 'react-router-dom';
import SessionContainer from './session_form/session_form_container';
import SigninFormContainer from './session_form/signin_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = ({store}) => (
  <div>
    
    <Route exact path='/signin' component={SigninFormContainer} />
    <Route exact path='/signin/login' component={SessionContainer} />
    <Route exact path='/signin/signup' component={SessionContainer} />
  </div>
);

export default App;
