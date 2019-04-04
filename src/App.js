import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Footer from './components/footer';
import Welcome from './components/welcome';
// import Slots from './components/slots'
import Signup from './components/signup';
import Signin from './components/signin';
import Spin from './components/spin';
// import Javascriptslots from './components/javascriptslots'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: "Welcome"
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ tab: tab });
  }

  render() {
    return (
      <div className="App">
      {this.state.tab === "Welcome" ? (
      <article>< Welcome changeTab = {this.changeTab} /></article>) :
      this.state.tab === "Signup" ? (
      <article><Signup changeTab = {this.changeTab} /></article>) :
      this.state.tab === "Signin" ? (
      <article><Signin changeTab = {this.changeTab} /></article>) :  
      this.state.tab === "Spin" ? (
      (<article><Spin changeTab = {this.changeTab} /></article>)) :
      (
      <article><Welcome changeTab = {this.changeTab} /></article>)
      }   
      <Footer />
      </div>
    );
  }
}

export default App;
