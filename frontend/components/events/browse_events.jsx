import React from 'react';

class BrowseEvents extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='browse-events-container'>
        <div className='browse-events-category-search'>
          <div className = 'event-index-filters'>
            <button
              className='music-index-filter'
              onClick={this.handleSubmit} value='Music'>Music</button>
            <button
              className='food-and-drink-index-filter'
              onClick={this.handleSubmit}
              value='Food & Drink'>Food & Drink</button>
            <button
              className='classes-index-filter'
              onClick={this.handleSubmit} value='Classes'>Classes</button>
            <button className='arts-index-filter'
              onClick={this.handleSubmit} value='Arts'>Arts</button>
            <button
              className='parties-index-filter'
              onClick={this.handleSubmit} value='Parties'>Parties</button>
            <button
              className='sports-and-wellness-index-filter'
              onClick={this.handleSubmit}
              value='Sports & Wellness'>Sports & Wellness</button>
            <button
              className='networking-index-filter'
              onClick={this.handleSubmit} value='Networking'>Networking</button>
          </div>
        </div>
        <div className='browse-events-index'>

        </div>
      </div>
    );
  }

}

export default BrowseEvents;
