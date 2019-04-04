import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'


export default class Welcome extends Component {

   render() {

    return (
     <div>
        {this.props.tab !== Welcome ? (
        <h2>VISIT AGAIN SOON</h2>
        ) : (
        <h2>WELCOME</h2>)}
        <Javascriptslots />
        <Slots />
        <button onClick={() => this.props.changeTab("Signup")}>Sign Up</button>
        <button onClick={() => this.props.changeTab("Signin")}>Sign In</button>

     </div>   
    )}
    }

