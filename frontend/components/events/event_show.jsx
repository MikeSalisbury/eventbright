import React from 'react';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.eventId !== nextProps.eventId) {
      this.props.fetchEvent(nextProps.eventId);
    }
  }

  // componentDidMount() {
  //   if (!this.props.event) {
  //     this.props.fetchEvent(this.props.eventId);
  //   }
  // }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='form-error-item'key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.event !== undefined) {
      const { title, description, location, start_datetime, end_datetime,
         img_url} = this.props.event;

      const startDateTime = new Date(start_datetime).toUTCString();
      const startDay = startDateTime.slice(0, 4).toUpperCase();
      const startDate = startDateTime.slice(5, 7);
      const startMon = startDateTime.slice(8, 11).toUpperCase();
      const startYear = startDateTime.slice(12, 16);
      const startHour = (parseInt(startDateTime.slice(17,19)) > 12 )
       ? parseInt(startDateTime.slice(17,19))
        - 12 : parseInt(startDateTime.slice(17,19)) ;
      const startMins = startDateTime.slice(20,22);
      const startMeridiem = (parseInt(startDateTime.slice(17,19)) < 12)
      ? 'AM': 'PM';
      const formatStart = `${startDay} ${startMon} ${startDate}
      ${startYear} ${startHour}:${startMins} ${startMeridiem}`;

      const endDateTime = new Date(end_datetime).toUTCString();
      const endDay = endDateTime.slice(0, 4).toUpperCase();
      const endDate = endDateTime.slice(5, 7);
      const endMon = endDateTime.slice(8, 11).toUpperCase();
      const endYear = endDateTime.slice(12, 16);
      const endHour = (parseInt(startDateTime.slice(17,19)) > 12 )
       ? parseInt(startDateTime.slice(17,19))
        - 12 : parseInt(startDateTime.slice(17,19)) ;
      const endMins = startDateTime.slice(20,22);
      const endMeridiem = (parseInt(endDateTime.slice(17,19)) < 12)
      ? 'AM': 'PM';
      const formatEnd = `${endDay} ${endMon} ${endDate} ${endYear}
      ${endHour}:${endMins} ${endMeridiem}`;

      return (
        <div>
          {
            <div className='event-show-page'>
              <div className='event-show-background-image-container'>
                <img src={img_url} alt='Event Background Image' className='event-show-background-image'/>
              </div>
                <div className='event-show-popup'>
                  {this.renderErrors()}
                  <div className='event-show-popup-header-container'>
                    <img className='event-show-image' src={img_url} alt='Event Image'/>
                    <div className='event-show-title-date'>
                      <div className='event-show-mon'>{`${startMon}`}</div>
                      <div className='event-show-date'>{`${startDate}`}</div>
                      <div className='event-show-title'>{title}</div>
                    </div>
                  </div>

                  <div className='show-divider'>
                      <span className='show-page-bm'>BM</span>
                      <button className='show-page-tickets-button'>TICKETS</button>
                  </div>

                  <div className='event-details'>
                    <div className='event-show-description'>
                      <div className='event-description-header'>DESCRIPTION</div>
                      <div className='event-description'>{description}</div>
                    </div>
                    <div className='event-location-time'>
                      <div className='event-show-logistic-header'>STARTS</div>
                      <div className='event-show-start-time'>{formatStart}</div>
                      <div className='event-show-logistic-header'>ENDS</div>
                      <div className='event-show-end-time'>{formatEnd}</div>
                      <div className='event-show-logistic-header'>LOCATION</div>
                      <div className='event-show-location'>{location}</div>
                    </div>
                  </div>
              </div>
            </div>
          }
        </div>
      );
    } else {
      return <div>Loading</div>;
    }

  }

}

export default EventShow;
