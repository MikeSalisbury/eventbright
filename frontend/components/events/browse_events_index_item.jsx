import React from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../bookmarks/bookmark';

class BrowseEventsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
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

  renderRegistration() {
    if (this.props.registrations[this.props.event.id]) {
      return (
        <div className='index-registration-icon'>
          <i className="fa fa-calendar" aria-hidden="true"
            />
          <h3 className='index-registration-ticket-count'>
            Tickets: {this.props.registrations[this.props.event.id]
              .num_tickets}
            </h3>
        </div>
        );
    } else {
      return (
        <div className='index-registration-icon'>
          <i className="fa fa-calendar" aria-hidden="true"
            />
          <h3 className='index-registration-ticket-count'>
            Tickets: 0
            </h3>
        </div>
      );
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
      <div className='browse-event-index-item'>
        <div className='browse-event-link-box'>
          <Link to={`/events/${event.id}`} className='browse-event-link-box'>
            <div className='browse-event-index-item-image-container'>
              <img className='browse-event-index-item-image' src={event.img_url} />
            </div>
          </Link>
            <div className='browse-event-index-item-detail-box'>
          <Link to={`/events/${event.id}`}>
              <div className='browse-event-index-details-box'>
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
            <div className='browse-event-index-item-bookmark-bar'>
              { this.renderRegistration() }
              <div className='index-bookmark-icon'>
                <Bookmark bookmarks={bookmarks}
                  toggleBookmark={this.toggleBookmark}
                  eventId={event.id}/>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default BrowseEventsIndexItem;
