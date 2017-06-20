import React, { Component } from 'react';
import Record from './Components/Record';

/*
import './App.css';
import 'pubnub';



/* PubNub

// Sign up and get your own API keys at https://pubnub.com
const publish_key =  'pub-c-1d17120d-f60e-437a-b7c4-b89f773629cb';
const subscribe_key  = 'sub-c-85bdcc70-067d-11e6-996b-0619f8945a4f';

const pubnub = require('pubnub').init({
  publish_key   : publish_key,
  subscribe_key : subscribe_key,
  ssl: true,
  uuid: username
});

const channel = 'emergency-bot';
*/


class App extends Component {

  render() {
    return (
      <div className="App">
        EmergencyBot
        <Record />
      </div>
    );
  }
}

export default App;
