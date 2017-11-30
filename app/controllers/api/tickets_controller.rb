class Api::TicketsController < ApplicationController


  def destroy
    @ticket = Ticket.find_by(id: params[:id])
  end

  private
  def ticket_params
    params.require(:ticket).permit(:name, :quantity, :price)
  end

end
