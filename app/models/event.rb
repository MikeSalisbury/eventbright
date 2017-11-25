class Event < ApplicationRecord
  validates :title, :description, :location, :start_datetime,
   :end_datetime, :img_url, :category, :privacy, presence: true
  validates :privacy, inclusion: { in: ['private, public'], message:
    "%{value} is not a valid privacy filter"}
  validates :category, inclusion: { in: CATEGORIES, message:
    "%{value} is not a valid category" }

  CATEGORIES = %w(Music Food&Drink Classes Arts Parties
    Sports&Wellness Networking)


  belongs_to :organizer,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :User


end
