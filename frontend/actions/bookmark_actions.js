import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';


export const receiveBookmarkErrors = (errors) => ({
  type: RECEIVE_BOOKMARK_ERRORS,
  errors
});

export const receiveBookmarks = (bookmarks) => ({
  type: RECEIVE_BOOKMARKS,
  bookmarks
});

export const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const deleteBookmark = (bookmark) => ({
  type: REMOVE_BOOKMARK,
  bookmark
});


export const fetchBookmarks = () => dispatch => (
  APIUtil.fetchBookmarks()
    .then( bookmarks => dispatch(receiveBookmarks(bookmarks)))
);

export const createBookmark = (eventId) => dispatch => (
  APIUtil.createBookmark(eventId)
    .then( newBookmark => dispatch(receiveBookmark(newBookmark)),
  err => dispatch(receiveBookmarkErrors(err)))
);

export const removeBookmark = (bookMarkId) => dispatch => (
  APIUtil.removeBookmark(bookMarkId)
    .then( bookmark => dispatch(deleteBookmark(bookmark)))
);
