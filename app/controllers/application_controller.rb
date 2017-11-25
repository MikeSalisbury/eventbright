class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: ["You must be logged in"], status: 404 unless logged_in?
  end

  def logout
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
    else
      render json: ["Must be signed in to log out"], status: 404
    end
  end
end
