import React from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../bookmarks/bookmark';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark() {

    if (this.props.currentUser !== null) {
      if(this.props.bookmarks[this.props.event.id]) {
        this.props.removeBookmark(this.props.event.id);
      } else {
        this.props.createBookmark(this.props.event.id);
      }
    } else {
      this.props.history.push('/signin');
    }
  }

render() {
  const { event, bookmarks } = this.props;
    const startDateTime = new Date(event.start_datetime).toUTCString();
    const day = startDateTime.slice(0, 4).toUpperCase();
    const date = startDateTime.slice(5, 7);
    const mon = startDateTime.slice(8, 11).toUpperCase();
    const year = startDateTime.slice(12, 16);
    const time = startDateTime.slice(17, 22);
    const hour = (parseInt(startDateTime.slice(17,19)) > 12 )
     ? parseInt(startDateTime.slice(17,19))
      - 12 : parseInt(startDateTime.slice(17,19)) ;
    const mins = startDateTime.slice(20,22);
    const meridiem = (parseInt(startDateTime.slice(17,19)) < 12) ? 'AM': 'PM';

    return (
      <div className='event-index-item'>
        <Link to={`/events/${event.id}`}>
          <div className='event-index-item-image container'>
            <img className='event-index-item-image' src={event.img_url} />
          </div>
          <div className='event-index-details-box'>
            <div className='event-index-item-start'>
              {`${day} ${mon} ${date} ${year} ${hour}:${mins} ${meridiem}`}
            </div>
            <div className='event-index-item-title'>
              {event.title}
            </div>
            <div className='event-index-item-location'>
              {event.location}
            </div>
          </div>
          </Link>
          <div className='event-index-item-bookmark-bar'>
            <div className='index-bookmark-icon'>
              <Bookmark bookmarks={bookmarks}
                toggleBookmark={this.toggleBookmark}
                eventId={event.id}/>
            </div>
          </div>
      </div>
    );
  }
}

export default EventIndexItem;
