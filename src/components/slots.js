import React, { Component } from "react";
import Spin from './spin';


export default class Slots extends Component {

    render() {

    return (
        <article className="slot">
            <div className="slotItems" id="1">{this.props.slot1}</div>
            <div className="slotItems" id="2">{this.props.slot2}</div>
            <div className="slotItems" id="3">{this.props.slot3}</div>
        </article>
    )
}
}