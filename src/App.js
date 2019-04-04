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
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: "Welcome",
      users: [],
      id: 0,
      curUserId: 0
    };
    this.changeTab = this.changeTab.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  changeTab(tab) {
    console.log("Value of tab: ", tab)
    this.setState({ tab: tab });
  }

  addUser(name, alias) {
    // console.log(this.state.name, this.state.alias)
    axios.post('/api/users', {id: this.state.id, name: name, alias: alias, balance: 500}).
      then (res => {this.setState({users: res.data})});
    this.changeTab("Spin");
    this.setState({curUserId: this.state.id});
    this.setState({id: this.state.id+1});
    console.log("The id is: ", this.state.id)
 }

 deleteUser(id) {
  // console.log(this.state.name, this.state.alias)
  axios.delete('/api/users:id', id).
    then (res => {this.setState({users: res.data})});
  this.changeTab("");
  // this.setState({curUserId: this.state.id});
  // this.setState({id: this.state.id+1});
  console.log("The id to delete is: ", this.state.id)
}

  render() {
    console.log(this.state.curUserId)
    return (
      <div className="App">
         {/* <article><Signup changeTab = {this.changeTab} addUser = {this.addUser}/></article> */}
      {this.state.tab === "Welcome" ? (
      <article>< Welcome changeTab = {this.changeTab} /></article>) :
      this.state.tab === "Signup" ? (
      <article><Signup changeTab = {this.changeTab} addUser = {this.addUser}/></article>) :
      this.state.tab === "Signin" ? (
      <article><Signin changeTab = {this.changeTab} /></article>) :  
      this.state.tab === "Spin" ? (
      <article><Spin 
        changeTab = {this.changeTab} 
        user = {this.state.users[this.state.curUserId]}
        deleteUser = {this.state.deleteUser}/></article>) :
      ( <article><Welcome changeTab = {this.changeTab} /></article>)
      }   
      <Footer />
      </div>
    );
  }
}

export default App;
