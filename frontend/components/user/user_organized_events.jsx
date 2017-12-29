import React from 'react';
import BrowseEventsIndexItem from '../events/browse_events_index_item';

class UserOrganizedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarks, events, registrations, currentUser } = this.props;
    let organizedEvents = [];
    for(let i = 0; i < events.length; i++) {
      if (currentUser.id === events[i].organizer_id) {
        organizedEvents.push(events[i]);
      }
    }
    return(
      <div>
        {organizedEvents.map(event => <BrowseEventsIndexItem
          currentUser={currentUser}
          bookmarks={bookmarks}
          registrations={registrations}
          event={event}
          />)}
        </div>
    );
  }

}

export default UserOrganizedEvents;
