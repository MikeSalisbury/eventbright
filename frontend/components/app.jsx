import React from 'react';
import { Route } from 'react-router-dom';
import SessionContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
const App = ({store}) => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/signin' component={SessionContainer} />
    <Route exact path='/signin/login' component={SessionContainer} />
    <Route exact path='/signin/signup' component={SessionContainer} />
    <Route exact path='/events/new' component={EventFormContainer}/>
    <Route exact path='/events/:eventId/edit'
      component={EventFormContainer} />
    <Route exact path='/events/:eventId'
      component={EventShowContainer} />
  </div>
);

export default App;
