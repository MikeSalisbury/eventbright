class Event < ApplicationRecord
  CATEGORIES = ['Music', 'Food & Drink', 'Classes', 'Arts', 'Parties',
    'Sports & Wellness', 'Networking']

  validates :title, :description, :location, :start_datetime,
   :end_datetime, :img_url, :category, :privacy, :lat, :lng,
    presence: true
  # validates :privacy, inclusion: { in: ['private, public'], message:
  #   "%{value} is not a valid privacy filter"}
  validates :category, inclusion: { in: CATEGORIES, message:
    "%{value} is not a valid category" }

  geocoded_by :location, latitude: :lat, longitude: :lng
  before_validation :geocode
   # if: ->(obj){ obj.location.present? and obj.location_changed? }

  belongs_to :organizer,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :User

  has_many :tickets,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Ticket

  has_many :bookmarks

  has_many :user_bookmarks,
  through: :bookmarks,
  source: :user


end
