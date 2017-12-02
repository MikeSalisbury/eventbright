class Api::RegistrationsController < ApplicationController

  def index
    if logged_in?
      @registrations = current_user.registrations
      render :index
    else
      render json: "you must be logged in", status: 404
    end
  end

  def create
    ticket = Ticket.find(params[:registration][:ticket_id])
    num_tickets = params[:registration][:num_tickets]
    filtered_registration = current_user.registrations.select {|reg| reg.ticket_id == ticket.id}
    if !filtered_registration.empty?
      @registration = Registration.find(filtered_registration[0].id)
      @registration.num_tickets += num_tickets.to_i
    else
      @registration = Registration.new(registration_params)
      @registration.ticket_id = ticket.id
      @registration.owner_id = current_user.id
    end
    if @registration.save
      render :show
    else
      render json: @registration.errors.full_messages, status: 404
    end
  end

  def destroy
    @registration = Registration.find_by(id: params[:id])
  end

  private

  def registration_params
    params.require(:registration).permit(:num_tickets)
  end

end
