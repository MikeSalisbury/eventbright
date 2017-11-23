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
      <div className="signin-login">
        <img></img>
        <header className="header-font">
          <h3>Let's get Started!</h3>
          <h4>Enter your Email to sign up or log in</h4><br/>
        </header>
        <div className="signin-login-form">
          <form onSubmit={this.handleSubmit}>
            <label>Email:<br />
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
              className="signin-login-input"/>
          </label>
          <input
            type="submit"
            value="Sign in"
            className="submit-button"/>
          </form>
        </div>
      </div>
    );
  }
}

export default signinForm;
