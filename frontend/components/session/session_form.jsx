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

    this.state = {email: email, password: "",
      first_name: "", last_name: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState({email: '', password: '',
       first_name: '', last_name: ''});
  }

  update(prop) {
    return (e) =>
      this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);

    if (!this.props.currentUser && this.props.formType === 'Sign Up' ) {
      this.props.history.push('/signin/signup');
    } else if (!this.props.currentUser && this.props.formType === 'Login') {
      this.props.history.push('/signin/login');
    } else {
      this.props.clearErrors();
      this.props.history.push('/');
    }
  }

  handleHeader() {
    if (this.props.formType === 'Sign Up') {
      return (
        <header className="header-font">
          <h3 className="login-header">Welcome</h3>
          <h4 className="login-subheader">Create an account.</h4><br/>
        </header>
      );
    } else {
      return (
        <header className="header-font">
          <h3 className="login-header">Welcome Back!</h3>
          <h4 className="login-subheader">Please enter your password to log in</h4><br/>
        </header>
      );
    }
  }

  signupForm() {
    if (this.props.formType === 'Sign Up') {
      return (
      <div className="additional-info">
        <label>First Name
          <input
            type='text'
            onChange={this.update('first_name')}
            value={this.state.first_name}
            className="signin-login-name"/>
        </label>
        <label>Last Name
          <input
            type='text'
            onChange={this.update('last_name')}
            value={this.state.last_name}
            className="signin-login-name"/>
        </label>
      </div>
    );
    }
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
      <div className="signin-login">
        <span className='login-img'>Eb</span>
        {this.handleHeader()}
        <div className="signin-login-form">
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-errors">
              {this.renderErrors()}
            </div>
            <label>Email
              <input
                type='email'
                onChange={this.update('email')}
                value={this.state.email}
                className="signin-login-input"/>
            </label>
            {this.signupForm()}
            <label>Password
              <input
                type='password'
                onChange={this.update('password')}
                value={this.state.password}
                className="signin-login-input"/>
            </label>
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
