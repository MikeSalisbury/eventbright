# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all

mike = User.create({email: 'mike@gmail.com', password:'password', first_name: 'Mike', last_name: 'Salisbury'})
ben = User.create({email: 'ben@fakeemail.com', password:'password', first_name: 'Ben', last_name: 'Salisbury'})
chris = User.create({email: 'chris@fakeemail.com', password:'password', first_name: 'Chris', last_name: 'Salisbury'})
christina = User.create({email: 'christina@fakeemail.com', password:'password', first_name: 'Christina', last_name: 'Le'})

e1 = Event.create({organizer_id: mike.id, title: 'Squaw Valley: Ski & Snowboard Weekend (Adults only)',
   description: 'Come join us at beautiful Squaw Valley during December 1st through January 13 where we will be having Adult only sessions.
   Meet skiers and snowboarders of the same age and skill to buddy up with and ski or board with all season!
   Single Day Tickets are $129' ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715474/sports/snowboarding.jpg',
   category: 'Sports & Wellness', event_type: 'Camp, Trip, or Retreat', event_topic: 'Sports & Fitness',
   location: '1960 Squaw Valley Rd, Olympic Valley, CA 96146', start_datetime: '2017-12-01T10:00' ,
   end_datetime: '2018-01-13T22:00', privacy: 'Public'})
   t1 = Ticket.create({event_id: e1.id, name: 'General Ticket', quantity: 100, price: 129})
   b1 = Bookmark.create({event_id: e1.id, user_id: ben.id})

e2 = Event.create({organizer_id: mike.id, title: 'NBA G League: Santa Cruz Warriors Season Opener!',
   description: 'Come join us at Kaiser Permanente Arena to root for your Santa Cruz Warriors when they open their season against the South Bay Lakers.
   First 1,500 fans will receive a Kevin Durant Bobblehead.
   Upper Level Tickets are $50.
   Lower Level Tickets are $75.' ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715474/sports/basketball_game.jpg',
   category: 'Sports & Wellness', event_type: 'Game or Competition', event_topic: 'Sports & Fitness',
   location: '140 Front Street, Santa Cruz, CA 95060', start_datetime: '2018-11-04T18:00' ,
   end_datetime: '2018-11-04T22:00', privacy: 'Public'})
   t2 = Ticket.create({event_id: e2.id, name: 'General Ticket', quantity: 100, price: 50})
   b2 = Bookmark.create({event_id: e2.id, user_id: ben.id})


e3 = Event.create({organizer_id: mike.id, title: 'Football Rivalry Week: Stanford Cardinals vs USC Trojans',
   description: 'Root for your favorite team as we kick off rivalry week!
   Coming off a huge win against 9th ranked Notre Dame, The 20th ranked Cardinals look to knock off the 11th ranked Trojans.
   Doors open at 5pm, come early and join in on the tailgate!
   Upper Level Tickets are $130.
   Lower Level Tickets are $185.' ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715463/sports/football_game.jpg',
   category: 'Sports & Wellness', event_type: 'Game or Competition', event_topic: 'Sports & Fitness',
   location: '625 Nelson Rd, Stanford, CA 94305', start_datetime: '2017-12-01T17:00' ,
   end_datetime: '2017-12-01T21:00', privacy: 'Public'})
   t3 = Ticket.create({event_id: e3.id, name: 'General Ticket', quantity: 100, price: 130})


e4 = Event.create({organizer_id: mike.id, title: 'Champions League - Group Stage: Borussia Dortmund (BVB) vs Real Madrid C.F.',
   description: 'Group H Matchday 6, 2nd in group Real Madrid takes on 3rd in group Dortmund.
   Come cheer for your team in the final Group Stage match as we move into the round of 16.
   Upper Level Tickets are $150.
   Lower Level Tickets are $300.' ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715473/sports/soccer_game.jpg',
   category: 'Sports & Wellness', event_type: 'Game or Competition', event_topic: 'Sports & Fitness',
   location: 'Av. de Concha Espina, 1, 28036 Madrid, Spain', start_datetime: '2017-12-06T11:45' ,
   end_datetime: '2017-12-06T14:00', privacy: 'Public'})
   t4 = Ticket.create({event_id: e4.id, name: 'General Ticket', quantity: 100, price: 150})


