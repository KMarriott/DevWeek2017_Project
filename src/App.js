import React, { Component } from 'react';
import Webrtc from './Components/Webrtc';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        EmergencyBot
        <Webrtc />
      </div>
    );
  }
}

export default App;
