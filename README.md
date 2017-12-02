# Eventbright

Eventbright is a webapp where organizers can create events and users can browse and register to attend events. The main purpose of Eventbright is to help people socialize and publicize lesser known events. It is built on Ruby on Rails backend, PostgreSQl database, and React.js/flux frontend.

## Demo

[Eventbright live demo](https://eventbrightapp.herokuapp.com/?#/)

## Site

### Landing Page
Landing page contains an index of all events with category filter. Splash image uses keyframes to transition images.
![](https://media.giphy.com/media/l2RnqHpzAdYOYbXTq/giphy.gif)
### User Login
User login features a main signin modal which accepts an email address. If provided email exists in the database, login modal will render otherwise the signup modal will render.
### Event Form
### Category Filter
### Event Registration and Bookmarking

## Bug/Feature Request

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
CSS used for full styling

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
