import React from 'react';
import Modal from 'react-modal';
import RegistrationModal from '../registrations/registration_modal';
import Bookmark from '../bookmarks/bookmark';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.openModal = this.openModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
  }

  toggleBookmark() {

    if (this.props.currentUser !== null) {
      if(this.props.bookmarks[this.props.event.id]) {
        this.props.removeBookmark(this.props.event.id);
      } else {
        this.props.createBookmark(this.props.event.id);
      }
    } else {
      this.props.history.push('/signin');
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.fetchEvent(this.props.eventId);
    if (this.props.currentUser !== null) {
      this.props.fetchBookmarks();
      this.props.fetchRegistrations();
    }
  }

  componentDidMount() {
    if (this.props.currentUser !== null) {
      this.props.fetchBookmarks();
      this.props.fetchRegistrations();
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.props.fetchBookmarks();
    if (this.props.eventId !== nextProps.eventId) {
      nextProps.fetchEvent(nextProps.eventId);
    }
    if (Object.values(this.props.bookmarks).length !==
     Object.values(nextProps.bookmarks).length) {
      nextProps.fetchBookmarks();
    }
    if (Object.values(this.props.registrations).length !== Object.values(nextProps.registrations).length) {
      nextProps.fetchRegistrations();
      this.setState({isOpen: false});
      nextProps.fetchEvent(nextProps.eventId);
    }

  }

  componentDidMount() {
    window.scroll(0,0);
    if (!this.props.event) {
      this.props.fetchEvent(this.props.eventId);
      if (this.props.currentUser !== null) {
        this.props.fetchBookmarks();
      }
    }
  }

  renderRegistration() {
    if (this.props.registrations[this.props.eventId]) {
      return (
        <div className='show-registration-icon'>
          <i className="fa fa-calendar" aria-hidden="true"
            />
          <h3 className='show-registration-ticket-count'>
            My tickets: {this.props.registrations[this.props.eventId]
              .num_tickets}
            </h3>
        </div>
        );
    }
  }

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

  openModal() {
    if (this.props.currentUser) {
      this.setState({isOpen: true});
    } else {
      this.props.history.push('/signin');
    }
  }

  afterOpen() {
    window.scrollTo(0, 0);

    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.history.push(`/events/${this.props.eventId}`);
    this.setState({isOpen: false});
  }

  render() {
    if (this.props.event !== undefined) {

      const { title, description, location, start_datetime, end_datetime,
         img_url} = this.props.event;
      const { bookmarks, eventId, currentUser } = this.props;
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
          <Modal
            className={{
              base: 'registration',
              afterOpen: 'registration_after_open',
              beforeClose: 'registration_before-close'
            }}
            overlayClassName={{
              base: 'registrationOverlay',
              afterOpen: 'registrationOverlay_after-open',
              beforeClose: 'registrationOverlay_before-close'
            }}
            isOpen={this.state.isOpen}
            onRequestClose={this.closeModal}
            afterOpen={this.afterOpen}
            contentLabel="Registration">
            <div className='show-page-registration-modal'>
              <div onClick={this.closeModal}>
                <span className="registration-close-modal">&times;</span>
              </div>
              <RegistrationModal
                ticket={this.props.ticket}
                eventId={this.props.event.id}
                endMon={endMon}
                endDate={endDate}
                endYear={endYear}
                createRegistration={this.props.createRegistration}
                history={this.props.history}/>
            </div>
          </Modal>
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
                      <span className='show-page-bm-registration'>
                        <div className='show-bookmark-container'>
                          <Bookmark bookmarks={bookmarks}
                            eventId={eventId}
                            toggleBookmark={this.toggleBookmark} />
                        </div>
                          { this.renderRegistration() }
                      </span>
                      <button className='show-page-tickets-button'
                         onClick={this.openModal}>REGISTER</button>
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