e5 = Event.create({organizer_id: mike.id, title: 'Trail Biking - Highway 17',
   description: "Technical singletrack through the redwoods, come join me off highway 17.
   We'll start at 8am sharp and tear up the trail for hours!" ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715472/sports/trail_biking.jpg',
   category: 'Sports & Wellness', event_type: 'Other', event_topic: 'Sports & Fitness',
   location: 'Aptos Creek Rd, Aptos, CA 95003', start_datetime: '2018-02-18T08:00' ,
   end_datetime: '2018-02-18T13:00', privacy: 'Public'})
   t5 = Ticket.create({event_id: e5.id, name: 'General Ticket', quantity: 100, price: 0})


e6 = Event.create({organizer_id: ben.id, title: 'Golden Gate Park: Bark in the Park',
   description: "Social gathering for both humans and pups at the SF Botanical Garden in GGP, bring your favorite furry friends and have a drink!
   There will be 4 different craft beer vendors and 10 food vendors on site as well as treats for the fur babies.
   Entry is free; however, beer food and treats may have a cost! " ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715436/pets/bark_in_the_park.jpg',
   category: 'Networking', event_type: 'Party or Social Gathering', event_topic: 'Other',
   location: '9th Ave and Lincoln Way San Francisco, CA 94118', start_datetime: '2018-01-14T10:00' ,
   end_datetime: '2018-01-14T18:00', privacy: 'Public'})
   t6 = Ticket.create({event_id: e6.id, name: 'General Ticket', quantity: 100, price: 0})
   b3 = Bookmark.create({event_id: e6.id, user_id: ben.id})


e7 = Event.create({organizer_id: ben.id, title: 'Seminar: Why Dogs are Better than Cats',
   description: "Please join us at the San Francisco Airport Marriott for a delightful talk on the many pluses of owning a dog.
   This 5 hour seminar is meant to educate and preach the importance of dog ownership vs cat ownership.
   Be sure to by your ticket now and prepare for a surprise guest!!!
   Tickets are $15." ,
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715440/pets/why_dogs_are_better_than_cats_seminar.jpg',
   category: 'Classes', event_type: 'Seminar or Talk', event_topic: 'Family & Education',
   location: '1800 Old Bayshore Hwy, Burlingame, CA 94010', start_datetime: '2018-01-20T11:00' ,
   end_datetime: '2018-01-20T16:00', privacy: 'Public'})
   t7 = Ticket.create({event_id: e7.id, name: 'General Ticket', quantity: 100, price: 15})


e8 = Event.create({organizer_id: ben.id, title: 'Seminar: Basic Auto Maintenance',
   description: "Please join us at the San Francisco Airport Marriott for a delightful talk on the basics of auto maintenance.
   This 7 hour seminar is meant to educate and teach the basics of maintaining your car (oil change, fluid change, filter change, etc,.).
   Bring questions as our expert technician will be available for a Q&A session immediately following the seminar.
   Tickets are $20.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715272/car%20seeds/basic_car_maintenance.jpg',
   category: 'Classes', event_type: 'Seminar or Talk', event_topic: 'Auto, Boat & Air',
   location: '1800 Old Bayshore Hwy, Burlingame, CA 94010', start_datetime: '2018-03-04T11:00' ,
   end_datetime: '2018-03-04T18:00', privacy: 'Public'})
   t8 = Ticket.create({event_id: e8.id, name: 'General Ticket', quantity: 100, price: 20})


