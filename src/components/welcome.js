import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'


export default class Welcome extends Component {

   render() {
        console.log("PROPS: ", this.props)
    return (
     <div>
         {this.props.tab !== Welcome ? (
         <h2>VISIT AGAIN SOON</h2>
         ) : (
         <h2>WELCOME</h2>)}
         <Javascriptslots />
         <Slots />
         <button onClick={() => this.props.changeTab("Signup")}>Sign Up</button>
         <button onClick={() => this.props.getUsers()}>Users Listing</button>
         {/* <button onClick={() => this.props.delete(this.props.user.id)}>DELETE ACCOUNT</button> */}
     </div>   
    )}
    }

