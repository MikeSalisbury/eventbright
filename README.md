# Eventbright

Eventbright is a webapp where organizers can create events and users can browse and register to attend events. The main purpose of Eventbright is to help people socialize and publicize lesser known events. It is built with a Ruby on Rails backend, PostgreSQl database, and React.js/Redux frontend.

## Demo

[Eventbright live demo](https://eventbrightapp.herokuapp.com/?#/)

## Site

### Landing Page
Landing page contains an index of all events with category filter. Splash image uses keyframes to transition images.
![](https://media.giphy.com/media/l2RnqHpzAdYOYbXTq/giphy.gif)
### User Login
User login features a main signin modal which accepts an email address. If provided email exists in the database, login modal will render otherwise the signup modal will render.

![](https://media.giphy.com/media/26u8yCRFQ1Tczvtzq/giphy.gif)
### Event Form
Event form features a protected route which is only accessible if logged in. The form accepts user input, allows image upload, ticket creation and routes the user to the event show page after event is created.
![](https://media.giphy.com/media/xUOxf8BZVCRNS6Wk0w/giphy.gif)
### Category Filter
The category filter can be used by users to filter events by a certain category - this filter will render only the events with the selected category to the index page.

![](https://media.giphy.com/media/xUOxfcriYLdNIaoQNO/giphy.gif)
### Event Registration and Bookmarking
Users can bookmark events as a reminder to revisit and purchase tickets/register for an event. Once a user registers for an event, a notification will render with the amount of tickets owned.
![](https://media.giphy.com/media/xUOxfnecsDCpkovoGI/giphy.gif)

## Bug/Feature Request
If you come across any bugs or if you would like a new feature, please provide examples and open a detailed issue [here](https://github.com/MikeSalisbury/eventbright/issues/new).

## Built With

### Ruby on Rails
Ruby on Rails used as backend framework to manage MVC functionality and associations.
### jQuery - Ajax
jQuery assists with traversing HTML DOM, event handling, animating and simplifies Ajax interactions for rapid and efficient web development.
### React.js/flux
React/redux used to create/control front end development.
### PostGreSQL
PostGreSQL used to manage database
### CSS
handrolled CSS used for full styling

## Future Iterations:

### Multiple tickets for Event
Currently all events can only have 1 ticket type, allowing multiple tickets will 
### User profile page which displays registered/bookmarked/organized events
This page is key to allow users to see, in one space, the events they have registered for, bookmarked and have organized.
### Browse events by category page abstracted from index page
This abstraction is not necessary; however, it will allow for easier integration of google maps api and event search/filtering.
### Search bar
This feature will serve to allow users to easily search for named events or events in a certain location.
### Google maps api implemented
This feature is great to easily show location of events in the area.
