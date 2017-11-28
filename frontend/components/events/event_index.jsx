import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return(
      <div className='event-index-page'>
        <div className='large-splash-image-container'>
          <img className='large-splash-image' src='http://res.cloudinary.com/dckbujmht/image/upload/v1511715371/outdoors/half_dome.jpg'></img>
        </div>
        <div className='search-bar-over-background-image'>
          Find your next experience
        </div>
        <div className='divider-text'>
          Events for you
        </div>


        <section className='event-index-listings'>
            {events.map(event => <EventIndexItem key={`event-${event.id}`} event={event}/>)}
        </section>
      </div>
    );
  }

}

export default EventIndex;
