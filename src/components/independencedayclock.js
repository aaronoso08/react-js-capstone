import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      deadline: 'July 4, 2019',
    };
  }

  render() {
    return (
      <div className="countdown">
        <div className="App-date">{this.state.deadline}</div>
        <Clock deadline={ this.state.deadline }/>
      </div>
    );
  }
}

export default App;
