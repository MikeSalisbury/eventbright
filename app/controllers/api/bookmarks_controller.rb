class Api::BookmarksController < ApplicationController

  def index
    if logged_in?
      @bookmarks = current_user.bookmarks
      render :index
    else
      render json: "you must be logged in", status: 404
    end
  end

  def create
    @bookmark = Bookmark.new(event_id: params[:event_id])
    @bookmark.user_id = current_user.id
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages
    end
  end

  def destroy
    @bookmark = Bookmark.find_by(event_id: params[:id])
    if @bookmark && @bookmark.user_id == current_user.id
      @bookmark.delete
      render json: @bookmark.event_id
    else
      render json: ['Bookmark does not exist'], status: 404
    end
  end

end
