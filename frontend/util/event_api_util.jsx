export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/events',
  })
);

export const fetchFilteredEvents = (category) => (
  $.ajax({
    method: 'POST',
    url: '/api/filteredindex/',
    data: {category}
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`,
  })
);

export const fetchUserEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${userId}/events`
  })
);

export const createEvent = (event) => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  })
);

export const updateEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);
