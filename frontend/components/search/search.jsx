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
      let locationMatches = this.filterEvents(e.target.value);

      let header = document.querySelector('header');
      let headerChild = document.querySelector('header ul');
      if (headerChild) {
        header.removeChild(headerChild);
      } else {
        console.log(headerChild);
      }

      let ul = document.createElement('ul');
      header.appendChild(ul);

      locationMatches.forEach(event => {
        let li = document.createElement('li');
        li.innerText = event.title;
        li.classList.add('searchResult');
        li.addEventListener('click', () => {
          this.props.history.push(`/events/${event.id}`);
          this.setState({text: ""});
          header.removeChild(document.querySelector('header ul'));
        });

        ul.appendChild(li);
      });
  }

  filterEvents(value) {
    if(value) {
      let regex = new RegExp(value, 'gi');
      let matches = this.props.events.filter(event => event.location.match(regex) || event.title.match(regex) || event.category.match(regex));
      return matches;
    } else {
      return [];
    }
  }

  render(){
    return(
      <input type='text' id='searchBar' placeholder='Search for Event by name or location' value={this.state.text} onKeyUp={this.handleUpdate} onChange={this.handleUpdate}/>
    );
  }

}

export default Search;
