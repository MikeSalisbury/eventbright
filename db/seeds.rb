# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all

guest = User.create({email: 'guest@fakeemail.com', password:'password', first_name: 'Guest', last_name: 'User'})
mike = User.create({email: 'mike@gmail.com', password:'password', first_name: 'Mike', last_name: 'Salisbury'})
ben = User.create({email: 'ben@fakeemail.com', password:'password', first_name: 'Ben', last_name: 'Salisbury'})
chris = User.create({email: 'chris@fakeemail.com', password:'password', first_name: 'Chris', last_name: 'Salisbury'})
christina = User.create({email: 'christina@fakeemail.com', password:'password', first_name: 'Christina', last_name: 'Le'})

"title"=>"Learning To Code", "description"=>"Learning to Code", "location"=>"825 Battery St. San Francisco CA 94111", "start_datetime"=>"2017-11-27T12:00", "end_datetime"=>"2017-12-31T12:00", "img_url"=>"http://res.cloudinary.com/dckbujmht/image/upload/v1511681097/Untitled_ibig1u.jpg", "category"=>"Classes", "event_type"=>"Class, Training, or Workshop", "event_topic"=>"Family & Education", "privacy"=>"public"}
