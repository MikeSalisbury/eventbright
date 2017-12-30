import React from 'react';
import UserEventsIndexItem from './user_events_index_item';

class UserOrganizedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarks, events, registrations, currentUser, createBookmark, removeBookmark } = this.props;
    let organizedEvents = [];
    for(let i = 0; i < events.length; i++) {
      if (currentUser.id === events[i].organizer_id) {
        organizedEvents.push(events[i]);
      }
    }
    return(
      <div className='user-event-index'>
        {organizedEvents.map(event => <UserEventsIndexItem
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

export default UserOrganizedEvents;
