import React, { Component } from "react";
// import Slots from './slots'
import Javascriptslots from './javascriptslots'


export default class Signin extends Component {

    render() {

    return (
     <div>
        <h2>SIGN IN</h2>
        <Javascriptslots />
            <div><label>Alias:</label>
            <input/></div>
         <button onClick={() => this.props.changeTab("Spin")}>Start Playing</button>
  

     </div>   
    )}
    }

