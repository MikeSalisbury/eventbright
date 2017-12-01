import React from 'react';
import UploadButton from './upload_button';
import merge from 'lodash/merge';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.event === undefined) {
      this.state = { title: "", description: "", location: "", start_datetime: "",
        end_datetime: "", img_url: "", category: "", event_type: "",
        event_topic: "", ticket: {name: "", quantity: "", price: ""} };
    }else {
      this.state = props.event;
      this.state.ticket = props.ticket;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postImage = this.postImage.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
    if (this.props.location.pathname !== '/events/new') {
      this.props.fetchEvent(this.props.eventId);
    }
  }

  update(prop) {
    return (e) => (
      this.setState({[prop]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(id => this.props.history.push(`/events/${id}`));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearErrors();
    }
    if ((nextProps.errors[0] === "Could not find event")
    && (nextProps.location.pathname === '/events/new')) {
      this.props.clearErrors();
      this.setState({ title: "", description: "", location: "",
         start_datetime: "", end_datetime: "", img_url: "",
         category: "", event_type: "", event_topic: "", ticket: {name: "", quantity: "", price: ""} });
    }
  }

  postImage(img_url) {
    this.setState({ img_url: img_url});
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <div className="form-errors">
          <ul>
            {this.props.errors.map((error, i) => (
              <li className='form-error-item'key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  updateTicket(ticketProp) {
    return (e) => {
      let newState;
      if (ticketProp === 'name') {
        newState = merge(this.state.ticket, {name: e.target.value});
        this.setState(newState);
      } else if (ticketProp === 'quantity') {
        newState = merge(this.state.ticket, {quantity: e.target.value});
        this.setState(newState);

      } else if (ticketProp === 'price') {
        newState = merge(this.state.ticket, {price: e.target.value});
        this.setState(newState);

      }
    };
  }

  handleDeleteTicket() {

  }

  // <button className='form-publish' onClick={this.handleSubmit}>Publish</button>

  render() {
    const { title, description, location, start_datetime, end_datetime,
       img_url, category, event_type, event_topic, ticket } = this.state;
    return (
      <div className="new-update-event">

        <div className='form-header'>
          <h3 className='form-title'>Create An Event</h3>
        </div>

        <div className='divider'></div>
            {this.renderErrors()}
        <div className='event-details-section-header-details'>
          <div className='event-details-num'>1</div>
          <div className='event-details-title'>Event Details</div>
        </div>
        <form className='event-form' onSubmit={this.handleSubmit}>
          <label><div className='eventForm-label'>EVENT TITLE</div>
            <input
              className='event-form-input'
              type='text'
              placeholder='Give it a short distinct name'
              onChange={this.update('title')}
              value={title}/><br/>
          </label>

          <label><div className='eventForm-label'>LOCATION</div>
            <input
              className='event-form-input'
              type='text'
              placeholder='Venue address'
              onChange={this.update('location')}
              value={location}/><br/>
          </label>
          <div className='start-end-dates'>
            <label><div className='eventForm-label'>STARTS</div>
              <input
                className='event-form-input-date'
                type='datetime-local'
                onChange={this.update('start_datetime')}
                value={start_datetime}/>
            </label>

            <label><div className='eventForm-label'>ENDS</div>
              <input
                className='event-form-input-date'
                type='datetime-local'
                onChange={this.update('end_datetime')}
                value={end_datetime}/>
            </label>
          </div>

          <label><div className='eventForm-label'>EVENT IMAGE</div>
            <UploadButton
              postImage={this.postImage}
              imgUrl={this.state.img_url}
              clearErrors={this.props.clearErrors} />
          </label>

          <label><div className='eventForm-label'>EVENT DESCRIPTION</div>
            <textarea
              className='event-form-input-description'
              type='text'
              onChange={this.update('description')}
              value={description}/>
          </label>

          <div className='event-details-section-header'>
            <div className='event-details-num'>2</div>
            <div className='event-details-title'>Create Tickets</div>
          </div>

          <div className='event-form-ticket-creation'>
            <label className='ticket-label'><div className='event-form-ticket-header'>Ticket name</div>
              <input
                type='text'
                className='event-form-ticket-name'
                onChange={this.updateTicket('name')}
                value={ticket.name}
                placeholder='Early Bird, RSVP...'
              />
            </label>
            <label className='ticket-label'><div className='event-form-ticket-header'>Quantity available</div>
              <input
                type='number'
                min='1'
                className='event-form-ticket-quantity'
                onChange={this.updateTicket('quantity')}
                value={ticket.quantity}
                placeholder='100'
              />
            </label>
            <label className='ticket-label'><div className='event-form-ticket-header'>Price</div>
              <input
                type='number'
                min='0'
                className='event-form-ticket-price'
                onChange={this.updateTicket('price')}
                value={ticket.price}
                placeholder='15'
              />
            </label>

          </div>

          <div className='event-details-section-header'>
            <div className='event-details-num'>3</div>
            <div className='event-details-title'>Additional Settings</div>
          </div>

          <label><div className='eventForm-label'>CATEGORY</div>
            <select onChange={this.update('category')}
              className='event-form-dropdown' value={category}>
              <option value="">Select a category</option>
              <option value='Music'>Music</option>
              <option value='Food & Drink'>Food & Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'>Parties</option>
              <option value='Sports & Wellness'>Sports & Wellness</option>
              <option value='Networking'>Networking</option>
            </select><br/>
          </label>

          <h2 className='eventForm-label'>LISTING PRIVACY</h2>
          <div className='privacy-radio'>
            <label>
              <input
                type='radio'
                className='event-form-input-privacy'
                name='privacy'
                onChange={this.update('privacy')}
                value='public' /> <span className='privacy-option'>
                Public page:</span> <span
                className='privacy-description'>Discoverable by anyone
                on Eventbright, our distribution partners, and search
                engines.</span>
            </label>
          </div>
          <div className='privacy-radio'>
            <label>
              <input
                type='radio'
                className='event-form-input-privacy'
                name='privacy'
                onChange={this.update('privacy')}
                value='private' /> <span className='privacy-option'>Private page:</span> <span className='privacy-description'>Accessible only by people you specify.</span>
            </label><br/>
          </div>


          <label><div className='eventForm-label'>EVENT TYPE (Optional)</div>
            <select onChange={this.update('event_type')}
              className='event-form-dropdown' value={event_type}>
              <option value ="">Select the type of event</option>
              <option value='Appearance or Signing'>Appearance or Signing</option>
              <option value='Attraction'>Attraction</option>
              <option value='Camp, Trip, or Retreat'>Camp, Trip, or Retreat</option>
              <option value='Class, Training, or Workshop'>Class, Training, or Workshop</option>
              <option value='Concert or Performance'>Concert or Performance</option>
              <option value='Conference'>Conference</option>
              <option value='Convention'>Convention</option>
              <option value='Dinner or Gala'>Dinner or Gala</option>
              <option value='Festival or Fair'>Festival or Fair</option>
              <option value='Game or Competition'>Game or Competition</option>
              <option value='Meeting or Networking Event'>Meeting or Networking Event</option>
              <option value='Other'>Other</option>
              <option value='Party or Social Gathering'>Party or Social Gathering</option>
              <option value='Race or Endurance Event'>Race or Endurance Event</option>
              <option value='Rally'>Rally</option>
              <option value='Screening'>Screening</option>
              <option value='Seminar or Talk'>Seminar or Talk</option>
              <option value='Tour'>Tour</option>
              <option value='Tournament'>Tournament</option>
              <option value='Tradeshow, Consumer Show, or Expo'>Tradeshow, Consumer Show, or Expo</option>
            </select><br/>
          </label>

          <label><div className='eventForm-label'>EVENT TOPIC (Optional)</div>
            <select onChange={this.update('event_topic')}
              className='event-form-dropdown' value={event_topic}>
              <option value="">Select a topic</option>
              <option value='Auto, Boat & Air'>Auto, Boat & Air</option>
              <option value='Business & Proessional'>Business & Proessional</option>
              <option value='Charity & Causes'>Charity & Causes</option>
              <option value='Community & Culture'>Community & Culture</option>
              <option value='Family & Education'>Family & Education</option>
              <option value='Fashion & Beauty'>Fashion & Beauty</option>
              <option value='Film, Media & Entertainment'>Film, Media & Entertainment</option>
              <option value='Food & Drink'>Food & Drink</option>
              <option value='Government & Politics'>Government & Politics</option>
              <option value='Health & Wellness'>Health & Wellness</option>
              <option value='Hobbies & Special Interest'>Hobbies & Special Interest</option>
              <option value='Home & Lifestyle'>Home & Lifestyle</option>
              <option value='Music'>Music</option>
              <option value='Other'>Other</option>
              <option value='Performing & Visual Arts'>Performing & Visual Arts</option>
              <option value='Religion & Spirituality'>Religion & Spirituality</option>
              <option value='School Activities'>School Activities</option>
              <option value='Science & Technology'>Science & Technology</option>
              <option value='Seasonal & Holiday'>Seasonal & Holiday</option>
              <option value='Sports & Fitness'>Sports & Fitness</option>
              <option value='Travel & Outdoor'>Travel & Outdoor</option>
            </select><br/>
          </label>

          <input
            className='event-submit'
            type='submit'
            value='MAKE YOUR EVENT LIVE' />
        </form>
      </div>
    );
  }
}


export default EventForm;

// for future ticket iteration
//<button className='ticket-delete-button' onClick={this.handleDeleteTicket}>Delete</button>
