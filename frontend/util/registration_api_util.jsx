export const fetchRegistrations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/registrations'
  })
);

export const createRegistration = (registration) => (
  $.ajax({
    method: 'POST',
    url: '/api/registrations',
    data: { registration }
  })
);

export const deleteRegistration = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/registrations/${id}`,
  })
);
