import React from 'react';
import merge from 'lodash/merge';

class RegistrationModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.ticket;
    this.state.num_tickets = 1;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop) {
    return (e) => {
      this.setState({[prop]: e.target.value});
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRegistration({num_tickets: this.state.num_tickets,
       ticket_id: this.state.id});
  }

  render() {
    const {name, price} = this.state;
    const {endMon, endDate, endYear} = this.props;
    const saleEnd = `${endMon.slice(0, 1)}${endMon.slice(1)
      .toLowerCase()} ${endDate}, ${endYear}`;
    return (
      <div className='registration-modal'>
        <div className='registration-modal-header'>
          <h3 className='registration-modal-header-text'>Register</h3>
        </div>
        <div className='registration-modal-body'>
          <div className='registration-modal-ticket-description'>
            <div className='registration-end-date'>
              Sales end on {saleEnd}
            </div>
          </div>
            <div className='registration-ticket-box'>
              <div className='registration-ticket-information'>
                <div>
                  {name}
                </div>
                <div>
                  USD ${price}
                </div>
              </div>
              <div className='registration-num-tickets-container'>
                <form>
                  <input
                    className='registration-num-tickets'
                    type='number'
                    min='1'
                    max='100'
                    onChange={this.update('num_tickets')}
                    value={this.state.num_tickets}/>
                </form>
              </div>
            </div>
          </div>

        <div className='registration-modal-footer'>
          <div className='registration-footer-info'>
            <div>
              QTY: {this.state.num_tickets}
            </div>
            <div>
              USD ${price * this.state.num_tickets}
            </div>
          </div>
          <button
            className='registration-checkout-button'
            onClick={this.handleSubmit}>
            Checkout</button>
        </div>
      </div>
    );
  }
}
export default RegistrationModal;
