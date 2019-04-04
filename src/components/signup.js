import React, { Component } from "react";
// import Slots from './slots'
import Javascriptslots from './javascriptslots'

export default class Signup extends Component {

   render() {

    return (
     <div>
        <h2>NEW USER SIGN-UP</h2>
        <Javascriptslots />
           <div><label>Name:</label>
            <input/></div> 
            <div><label>Alias:</label>
            <input/></div>
        <div>Starting Balance: 500 Credits</div>

        <button onClick={() => this.props.changeTab("Spin")}>Start Playing</button>
  

     </div>   
    )}

    }
