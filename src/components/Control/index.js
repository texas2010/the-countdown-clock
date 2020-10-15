import React, { Component } from 'react'
import './control.css'

export default class Control extends Component {
    render() {
        const {
            handlePlay,
            handleReset
        } = this.props
        return (
            <div className="Control">
                <button id="start_stop" onClick={handlePlay}>Start</button>
                <button id="reset" onClick={handleReset}>Reset</button>
            </div>
        )
    }
}
