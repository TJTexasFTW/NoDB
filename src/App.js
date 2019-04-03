import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Welcome from './components/welcome';
import Slots from './components/slots'
import Signup from './components/signup'
import Signin from './components/signin'
import Spin from './components/spin'
// import Javascriptslots from './components/javascriptslots'

class App extends Component {
  render() {
    return (
      <div className="App">
      <article>< Welcome /></article>
      <article><Signup /></article>
      <article><Signin /></article>   
      <article><Spin /></article>   

      </div>
    );
  }
}

export default App;
