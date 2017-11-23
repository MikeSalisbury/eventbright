import React from 'react';

class sessionForm extends React.Component {

  constructor(props) {
    super(props);
    let email;
    if (props.validEmail !== undefined) {
      email = props.validEmail.email;
    } else {
      email = "";
    }
    this.state = {email: email, password: "", first_name: "", last_name: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(prop) {
    return (e) =>
      this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.action(this.state);
  }

  handleHeader() {
    if (this.props.formType === 'Sign Up') {
      return (
        <header className="header-font">
          <h3>Welcome</h3>
          <h4>Create an account.</h4><br/>
        </header>
      );
    } else {
      return (
        <header className="header-font">
          <h3>Welcome Back!</h3>
          <h4>Please enter your password to log in</h4><br/>
        </header>
      );
    }
  }

  signupForm() {
    if (this.props.formType === 'Sign Up') {
      return (
      <div>
        <label>First Name:
          <input
            type='text'
            onChange={this.update('first_name')}
            value={this.state.first_name} />
        </label>
        <label>Last Name:
          <input
            type='text'
            onChange={this.update('last_name')}
            value={this.state.last_name} />
        </label>
      </div>
    );
    }
  }

  render() {
    return (
      <div className="signin-login">
        <div className="signin-login-form">
          {this.handleHeader()}
          <form onSubmit={this.handleSubmit}>
            <label>Email:
              <input
                type='email'
                onChange={this.update('email')}
                value={this.state.email}
                className="signin-login-input"/>
            </label>
            <label>Password:
              <input
                type='password'
                onChange={this.update('password')}
                value={this.state.password}
                className="signin-login-input"/>
            </label>
            {this.signupForm()}
            <input
              type='submit'
              value={this.props.formType}
              className="submit-button" />
          </form>
        </div>
      </div>
    );
  }

}

export default sessionForm;
