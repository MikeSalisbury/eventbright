import * as APIUtil from '../util/registration_api_util';

export const RECEIVE_REGISTRATION_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION';

export const receiveRegistrations = (registrations) => ({
  type: RECEIVE_REGISTRATIONS,
  registrations
});

export const receiveRegistrationErrors = (errors) => ({
  type: RECEIVE_REGISTRATION_ERRORS,
  errors
});

export const receiveRegistration = (registration) => ({
  type: RECEIVE_REGISTRATION,
  registration
});

export const removeRegistration = (registration) => ({
  type: REMOVE_REGISTRATION,
  registration
});

export const fetchRegistrations = () => dispatch => (
  APIUtil.fetchRegistrations()
    .then( registrations => dispatch(receiveRegistrations(registrations)),
  err => dispatch(receiveRegistrationErrors(err.responseJSON)))
);

export const createRegistration = (registration) => dispatch => (
  APIUtil.createRegistration(registration)
    .then( newRegistration => dispatch(receiveRegistration(newRegistration)),
    err => dispatch(receiveRegistrationErrors(err.responseJSON)))
);

export const deleteRegistration = (id) => dispatch => (
  APIUtil.deleteRegistration(id)
    .then(registration => dispatch(removeRegistration(registration)),
    err => dispatch(receiveRegistrationErrors(err)))
);