e9 = Event.create({organizer_id: ben.id, title: 'Sacramento Raceway Park: Summer Shootout Series - Drag Racing',
   description: "Summer shootout series returns to Sacramento Raceway!!
   Join us for 7 hours of adrenaline fueled drag races across all classes!
   Food and Drinks available all day.
   Tickets are $35.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715261/car%20seeds/drag_race.jpg',
   category: 'Sports & Wellness', event_type: 'Game or Competition', event_topic: 'Auto, Boat & Air',
   location: '5305 Excelsior Rd, Sacramento, CA 95827', start_datetime: '2018-06-10T13:00' ,
   end_datetime: '2018-06-10T20:00', privacy: 'Public'})
   t9 = Ticket.create({event_id: e9.id, name: 'General Ticket', quantity: 100, price: 35})


e10 = Event.create({organizer_id: ben.id, title: 'Mazda Raceway Laguna Seca: Superbike Racing',
   description: "Join us at the classic and beautiful Laguna Seca Raceway!
   100 laps of high speed insanity, a spectacular, thrilling and daring demonstration of rider and machine working as one!!
   Food and Drinks available all day.
   Tickets are $85.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715262/car%20seeds/motorcycle_race.jpg',
   category: 'Sports & Wellness', event_type: 'Game or Competition', event_topic: 'Auto, Boat & Air',
   location: '1021 Monterey Salinas Hwy, Salinas, CA 93908', start_datetime: '2018-06-22T13:00' ,
   end_datetime: '2018-06-22T20:00', privacy: 'Public'})
   # https://www.mazdaraceway.com/fim-superbike-world-championship
   t10 = Ticket.create({event_id: e10.id, name: 'General Ticket', quantity: 100, price: 85})


e11 = Event.create({organizer_id: ben.id, title: "Hot Tahoe Crusin' South Shore Car Show",
   description: "Car show at the Heavenly Village in South Lake Tahoe.
   The event is open to all cars, trucks, and bikes.
   There will be food, drinks, live music and games!
   Tickets are $35.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715270/car%20seeds/muscle_car_show.jpg',
   category: 'Arts', event_type: 'Festival or Fair', event_topic: 'Auto, Boat & Air',
   location: '1001 Heavenly Village Way South Lake Tahoe, CA 96150', start_datetime: '2018-08-08T11:00' ,
   end_datetime: '2018-08-13T21:00', privacy: 'Public'})
   t11 = Ticket.create({event_id: e11.id, name: 'General Ticket', quantity: 100, price: 35})


e12 = Event.create({organizer_id: mike.id, title: "The Legend of Zelda: Symphony of the Goddess",
   description: "Join us at the City National Civic in San Jose for the transcendent Zelda symphony series.
   Relive all of your favorite moments from beloved melodies from Ocarina of Time, The Wind Waker, Twilight Princess, A Link to the Past, Link's Awakening and more.
   Tickets are $90.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715146/music%20seeds/classical_symphony.jpg',
   category: 'Arts', event_type: 'Concert or Performance', event_topic: 'Music',
   location: '135 W San Carlos St, San Jose, CA 95113', start_datetime: '2017-12-09T20:00',
   end_datetime: '2017-12-09T22:30', privacy: 'Public'})
   # httpss://zelda-symphony.com
   t12 = Ticket.create({event_id: e12.id, name: 'General Ticket', quantity: 100, price: 90})
   b4 = Bookmark.create({event_id: e12.id, user_id: ben.id})


e13 = Event.create({organizer_id: mike.id, title: "Love + Propaganda Saturdays w/ Kungs",
   description: "Come see world famous DJ - Kungs, and party as he spins all night!
   The 20 year old music sensations hits include 'This Girl', 'I Feel So Bad', 'Don't you Know' and 'You Remain'.
   Free admission before 10:00pm, $30 cover after. 21 and over.",
   img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715142/music%20seeds/club_concert.jpg',
   category: 'Music', event_type: 'Concert or Performance', event_topic: 'Music',
   location: '85 Campton Pl, San Francisco, CA 94108', start_datetime: '2017-12-09T22:00' ,
   end_datetime: '2017-12-10T01:00', privacy: 'Public'})
   t13 = Ticket.create({event_id: e13.id, name: 'General Ticket', quantity: 100, price: 30})


