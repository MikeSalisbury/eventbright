import React from 'react';
import { Link } from 'react-router-dom';


export default ({currentUser, logout, fetchEvents}) => {
  const nav = currentUser ? (
    <div className="rightnav">
        <Link to='/events/browse' onClick={fetchEvents}><h3 className='nav'>Browse Events</h3></Link>
        <Link to='/'><h3 className='nav nav-help'>Help</h3></Link>
        <a href='https://github.com/MikeSalisbury/eventbright'><h3 className='nav'>About</h3></a>
        <Link to='/user'><h3 className='nav'>{currentUser.first_name}</h3></Link>
        <button onClick={logout}><h3 className='nav'>Logout</h3></button>
        <Link to='/events/new'><h3 className='nav create-event'>
          Create Event</h3></Link>
    </div>
  ) : (
    <div className="rightnav">
      <Link to='/events/browse' onClick={fetchEvents}><h3 className='nav'>Browse Events</h3></Link>
      <Link to='/'><h3 className='nav nav-help'>Help</h3></Link>
      <a href='https://github.com/MikeSalisbury/eventbright'><h3 className='nav'>About</h3></a>
      <Link to='/signin'><h3 className='nav'>Sign In</h3></Link>
      <Link to='/events/new'><h3 className='nav create-event'>
          Create Event</h3></Link>
    </div>
  );

  return (
    <header className="navbar">
      <div>
        <Link to='/' onClick={fetchEvents}><h1 className="logo">Eventbright</h1></Link>
      </div>
      <div>
        {nav}
      </div>
    </header>
  );

};
