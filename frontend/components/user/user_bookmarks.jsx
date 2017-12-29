import React from 'react';
import BrowseEventsIndexItem from '../events/browse_events_index_item';

class UserBookmarks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarkKeys, bookmarks, events, registrations, currentUser } = this.props;
    let bookmarkedEvents = [];
    for(let i = 0; i < bookmarkKeys.length; i++) {
      bookmarkedEvents.push(events[bookmarkKeys[i]]);
    }
    return(
      <div>
        {bookmarkedEvents.map(event => <BrowseEventsIndexItem
          currentUser={currentUser}
          bookmarks={bookmarks}
          registrations={registrations}
          event={event}
          />)}
        </div>
    );
  }

}

export default UserBookmarks;
