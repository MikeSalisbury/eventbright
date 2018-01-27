import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
import EventIndexContainer from './events/event_index_container';
import BrowseEventsContainer from './events/browse_events_container';
import UserProfileContainer from './user/user_profile_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = ({store}) => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route path='/' component={Footer} />
    <Switch>
      <Route exact path='/' component={EventIndexContainer} />
      <AuthRoute exact path='/signin' component={SessionContainer} />
      <AuthRoute exact path='/signin/login' component={SessionContainer} />
      <Route exact path='/signin/signup' component={SessionContainer} />
      <ProtectedRoute exact path='/events/new' component={EventFormContainer}/>
      <ProtectedRoute exact path ='/user' component={UserProfileContainer} />
      <Route exact path='/events/browse' component = {BrowseEventsContainer} />
      <Route exact path='/events/:eventId/edit'
        component={EventFormContainer} />
      <Route exact path='/events/:eventId'
        component={EventShowContainer} />
    </Switch>
  </div>
);

export default App;
