import React from 'react';
import BrowseEventsIndexItem from './browse_events_index_item';
import EventMap from '../map/event_map';

class BrowseEvents extends React.Component {

  constructor(props) {
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
       createBookmark, removeBookmark, registrations, history } = this.props;
    return(
      <div className='browse-events-container'>
        <div className='browse-events-category-search'>
          <div className='map-container'>
            <EventMap events={events} history={history}/>
          </div>
          <h3 className='category-filter-title'>Category</h3>
          <div className = 'event-index-filters'>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='All'>All</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='Music'>Music</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit}
              value='Food & Drink'>Food & Drink</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='Classes'>Classes</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='Arts'>Arts</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='Parties'>Parties</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit}
              value='Sports & Wellness'>Sports & Wellness</button>
            <button
              className='category-index-filter'
              onClick={this.handleSubmit} value='Networking'>Networking</button>
          </div>
        </div>
        <div className='browse-events-index'>
            {events.map(event => <BrowseEventsIndexItem
              key={`event-${event.id}`}
              event={event}
              currentUser={currentUser}
              bookmarks={bookmarks}
              history={this.props.history}
              createBookmark={createBookmark}
              removeBookmark={removeBookmark}
              registrations={registrations} />)}
        </div>
      </div>
    );
  }

}

export default BrowseEvents;
