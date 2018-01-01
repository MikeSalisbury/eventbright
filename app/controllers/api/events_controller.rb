class Api::EventsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
      @events = Event.all
  end

  def filteredindex
    category = params[:category][:category]

    if category == 'Music'
      @events = Event.where(category: category)
    elsif category == 'Food & Drink'
      @events = Event.where(category: category)
    elsif category == 'Classes'
      @events = Event.where(category: category)
    elsif category == 'Arts'
      @events = Event.where(category: category)
    elsif category == 'Parties'
      @events = Event.where(category: category)
    elsif category == 'Sports & Wellness'
      @events = Event.where(category: category)
    elsif category == 'Networking'
      @events = Event.where(category: category)
    else
      @events = Event.all
    end

    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      @ticket = Ticket.find_by(event_id: @event.id)
      render :show
    else
      render json: ['Could not find event'], status: 404
    end
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    ticket_params = {}
    ticket_params[:name] = params[:event][:ticket][:name]
    ticket_params[:quantity] = params[:event][:ticket][:quantity]
    ticket_params[:price] = params[:event][:ticket][:price]

    if @event.save
      @ticket = Ticket.new(ticket_params)
      @ticket.event_id = @event.id
      if @ticket.save
        render :show
      else
        render json: ['tickets require a name, quantity and price']
        @event.delete
      end
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  def update
    @event = Event.find_by(id: params[:id])

    if current_user.id == @event.organizer_id
      if @event.update_attributes(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 404
      end
    else
      render json: ["You must be the event organizer"], status: 404
    end

  end

  def destroy
    @event = Event.find_by(event: params[:id])
    if @event && current_user.id == @event.organizer_id
      @event.delete
      render :show
    else
      render json: ["You must be the event organizer"], status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :location,
      :start_datetime, :end_datetime, :img_url, :lat, :lng, :category, :privacy,
      :event_type, :event_topic, ticket:[])
  end

  # def ticket_params
  #   params.require(:event).permit(:ticket)
  # end

end
