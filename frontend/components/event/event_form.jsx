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
          <label>Title
            <input
              type='text'
              onChange={this.update('title')}
              value={this.state.title}/>
          </label>

          <label>Description
            <input
              type='text'
              onChange={this.update('description')}
              value={this.state.description}/>
          </label>

          <label>Location
            <input
              type='text'
              onChange={this.update('location')}
              value={this.state.location}/>
          </label>

          <label>Starts
            <input
              type='datetime-local'
              onChange={this.update('start_datetime')}
              value={this.state.start_datetime}/>
          </label>

          <label>Ends
            <input
              type='datetime-local'
              onChange={this.update('end_datetime')}
              value={this.state.end_datetime}/>
          </label>

          <label>Image Url
            <input
              type='text'
              onChange={this.update('img_url')}
              value={this.state.img_url}/>
          </label>

          <label>Category
            <select name='category'>
              <option value='Music'>Music</option>
              <option value='Food&Drink'>Food&Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'></option>
              <option value='Sports&Wellness'>Sports&Wellnes</option>
              <option value='Networking'>Networking</option>
            </select>
          </label>

          <label>Event Type
            <select name='event_type'>
              <option value='Music'>Music</option>
              <option value='Food&Drink'>Food&Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'></option>
              <option value='Sports&Wellness'>Sports&Wellnes</option>
              <option value='Networking'>Networking</option>
            </select>
          </label>

          <label name='event_topic'>Event Topic
            <select>
              <option value='Music'>Music</option>
              <option value='Food&Drink'>Food&Drink</option>
              <option value='Classes'>Classes</option>
              <option value='Arts'>Arts</option>
              <option value='Parties'></option>
              <option value='Sports&Wellness'>Sports&Wellnes</option>
              <option value='Networking'>Networking</option>
            </select>
          </label>

          <label>Privacy
            <select name='privacy'>
              <option value='private'>Private</option>
              <option value='public'>Public</option>
            </select>
          </label>

        </form>
      </div>
    )
  }
}

export default EventForm;
