import React, { Component } from 'react'
import './length.css'

export default class Length extends Component {
    render() {
        const {
            id,
            title,
            value,
            handleDecrement,
            handleIncrement
        } = this.props
        // const { count } = this.state;
        return (
            <div className="Length" id={`${id}-label`}>
                <h3>{title} Length</h3>
                <div>
                    <button
                        id={`${id}-decrement`}
                        onClick={() => handleDecrement(`${id}Value`, title)}
                    >-</button>
                    <span id={`${id}-length`}>{value}</span>
                    <button
                        id={`${id}-increment`}
                        onClick={() => handleIncrement(`${id}Value`, title)}
                    >+</button>
                </div>
            </div>
        )
    }
}
