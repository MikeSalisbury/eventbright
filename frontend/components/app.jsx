import React from 'react';
import { Route } from 'react-router-dom';
import SessionContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import EventFormContainer from './event/event_form_container';

const App = ({store}) => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/signin' component={SessionContainer} />
    <Route exact path='/signin/login' component={SessionContainer} />
    <Route exact path='/events/create' component={EventFormContainer}/>
    <Route exact path='/signin/signup' component={SessionContainer} />
  </div>
);

export default App;
