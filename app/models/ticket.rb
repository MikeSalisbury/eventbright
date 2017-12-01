class Ticket < ApplicationRecord

  validates :name, :quantity, :price, presence: true
  validates :quantity, :price, numericality: true

  has_many :registrations,
  primary_key: :id,
  foreign_key: :ticket_id,
  class_name: :Registration

  has_many :registered_users,
  through: :registrations,
  source: :owners

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event

end
