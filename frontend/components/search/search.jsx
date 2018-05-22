import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleUpdate() {

  }

  render(){
    return(
      <input type='text' className='searchBar' value=''></input>
    );
  }

}

export default Search;
