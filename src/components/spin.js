import React, { Component } from "react";
import Javascriptslots from './javascriptslots'
import Slots from './slots'
// import Signup from './signup';

export default class Spin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curBalance: 0,
      
      jsWords: ["let", "dev", "put"],
      
      slot1Word: "",
      slot2Word: "",
      slot3Word: "",

      winnings: 0
    };

    this.spinButton = this.spinButton.bind(this)
    
  }

spinButton () {
  let balance = this.props.user.balance;

  this.setState({curBalance: this.props.user.balance})
  console.log("Spin Button Clicked. curBalance = ", this.state.curBalance)

  // this.setState({slot1Word: "Java"});
  // this.setState({slot2Word: "Scr"});
  // this.setState({slot3Word: "ipt"});

  let slot1Spin = ((Math.floor((Math.random() * 3) + 1))-1);
  let slot2Spin = ((Math.floor((Math.random() * 3) + 1))-1);
  let slot3Spin = ((Math.floor((Math.random() * 3) + 1))-1);

  var winnings = 0;


  // if (this.curBalance > 9) {
    this.setState({slot1Word: this.state.jsWords[slot1Spin]});
    this.setState({slot2Word: this.state.jsWords[slot2Spin]});
    this.setState({slot3Word: this.state.jsWords[slot3Spin]});
  // }
 
  if ((this.slot1Word === this.slot2Word) && 
      (this.slot2Word === this.slot3Word) && 
      (this.state.slot3Word === 'dev') &&
      (this.state.slot2Word === 'dev') &&
      (this.state.slot1Word === 'dev')
      
      ) {
        winnings = 100;
        // console.log("three devs: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
        this.setState({curBalance: this.state.curBalance + winnings, winnings})
        balance += winnings;
      } else if ((this.slot1Word === this.slot2Word) && 
      (this.slot1Word === this.slot3Word)) {
        winnings = 50;
        // console.log("Winnings 3 match no dev: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
        this.setState({curBalance: this.state.curBalance + winnings, winnings})
        balance += winnings;

      } else if ((this.slot1Word === this.slot2Word) || 
                (this.slot1Word === this.slot3Word) ||
                (this.slot2Word === this.slot3Word)) {
                  winnings = 10;
                  // console.log("two matches: ", winnings, this.state.slot1Word, this.state.slot2Word, this.state.slot3Word)
                  this.setState({curBalance: this.state.curBalance + winnings, winnings})
                  balance += winnings;

      } else {
        winnings = 0;
    }

    this.props.updateUser(this.props.user.id, balance);

    console.log("Winnings", winnings);

}

    render() {
      // console.log("Spin user: ", this.props.user)
    return (
     <div>
        <h2>LET'S PLAY</h2>
        {this.props.user ? (
        <p>Your user ID is: {this.props.user.id}</p>
        ) : null}
        <Javascriptslots />
        <Slots slot1 = {this.state.slot1Word}
               slot2 = {this.state.slot2Word}
               slot3 = {this.state.slot3Word}/>

        <article className="slot">
            <div className="slotItems">{this.state.slot1Word}</div>
            <div className="slotItems">{this.state.slot2Word}</div>
            <div className="slotItems">{this.state.slot3Word}</div>
        </article>

        <h2>CREDITS WON: {this.state.winnings}</h2>
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
        <button onClick={() => this.props.delete(this.props.user.id)}>DELETE ACCOUNT</button>
        {/* <button onClick={() => this.props.addUser(this.state.name, this.state.alias)}>Start Playing</button> */}
        <button onClick={this.spinButton} className = "spin">SPIN</button>
        <button onClick={() => this.props.changeTab("Signout")}>SIGN OUT</button>

      </div>
     </div>   
    )}

    }
