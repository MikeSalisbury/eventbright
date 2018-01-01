export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromEvent(event) {
    const marker = new google.maps.Marker({
      position: {},
      map: this.map,
      title: event.title
    });
  }

  updateMarkers(events) {
    for(let i = 0; i < events.length; i++) {
      if (this.markers[events[i].id] !== null) {
        this.markers[events[i].id] = events[i];
      }
    }
  }

}
