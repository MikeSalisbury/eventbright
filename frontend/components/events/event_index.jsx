import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  // componentWillReceiveProps(nextProps) {
  //   nextProps.fetchEvents();
  // }

  handleSubmit(e) {
    e.preventDefault;
    this.props.fetchFilteredEvents({category: e.target.value});
    // this.props.history.push(`/events/${e.target.value}`);
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

        <div className = 'event-index-filters'>
          <button
            className='music-index-filter'
            onClick={this.handleSubmit} value='Music'>Music</button>
          <button
            className='food-and-drink-index-filter'
            onClick={this.handleSubmit}
            value='Food & Drink'>Food & Drink</button>
          <button
            className='classes-index-filter'
            onClick={this.handleSubmit} value='Classes'>Classes</button>
          <button className='arts-index-filter'
            onClick={this.handleSubmit} value='Arts'>Arts</button>
          <button
            className='parties-index-filter'
            onClick={this.handleSubmit} value='Parties'>Parties</button>
          <button
            className='sports-and-wellness-index-filter'
            onClick={this.handleSubmit}
            value='Sports & Wellness'>Sports & Wellness</button>
          <button
            className='networking-index-filter'
            onClick={this.handleSubmit} value='Networking'>Networking</button>
        </div>


        <section className='event-index-listings'>
            {events.map(event => <EventIndexItem key={`event-${event.id}`} event={event}/>)}
        </section>
      </div>
    );
  }

}

export default EventIndex;
