import React, { Component } from "react";
// import Slots from './slots'
import Javascriptslots from './javascriptslots'


export default class Signup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         alias: ""

      };
      
   }

   handleAddName (val) {
      this.setState({name: val});
      console.log("NAME: " + this.state.name);
   }

   handleAddAlias (val) {
      this.setState({alias: val});
      console.log("ALIAS: " + this.state.alias);
   }


   render() {
      console.log(this.state.users)

    return (
     <div>
        <h2>NEW USER SIGN-UP</h2>
        <Javascriptslots />
           <div>
              <label>Name:</label>
              <input onChange={ (e) => this.handleAddName(e.target.value) }/>
         </div>
         <div>
               <label>Alias:</label>
               <input onChange={ (e) => this.handleAddAlias(e.target.value) }/>
         </div>
        {/* <div>Starting Balance: 500 Credits</div> */}

        {/* <button onClick={() => this.props.changeTab("Spin")}>Start Playing</button> */}
        <button onClick={this.props.addUsers}>Start Playing</button>

     </div>   
    )}

    }
