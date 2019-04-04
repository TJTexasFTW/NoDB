import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'
import Signup from './signup';

export default class Spin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 500
    };
    
  }

    render() {

    return (
     <div>
        <h2>LET'S PLAY</h2>
        <Javascriptslots />
        <Slots />
        <h2>CREDITS WON: #####</h2>
         <div className="winners">
         <p>2 Matching Items: 10 credits</p>
         <p>3 Matching Items: 50 credits</p>
         <p>3 Bonus Items: 100 credits</p>
         </div>
         <h4>CURRENT CREDITS: {this.state.balance}</h4>
      <p className="spinCost">Each Spin: 10 credits</p>
      
      <div className="spinButtons">
        <button>DELETE ACCOUNT</button>
        <button className = "spin">SPIN</button>
        <button onClick={() => this.props.changeTab("Signout")}>SIGN OUT</button>
      </div>
     </div>   
    )}

    }
