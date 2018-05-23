import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents;
  }

  handleUpdate(e) {
      this.setState({text: e.target.value});
      let locationMatches = this.filterByLocation(e.target.value);
      console.log(locationMatches);
  }

  filterByLocation(value) {
    let regex = new RegExp(value, 'gi');
    let matches = this.props.events.filter(event => event.location.match(regex) || event.title.match(regex) || event.category.match(regex));
    return matches;
  }

  render(){
    return(
      <input type='text' className='searchBar' placeholder='Search for Event by name or location' value={this.state.text} onKeyUp={this.handleUpdate} onChange={this.handleUpdate}/>
    );
  }

}

export default Search;
