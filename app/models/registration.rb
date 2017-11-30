class Registration < ApplicationRecord
  validates :num_tickets, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  belongs_to :ticket,
  primary_key: :id,
  foreign_key: :ticket_id,
  class_name: :Ticket

end
