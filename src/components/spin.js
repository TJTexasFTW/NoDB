import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'


export default class Spin extends Component {

    render() {

    return (
     <div>
        <h2>LET'S PLAY</h2>
        <Javascriptslots />
        <h3>Alias to Go Here</h3>
        <h2>CURRENT CREDITS: ######</h2>
        <Slots />
        <h2>CREDITS WON: #####</h2>
         <div className="winners">
         <p>2 Matching Items: 10 credits</p>
         <p>3 Matching Items: 50 credits</p>
         <p>3 Bonus Items: 100 credits</p>
         </div>

      <p className="spinCost">Each Spin: 10 credits</p>
      
      <div className="spinButtons">
        <button>DELETE ACCOUNT</button>
        <button className = "spin">SPIN</button>
        <button onClick={() => this.props.changeTab("Signout")}>SIGN OUT</button>
      </div>
     </div>   
    )}

    }
