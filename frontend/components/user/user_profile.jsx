import React from 'react';
import UserRegistrations from './user_registrations';
import UserBookmarks from './user_bookmarks';
import UserOrganizedEvents from './user_organized_events';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tab: null};
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
      if (this.props.currentUser === null && nextProps.currentUser !== null) {
        nextProps.fetchEvents();
        nextProps.fetchBookmarks();
        nextProps.fetchRegistrations();

      }
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
    this.setState({tab: e.target.value});
  }

  render() {
    const { currentUser, registrations, bookmarks, events,
      createBookmark, removeBookmark } = this.props;
    const { tab } = this.state;
    let tabComponent;
    if (tab === '') {
      tabComponent = null;
    } else if (tab === 'UserBookmarks') {
      tabComponent = <UserBookmarks
        currentUser={currentUser}
        bookmarkKeys={Object.keys(bookmarks)}
        bookmarks={bookmarks}
        registrations={registrations}
        events={events}
        createBookmark={createBookmark}
        removeBookmark={removeBookmark}/>;
    } else if (tab === 'UserRegistrations') {
      tabComponent = <UserRegistrations
        currentUser={currentUser}
        registrationKeys={Object.keys(registrations)}
        registrations={registrations}
        bookmarks={bookmarks}
        events={events}
        createBookmark={createBookmark}
        removeBookmark={removeBookmark}/>;
    } else if (tab === 'UserOrganizedEvents') {
      tabComponent = <UserOrganizedEvents
        currentUser={currentUser}
        registrations={registrations}
        bookmarks={bookmarks}
        events={Object.values(events)}
        createBookmark={createBookmark}
        removeBookmark={removeBookmark}/>;
    }

    if (currentUser !== null) {
      return(
        <div className='user-profile-container'>
          <h1 className='user-profile-name'>{currentUser.first_name}s Profile</h1>
          <div className='user-profile-tabs'>
            <button
              className='user-tab-button'
              onClick={this.handleSubmit}
              value='UserBookmarks'>Bookmarked Events</button>
            <button
              className='user-tab-button'
              onClick={this.handleSubmit}
              value='UserRegistrations'>Registered Events</button>
            <button
              className='user-tab-button'
              onClick={this.handleSubmit}
              value='UserOrganizedEvents'>Organized Events</button>
          </div>
          <div className='user-event-index-container'>
            {tabComponent}
          </div>
        </div>
      );
    } else {
        return(
          'loading'
        );
      }

    }
  }

export default UserProfile;
