import React from 'react';
import UserEventsIndexItem from './user_events_index_item';

class UserBookmarks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bookmarkKeys, bookmarks, events, registrations, currentUser, createBookmark, removeBookmark } = this.props;
    let bookmarkedEvents = [];
    for(let i = 0; i < bookmarkKeys.length; i++) {
      bookmarkedEvents.push(events[bookmarkKeys[i]]);
    }

    if (bookmarks !== []) {
      return(
        <div className='user-event-index'>
          {bookmarkedEvents.map(event => <UserEventsIndexItem
            currentUser={currentUser}
            bookmarks={bookmarks}
            registrations={registrations}
            event={event}
            createBookmark={createBookmark}
            removeBookmark={removeBookmark}
            />)}
          </div>
        );
    } else {
      return 'loading';
    }

  }

}

export default UserBookmarks;
