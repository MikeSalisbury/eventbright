import React from 'react';
import { Redirect } from 'react-router-dom';
import SessionForm from './session_form_container';

class signinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.validEmail.exist) {
      this.props.history.push('/signin/login');
    } else {
      this.props.history.push('/signin/signup');
    }
  }

  update(prop) {
    return (e) =>
      this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.emailCheck(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}/>
          </label>
          <input type="submit" value="Sign in"/>
        </form>
      </div>
    );
  }
}

export default signinForm;
