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
     <div className="whatever">
        <h2>NEW USER SIGN-UP</h2>
        <Javascriptslots />
         <div className = "signup">
              <label>Name:</label>
              <input onChange={ (e) => this.handleAddName(e.target.value) }/>
         </div>
         <div className = "signup">
               <label>Alias:</label>
               <input onChange={ (e) => this.handleAddAlias(e.target.value) }/>
         </div>
        <button className = "signupButton" onClick={() => this.props.addUser(this.state.name, this.state.alias)}>Start Playing</button>

     </div>   
    )}

    }
