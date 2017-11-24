
// https://github.com/reactjs/react-modal provided
// guidance on modal implementation

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionForm from './session_form';
import SigninForm from './signin_form';
import SigninFormContainer from './signin_form_container';


class sessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };
    this.openModal = this.openModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({isOpen: true});
  }

  afterOpen() {
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.history.push('/');
    this.setState({isOpen: false});
  }

  render() {
    let form;
    if (this.props.formType === 'Sign Up') {
      form = <SessionForm
        validEmail={this.props.validEmail}
        history={this.props.history}
        action={this.props.action}
        errors={this.props.errors}
        formType={this.props.formType}
        ui={this.props.ui}
      />;
    } else if (this.props.formType === 'Login') {
      form = <SessionForm
        validEmail={this.props.validEmail}
        history={this.props.history}
        action={this.props.action}
        errors={this.props.errors}
        formType={this.props.formType}
        ui={this.props.ui}
      />;
    } else {
      form = <SigninFormContainer
        ui={this.props.ui}
        errors={this.props.errors}
        demoLogin={this.props.demoLogin}
      />;
    }

    return (
      <div>
        <Modal
          className={{
            base: 'session',
            afterOpen: 'session_after_open',
            beforeClose: 'session_before-close'
          }}
          overlayClassName={{
            base: 'sessionOverlay',
            afterOpen: 'sessionOverlay_after-open',
            beforeClose: 'sessionOverlay_before-close'
          }}
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          afterOpen={this.afterOpen}
          contentLabel="Sign In">
            <div onClick={this.closeModal}>
              <span className="close-modal">&times;</span>
            </div>
          {form}
        </Modal>
      </div>
    );

  }

}

export default sessionModal;
