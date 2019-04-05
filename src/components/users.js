import React, { Component } from "react";
// import Slots from './slots'
import Javascriptslots from './javascriptslots'


export default class Users extends Component {

    

    render() {
        console.log("USERS COMP: ", this.props.users)
        const userList = this.props.users.map(val => <li key={val.id}>{val.name}</li>);

    return (
     <div>
        <h2>USER LISTING</h2>
        <Javascriptslots />
        <div>
           <ul>
               {userList}
           </ul>
           
           
            {/* <ul>
            {this.props.users.map((user, index) => (
                id={this.props.users.id}  
                name={this.props.users.name}
                alias={this.props.users.alias}
                balance={this.props.users.balance} */}
            {/* </ul> */} 
        </div>
         <button onClick={() => this.props.changeTab("Spin")}>Start Playing</button>

     </div>   
    )}
    }

