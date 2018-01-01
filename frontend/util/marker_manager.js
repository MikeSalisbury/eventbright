export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  createMarkerFromEvent(event) {
    const position = new google.maps.LatLng(event.lat, event.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      eventId: event.id,
      title: event.title
    });

    marker.addListener('click', () => this.handleClick(event));
    this.markers[marker.eventId] = marker;

  }

  updateMarkers(events) {
    const eventObjs = {};
    events.forEach(event => eventObjs[event.id] = event);

    events
      .filter(event => !this.markers[event.id])
      .forEach(newEvent => this.createMarkerFromEvent(newEvent,
       this.handleClick));

    Object.keys(this.markers)
      .filter(eventId => !eventObjs[eventId])
      .forEach(eventId => this.removeMarker(this.markers[eventId]));
  }

  removeMarker(marker) {
    this.markers[marker.eventId].setMap(null);
    delete this.markers[marker.eventId];
  }

}
