import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'
// import Signup from './signup';

export default class Spin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curBalance: 0,
      
      jsWords: ["dev", "let", "put"],
      
      slot1Word: "",
      slot2Word: "",
      slot3Word: "",

      winnings: 0
    };

    this.spinButton = this.spinButton.bind(this)
    
  }

spinButton () {
  let balance = this.props.user.balance - 10;

  this.setState({curBalance: balance})
  console.log("Spin Button Clicked. curBalance = ", this.state.curBalance)

  let slot1Spin = ((Math.floor((Math.random() * 3) + 1))-1);
  let slot2Spin = ((Math.floor((Math.random() * 3) + 1))-1);
  let slot3Spin = ((Math.floor((Math.random() * 3) + 1))-1);

  var winnings = 0;

  console.log("Index number assignments: ", slot1Spin, slot2Spin, slot3Spin)
  // if (this.curBalance > 9) {
  //Update the state items to the randomly selected words
    this.setState({slot1Word: this.state.jsWords[slot1Spin]});
    this.setState({slot2Word: this.state.jsWords[slot2Spin]});
    this.setState({slot3Word: this.state.jsWords[slot3Spin]});
  // }
  console.log("Before if statements: ", slot1Spin, slot2Spin, slot3Spin)
  
  if ((slot1Spin === slot2Spin && 
      slot2Spin === slot3Spin && 
      slot1Spin == 0 &&
      slot2Spin == 0 &&
      slot3Spin == 0)
      
      ) {
        winnings = 100;
        // console.log("three devs: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
        this.setState({curBalance: this.state.curBalance + winnings, winnings})
        balance += winnings;
      } else if ((slot1Spin === slot2Spin) && 
      (slot1Spin === slot3Spin)) {
        winnings = 50;
        // console.log("Winnings 3 match no dev: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
        this.setState({curBalance: this.state.curBalance + winnings, winnings})
        balance += winnings;

      } else if ((slot1Spin === slot2Spin) || 
                (slot1Spin === slot3Spin) ||
                (slot2Spin === slot3Spin)) {
                  winnings = 10;
                  // console.log("two matches: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
                  this.setState({curBalance: this.state.curBalance + winnings, winnings})
                  balance += winnings;

      } else {
        winnings = 0;
        this.setState({curBalance: this.state.curBalance + winnings, winnings})
    }

    this.props.updateUser(this.props.user.id, balance);

    console.log("Winnings end ", winnings);

}

    render() {
      // console.log("Spin user: ", this.props.user)
    return (
     <div>
        <h2>LET'S PLAY</h2>
        {this.props.user ? (
        <p className="userid" > Your user ID is: {this.props.user.id}</p>
        ) : null}
        <Javascriptslots />
        {/* <Slots slot1 = {this.state.slot1Word}
               slot2 = {this.state.slot2Word}
               slot3 = {this.state.slot3Word}/> */}

        <article className="slot">
            <div className="slotItems">{this.state.slot1Word}</div>
            <div className="slotItems">{this.state.slot2Word}</div>
            <div className="slotItems">{this.state.slot3Word}</div>
        </article>

        <h2 className="scroll-right">CREDITS WON: {this.state.winnings}</h2>
         <div className="winners">
         <p>3 "devs": 100 credits</p>
         <p>3 Matching Items: 50 credits</p>
         <p>2 Matching Items: 10 credits</p>
         </div>
         {this.props.user ? (
         <h4>CURRENT CREDITS: {this.props.user.balance}</h4>) : <div>Nothing Yet</div>}  
         {/* {this.props.balance[this.props.curId]} */}
      <p className="spinCost">Each Spin: 10 credits</p>
      
      <div className="spinButtons">
        <button onClick={() => this.props.delete(this.props.user.id)}>DELETE ACCOUNT</button>
        {/* <button onClick={() => this.props.addUser(this.state.name, this.state.alias)}>Start Playing</button> */}
        <button onClick={this.spinButton} className = "spin">SPIN</button>
        <button onClick={() => this.props.changeTab("Signout")}>SIGN OUT</button>
      </div>
     </div>   
    )}

    }
