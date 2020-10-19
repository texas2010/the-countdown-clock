import React, { Component } from 'react'
import './control.css'

export default class Control extends Component {
    render() {
        const {
            handlePlay,
            handleReset,
            isRunning
        } = this.props
        return (
            <div className="Control">
                <button id="start_stop" onClick={handlePlay}>{isRunning ? 'Pause' : 'Start'}</button>
                <button id="reset" onClick={handleReset}>Reset</button>
            </div>
        )
    }
}
