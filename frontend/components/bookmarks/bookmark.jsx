import React from 'react';

const Bookmark = ({bookmarks, eventId, toggleBookmark}) => {
  if (bookmarks[eventId]) {
    return (
      <i className="fa fa-bookmark" aria-hidden="true"
        onClick={toggleBookmark} />
      );
  } else {
    return (
      <i className="fa fa-bookmark-o" aria-hidden="true"
        onClick={toggleBookmark} />
    );
  }
};

export default Bookmark;
