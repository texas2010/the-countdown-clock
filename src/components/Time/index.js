import React, { Component } from 'react'
import './time.css'

export default class Time extends Component {
    constructor(props) {
        super(props)
        this.formatTime = this.formatTime.bind(this)
    }

    formatTime(seconds) {
        const date = new Date(0);
        date.setSeconds(seconds)
        const timeString = date.toISOString().substr(11, 8);
        if (timeString === '01:00:00') {
            return '60:00'
        }
        return timeString.substring(3)
    }
    render() {
        const {
            title,
            timeValue,
        } = this.props
        return (
            <div className="Time">
                <h2 id="timer-label">{title}</h2>
                <div>
                    <h1 id="time-left">{this.formatTime(timeValue)}</h1>
                </div>
            </div>
        )
    }
}
