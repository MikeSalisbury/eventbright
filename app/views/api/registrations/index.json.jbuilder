@registrations.each do |registration|
  json.set! registration.ticket.event_id do
    json.partial! '/api/registrations/registration',
     registration: registration
  end
end
