import React from 'react';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
  }

  componentWillMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  render() {
    const { title, description, location, start_datetime, end_datetime,
       img_url} = this.props.event;

    return (
      <div>
        {
          <div className='event-show-page'>
            <div className='event-image'>
              <img src={img_url} alt='Event Image'/>
            </div>
            <div className='event-title-date'>
              <div className='event-date'>{start_datetime}</div>
              <div className='event-title'>{title}</div>
            </div>

            <div className='show-divider'>
              <button className='show-page-tickets-button'>Tickets</button>
            </div>

            <div className='event-details'>
              <div className='event-description'>{description}</div>
              <div className='event-location-time'>
                <div className='start-time'>Starts<br/> {start_datetime}</div>
                <div className='end-time'>Ends<br/> {end_datetime}</div>
                <div className='location'>Location<br/> {location}</div>
              </div>
            </div>

          </div>
        }
      </div>
    );
  }

}

export default EventShow;
