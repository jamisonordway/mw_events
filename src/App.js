import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';
import EventContainer from './components/EventContainer';
import Header from './components/Header';

class App extends Component {
    state = {
      eventsData: []
    };
  
  componentDidMount() {
    this.getEventsList()
  }
  
  getEventsList = async () => {
    const response = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=meow+wolf&token=GV4WN6VQGEDOJ565HBV4')
    const result = await response.json();
    const events = result.events
    this.setState({ eventsData: events });
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <EventContainer 
          eventsData={this.state.eventsData}
        />
      </div>
    );
  }
}


export default App;
