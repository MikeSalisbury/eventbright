import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.event === undefined) {
      this.state = { title: "", description: "", location: "", start_datetime: "",
        end_datetime: "", img_url: "", category: "", event_type: "",
        event_topic: ""
      };
    }else {
      this.state = props.event;
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(prop) {
    (e) => (
      this.setState({[prop]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.action(this.state);
  }

  componentWillReceiveProps(nextProps) {
    this.props.history.push(`/events/${nextProps.event.id}`);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({ title: "", description: "", location: "",
      start_datetime: "", end_datetime: "", img_url: "", category: "",
      event_type: "", event_topic: ""});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="new-update-event">
        <div className="session-errors">
          {this.renderErrors()}
        </div>

        <form className='event-form' onSubmit={this.handleSubmit}>
          <label>Event Title<br/>
            <input
              className='event-form-input'
              type='text'
              placeholder='Give it a short distinct name'
              onChange={this.update('title')}
              value={this.state.title}/><br/>
          </label>

          <label>Location<br/>
            <input
              className='event-form-input'
              type='text'
              placeholder='Venue address'
              onChange={this.update('location')}
              value={this.state.location}/><br/>
          </label>

          <label>Starts
            <input
              className='event-form-input-date'
              type='datetime-local'
              onChange={this.update('start_datetime')}
              value={this.state.start_datetime}/>
          </label>

          <label>Ends
            <input
              className='event-form-input-date'
              type='datetime-local'
              onChange={this.update('end_datetime')}
              value={this.state.end_datetime}/>
          </label>

          <label>Image Url<br/>
            <input
              className='event-form-input'
              type='text'
              placeholder='Url for event image'
              onChange={this.update('img_url')}
              value={this.state.img_url}/><br/>
          </label>

          <label>Event Description<br/>
            <textarea
              className='event-form-input'
              type='text'
              onChange={this.update('description')}
              value={this.state.description}/><br/>
          </label>

          <label>Category<br/>
            <select className='event-form-input' name='category'>
              <option value='Music'>Music</option>
              <option value='Food&Drink'>Food&Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'>Parties</option>
              <option value='Sports&Wellness'>Sports&Wellnes</option>
              <option value='Networking'>Networking</option>
            </select><br/>
          </label>

          <h2>Listing Privacy</h2>
          <div className='privacy-radio'>
            <label>
              <input
                type='radio'
                name='privacy'
                className='event-form-input'
                value='public' /> <span>Public page</span>
            </label>
          </div>
          <div className='privacy-radio'>
            <label>
              <input
                type='radio'
                name='privacy'
                className='event-form-input'
                value='private' /> <span>Private page</span>
            </label><br/>
          </div>


          <label>Event Type<br/>
            <select className='event-form-input' name='event_type'>
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

          <label>Event Topic<br/>
            <select className='event-form-input' name='event_topic'>
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
