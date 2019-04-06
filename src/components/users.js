import React, { Component } from "react";
// import Slots from './slots'
import Javascriptslots from './javascriptslots'


export default class Users extends Component {

    

    render() {
        console.log("USERS COMP: ", this.props.users)
        const userList = this.props.users.map(val => <li key={val.id}><p>ID: {val.id}</p><p>NAME: {val.name}</p><p>ALIAS: {val.alias}</p><p>BALANCE: {val.balance}</p></li>);

    return (
    <div>
        <h2>USER LISTING</h2>
        <Javascriptslots />
        <div className="moveOver">
            <ul><ul><ul>
                <ul className="userlisting">
                    {userList}
                </ul>
            </ul></ul></ul>
        </div>
        <div  >
            <button className="userStartButton" onClick={() => this.props.changeTab("Spin")}>Start Playing</button>
        </div>
    </div>   
    )}
    }

