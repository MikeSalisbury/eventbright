@bookmarks.each do |bookmark|
  json.set! bookmark.event_id do
    json.partial! '/api/bookmarks/bookmark', bookmark: bookmark
  end
end
