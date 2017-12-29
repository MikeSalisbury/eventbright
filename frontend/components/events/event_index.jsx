import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents();
    if (this.props.currentUser !== null){
      this.props.fetchBookmarks();
      this.props.fetchRegistrations();
    }
  }

  componentDidMount(){
    this.props.fetchEvents();
    if (this.props.currentUser !== null){
      this.props.fetchBookmarks();
      this.props.fetchRegistrations();
    }
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchEvents();
      if (this.props.currentUser === null && nextProps.currentUser !== null) {
        nextProps.fetchEvents();
        nextProps.fetchBookmarks();
        nextProps.fetchRegistrations();

      }
      // else if (this.props.currentUser !== null && nextProps.currentUser === null) {
      //   nextProps.fetchBookmarks();
      //   nextProps.fetchRegistrations();
      // }
      if (nextProps.currentUser !== null) {
        if (Object.values(nextProps.bookmarks).length
        !== Object.values(this.props.bookmarks).length) {
          nextProps.fetchBookmarks();
        }
        if (Object.values(nextProps.registrations).length
        !== Object.values(this.props.registrations).length) {
          nextProps.fetchRegistrations();
        }
      }

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchFilteredEvents({category: e.target.value});
    // this.props.history.push(`/events/${e.target.value}`);
  }

  render() {
    const { events, currentUser, bookmarks,
       createBookmark, removeBookmark, registrations } = this.props;
    return(
      <div className='event-index-page'>
        <div className='large-splash-image-container' id='cf4a'>
          <img className='large-splash-image' alt='redwood trees'
            src='https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818233/outdoors/redwoods_tour.jpg'></img>
          <img className='large-splash-image' alt='lantern festival'
            src='https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818057/outdoors/lantern_festival.jpg'></img>
          <img className='large-splash-image' alt='snowboarding'
            src='https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818541/food%20and%20drink%20seeds/coffee_tasting.jpg'></img>
          <img className='large-splash-image' alt='concert in a club'
            src='https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715142/music%20seeds/club_concert.jpg'></img>

        </div>
        <div className='search-bar-over-background-image'>
          Find your next experience
        </div>
        <div className='divider-text'>
          Events for you
        </div>



        <section className='event-index-listings'>
            {events.map(event => <EventIndexItem
              key={`event-${event.id}`}
              event={event}
              currentUser={currentUser}
              bookmarks={bookmarks}
              history={this.props.history}
              createBookmark={createBookmark}
              removeBookmark={removeBookmark}
              registrations={registrations} />)}
        </section>
      </div>
    );
  }

}

export default EventIndex;
