import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItem = ({ event }) => {
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
        <div className='event-index-item-bookmark-bar'></div>
      </Link>
    </div>
  );
};

export default EventIndexItem;
