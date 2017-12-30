import React from 'react';
import UserEventsIndexItem from './user_events_index_item';

class UserRegistrations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarks, events, registrations, registrationKeys, currentUser, createBookmark, removeBookmark } = this.props;
    let registeredEvents = [];
    for(let i = 0; i < registrationKeys.length; i++) {
      registeredEvents.push(events[registrationKeys[i]]);
    }
    return(
      <div className='user-event-index'>
        {registeredEvents.map(event => <UserEventsIndexItem
          currentUser={currentUser}
          bookmarks={bookmarks}
          registrations={registrations}
          event={event}
          createBookmark={createBookmark}
          removeBookmark={removeBookmark}
          />)}
        </div>
    );
  }

}

export default UserRegistrations;