e14 = Event.create({organizer_id: mike.id, title: "Coachella 2018",
  description: "The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, located in the Inland Empire's Coachella Valley, in the Colorado Desert.
  Please visist www.coachella.com to see the lineup and set times.
  GA tickets with parking pass are $400",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715144/music%20seeds/music_festival.jpg',
  category: 'Music', event_type: 'Festival or Fair', event_topic: 'Music',
  location: '81-800 51st Ave, Indio, CA 92201', start_datetime: '2017-04-13T10:00' ,
  end_datetime: '2017-04-15T22:00', privacy: 'Public'})
  # https://splash.coachella.com/
  t14 = Ticket.create({event_id: e14.id, name: 'General Ticket', quantity: 100, price: 400})
  b5 = Bookmark.create({event_id: e14.id, user_id: ben.id})


e15 = Event.create({organizer_id: christina.id, title: "Weekend Half Dome Hike",
  description: "This event consists of pickup in San Francisco, drive to Yosemite Friday afternoon.
  Overnight camping Friday and Saturday - food and non-alcoholic beverages will be provided.
  The ascent to Half Dome will happen early Saturday morning.
  all attendees will be dropped off Sunday afternoon/evening at location of pickup.
  Tickets are $500 and includes pickup, camping, guided hike, food and drop off.",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715371/outdoors/half_dome.jpg',
  category: 'Sports & Wellness', event_type: 'Camp, Trip, or Retreat', event_topic: 'Travel & Outdoor',
  location: 'Yosemite National Park, CA 95389', start_datetime: '2018-01-12T10:00' ,
  end_datetime: '2018-01-14T20:00', privacy: 'Public'})
  t15 = Ticket.create({event_id: e15.id, name: 'General Ticket', quantity: 100, price: 500})
  b6 = Bookmark.create({event_id: e15.id, user_id: ben.id})


e16 = Event.create({organizer_id: christina.id, title: "Lantern Festival",
  description: "Join us for this amazing spectacle as thousands light up the night with lanterns.
  Be sure to sign your lanterns with your hopes, wishes and dream.
  Music, dancing, lanterns and S'mores will be provided!!
  Food and beverages will be available for purchase.
  Tickets are $80",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818057/outdoors/lantern_festival.jpg',
  category: 'Parties', event_type: 'Festival or Fair', event_topic: 'Travel & Outdoor',
  location: '1965 S Hwy 95a, Fernley, NV 89408', start_datetime: '2018-09-24T18:00' ,
  end_datetime: '2018-09-24T22:00', privacy: 'Public'})
  t16 = Ticket.create({event_id: e16.id, name: 'General Ticket', quantity: 100, price: 80})
  b7 = Bookmark.create({event_id: e16.id, user_id: ben.id})


e17 = Event.create({organizer_id: christina.id, title: "Walk Among the Giants - Sequoia National Park",
  description: "This event consists of pickup in San Francisco, drive to Sequoia Friday morning.
  Overnight camping Friday and Saturday - food and non-alcoholic beverages will be provided.
  The guided hikes will happen Friday and Saturday.
  all attendees will be dropped off Sunday afternoon/evening at location of pickup.
  Tickets are $500",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818233/outdoors/redwoods_tour.jpg',
  category: 'Sports & Wellness', event_type: 'Camp, Trip, or Retreat', event_topic: 'Travel & Outdoor',
  location: '47050 Generals Highway Three Rivers, CA 93271', start_datetime: '2018-10-02T08:00' ,
  end_datetime: '2018-10-04T20:00', privacy: 'Public'})
  t17 = Ticket.create({event_id: e17.id, name: 'General Ticket', quantity: 100, price: 500})
  b8 = Bookmark.create({event_id: e17.id, user_id: ben.id})


