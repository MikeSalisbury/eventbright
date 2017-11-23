import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  const nav = currentUser ? (
    <div className="rightnav">
        <h3 className='nav'><Link to='/'>Browse Events</Link></h3>
        <h3 className='nav nav-help'><Link to='/'>Help</Link></h3>
        <h3 className='nav'><Link to='/'>User</Link></h3>
        <h3 className='nav'><button onClick={logout}>Logout</button></h3>
        <h3 className='nav create-event'><Link to='/'>
          Create Event</Link></h3>
    </div>
  ) : (
    <div className="rightnav">
      <h3 className='nav'><Link to='/'>Browse Events</Link></h3>
      <h3 className='nav nav-help'><Link to='/'>Help</Link></h3>
      <h3 className='nav'><Link to='/signin'>Sign In</Link></h3>
      <h3 className='nav create-event'><Link to='/'>
          Create Event</Link></h3>
    </div>
  );

  return (
    <header className="navbar">
      <div>
        <h1 className="logo"><Link to='/'>Eventbright</Link></h1>
      </div>
      <div>
        {nav}
      </div>
    </header>
  );

};
