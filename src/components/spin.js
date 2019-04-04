import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'
// import Signup from './signup';

export default class Spin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curBalance: 0
    };
    
  }

    render() {
      console.log("Spin user: ", this.props.user)
    return (
     <div>
        <h2>LET'S PLAY</h2>
        {this.props.user ? (
        <p>Your user ID is: {this.props.user.id}</p>
        ) : null}
        <Javascriptslots />
        <Slots />
        <h2>CREDITS WON: #####</h2>
         <div className="winners">
         <p>2 Matching Items: 10 credits</p>
         <p>3 Matching Items: 50 credits</p>
         <p>3 Bonus Items: 100 credits</p>
         </div>
         {this.props.user ? (
         <h4>CURRENT CREDITS: {this.props.user.balance}</h4>) : <div>Nothing Yet</div>}  
         {/* {this.props.balance[this.props.curId]} */}
      <p className="spinCost">Each Spin: 10 credits</p>
      
      <div className="spinButtons">
        <button>DELETE ACCOUNT</button>
        <button className = "spin">SPIN</button>
        <button onClick={() => this.props.changeTab("Signout")}>SIGN OUT</button>
      </div>
     </div>   
    )}

    }
