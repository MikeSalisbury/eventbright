import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class EventMap extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    // this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.events);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.events);
  }

  handleMarkerClick(event) {
    this.props.history.push(`${event.id}`);
  }

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'events/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  // registerListeners() {
    // google.maps.event.addListener(this.map, 'idle', () => {
    //   const { north, south, east, west } = this.map.getBounds().toJSON();
    //   const bounds = {
    //     northEast: { lat:north, lng: east },
    //     southWest: { lat: south, lng: west } };
    //   this.props.updateFilter('bounds', bounds);
    // });
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  // }

  render() {
    return(
      <div id='map' ref='map'>
        Map
      </div>
    );
  }

}

export default EventMap;
