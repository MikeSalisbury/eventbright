class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid Credentials"]
    end


  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
