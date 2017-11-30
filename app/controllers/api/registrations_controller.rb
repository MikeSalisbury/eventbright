class Api::RegistrationsController < ApplicationController

  def create
    @registration = Registration.new(registration_params)
    @registration.ticket_id = params[:registration][:ticket_id]
    @registration.owner_id = current_user.id
    if @registration.save
      render json: @registration
    else
      render json: @registration.errors.full_messages
    end
  end

  private

  def registration_params
    params.require(:registration).permit(:num_tickets)
  end

end
