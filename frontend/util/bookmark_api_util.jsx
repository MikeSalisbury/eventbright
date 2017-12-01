export const fetchBookmarks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bookmarks'
  })
);

export const createBookmark = (event_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { event_id }
  })
);

export const removeBookmark = (bookmarkId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${bookmarkId}`
  })
);
