import React from 'react';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

class EventMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.events);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.events);
  }

  render() {
    return(
      <div id='map' ref='map'>
        Map
      </div>
    );
  }

}

export default EventMap;
