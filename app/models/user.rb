class User < ApplicationRecord
  validates :password_digest, :session_token, :email,
  :first_name, :last_name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, :email, uniqueness: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :events,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: :Event

  has_many :registrations,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Registration

  has_many :tickets, through: :registrations

  has_many :bookmarks

  has_many :bookmarked_events,
  through: :bookmarks,
  source: :event

  def User.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
