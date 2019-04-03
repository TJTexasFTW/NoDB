import React from 'react';
import Slots from './slots'
import Javascriptslots from './javascriptslots'

export default function Signup () {

    return (
     <div>
        <h2>NEW USER SIGN-UP</h2>
        <Javascriptslots />
           <div><label>Name:</label>
            <input/></div> 
            <div><label>Alias:</label>
            <input/></div>
        <div><a>Starting Balance: 500 Credits</a></div>

        <button>Start Playing</button>
  

     </div>   
    )}


