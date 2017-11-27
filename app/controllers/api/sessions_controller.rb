class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid Credentials"], status: 404
    end


  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["Must be logged in"], status: 404
    end
  end

end