e18 = Event.create({organizer_id: christina.id, title: "Sushi with Jiro!",
  description: "Join us for an evening of the worlds best sushi from Michelin rated famed sushi chef Jiro Ono.
  This evening will be one to remember as Jiro will be displaying his talents and mastery for the first time outside of Japan!
  Expect the finest pieces of fish and the most pleasant tastes your pallet has ever experienced.
  Sushi menu is set, drinks are extra.
  Tickets are $600",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715316/food%20and%20drink%20seeds/sushi_popup.jpg',
  category: 'Food & Drink', event_type: 'Dinner or Gala', event_topic: 'Food & Drink',
  location: '945 Valencia St, San Francisco, CA 94110', start_datetime: '2018-02-14T19:00' ,
  end_datetime: '2018-02-14T22:00', privacy: 'Public'})
  t18 = Ticket.create({event_id: e8.id, name: 'General Ticket', quantity: 100, price: 600})


e19 = Event.create({organizer_id: chris.id, title: "San Francisco Beer Walk",
  description: "A fun day of sampling some of San Francisco's best craft breweries.
  Enjoy many flights from 10 different breweries including Anchor, Barebottle, Cellarmaker and Barrel Head.
  Tickets are $75, must be 21 years of age.",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715323/food%20and%20drink%20seeds/beer_walk.jpg',
  category: 'Parties', event_type: 'Party or Social Gathering', event_topic: 'Food & Drink',
  location: '825 Battery St, San Francisco, CA 94111', start_datetime: '2018-06-20T12:00' ,
  end_datetime: '2018-06-20T16:00', privacy: 'Public'})
  t19 = Ticket.create({event_id: e19.id, name: 'General Ticket', quantity: 100, price: 75})


e20 = Event.create({organizer_id: chris.id, title: "Coffee Meetup: Learn Your Coffees",
  description: "Spend the day sampling 8 different type of coffee beverages.
  Learn from our craftsmen the differences between beans, methods and crafting.
  Tickets are $25.",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511818541/food%20and%20drink%20seeds/coffee_tasting.jpg',
  category: 'Food & Drink', event_type: 'Seminar or Talk', event_topic: 'Food & Drink',
  location: '66 Mint St San Francisco, CA 94103', start_datetime: '2018-11-24T12:00' ,
  end_datetime: '2018-11-24T16:00', privacy: 'Public'})
  t20 = Ticket.create({event_id: e20.id, name: 'General Ticket', quantity: 100, price: 25})


e21 = Event.create({organizer_id: chris.id, title: "Whiskies of the World",
  description: "Spend the day sampling 12 different type of whiskies from all over the globe!!
  Learn from our experts how to taste the subtle hints of flavor and distinguish what makes a whisky truly memorable.
  Food will be available.
  Tickets are $85, must be 21 years of age.",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715328/food%20and%20drink%20seeds/whiskys_of_the_world_tasting.jpg',
  category: 'Food & Drink', event_type: 'Seminar or Talk', event_topic: 'Food & Drink',
  location: '1800 Old Bayshore Hwy, Burlingame, CA 94010', start_datetime: '2018-12-09T15:00' ,
  end_datetime: '2018-12-09T20:00', privacy: 'Public'})
  t21 = Ticket.create({event_id: e21.id, name: 'General Ticket', quantity: 100, price: 85})


e22 = Event.create({organizer_id: chris.id, title: "Sonoma Wine Tour",
  description: "Spend the day sampling wonderful wines from 4 different wineries in the region.
  Learn from our sommeliers about the differences between grapes, flavors and pairing.
  Purchase your favorites at a discounted price!!
  Local restaurants within walking distance.
  Tickets are $40, must be 21 years of age.",
  img_url: 'https://res.cloudinary.com/dckbujmht/image/upload/c_scale,h_520,w_1200/v1511715322/food%20and%20drink%20seeds/wine_tour.jpg',
  category: 'Food & Drink', event_type: 'Party or Social Gathering', event_topic: 'Food & Drink',
  location: '867 W Napa St, Sonoma, CA 95476', start_datetime: '2018-07-22T10:00' ,
  end_datetime: '2018-07-22T18:00', privacy: 'Public'})
  t22 = Ticket.create({event_id: e22.id, name: 'General Ticket', quantity: 100, price: 40})
