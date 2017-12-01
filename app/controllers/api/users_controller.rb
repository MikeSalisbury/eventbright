class Api::UsersController < ApplicationController

  before_action :require_login, only: [:destroy]

    def email
      user = User.find_by(email: params[:email])
      if user
        render json: {email: params[:email], exist: true}
      else
        render json: {email: params[:email], exist: false}
      end
    end

    def show
      @user = User.find_by(id: params[:id])
    end

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    def update
      @user = User.find_by(id: params[:id])
      if @user.update_attributes(user_params)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :password, :email, :profile_img_url)
    end

end
