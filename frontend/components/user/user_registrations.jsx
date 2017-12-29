import React from 'react';
import BrowseEventsIndexItem from '../events/browse_events_index_item';

class UserRegistrations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarks, events, registrations, registrationKeys, currentUser } = this.props;
    let registeredEvents = [];
    for(let i = 0; i < registrationKeys.length; i++) {
      registeredEvents.push(events[registrationKeys[i]]);
    }
    return(
      <div>
        {registeredEvents.map(event => <BrowseEventsIndexItem
          currentUser={currentUser}
          bookmarks={bookmarks}
          registrations={registrations}
          event={event}
          />)}
        </div>
    );
  }

}

export default UserRegistrations;
