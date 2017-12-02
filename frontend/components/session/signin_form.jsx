import React from 'react';
import SessionForm from './session_form_container';

class signinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {email: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    e.preventDefault();
    this.props.emailCheck(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin({email:"ben@fakeemail.com", password:"password"});
    this.props.history.push('/');
  }



  render() {
    return (
      <div className="signin-login">
        <span className='login-img'>EB</span>
        <header className="header-font">
          <h3 className="login-header">Let's get Started!</h3>
          <h4 className="login-subheader">Enter your email to sign up or log in</h4><br/>
        </header>
        <div className="signin-form">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <label>Email address<br />
            <input
              type="text"
              onChange={this.update('email')}
              placeholder="Enter email"
              value={this.state.email}
              className="signin-login-input"/>
          </label>
          <input
            type="submit"
            value="Get Started"
            className="submit-button"/>
          </form>
        </div>
        <div className="demo-div">
          <button className ="demoLogin"
            onClick={this.handleDemo}>Demo Login</button>
        </div>
      </div>
    );
  }
}

export default signinForm;
