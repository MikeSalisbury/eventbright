json.extract! user, :id, :email, :first_name, :last_name, :profile_img_url

json.registrations do
  json.array! user.registrations, partial: 'api/registrations/registration.json.jbuilder', as: :registration
end
