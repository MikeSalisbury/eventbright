import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event }) => (
  <li className='event-index-item'>
    <Link to={`/events/${event.id}`}>
      <div className='event-index-item-image'>
        <img src={event.img_url} />
      </div>
      <div className='event-index-item-start'>
        {event.start_datetime}
      </div>
      <div className='event-index-item-title'>
        {event.title}
      </div>
      <div className='event-index-item-location'>
        {event.location}
      </div>
      <div className='event-index-item-bookmark-bar'></div>
    </Link>
  </li>
);

export default EventIndexItem;
