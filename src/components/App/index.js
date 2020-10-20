import React, { Component } from 'react';
import Lengths from '../Lengths';
import Time from '../Time';
import Control from '../Control';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breakValue: 5,
            sessionValue: 25,
            currentCountDown: 1500,
            currentTitle: 'Session',
            isRunning: false,
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handlePlay() {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true }, this.tick)
        } else {
            this.setState({ isRunning: false }, this.tick)
        }
    }
    tick() {
        if (this.state.isRunning) {
            const intervalID = setInterval(() => {
                if (this.state.currentCountDown !== 0) {
                    this.setState(state => ({
                        currentCountDown: state.currentCountDown - 1
                    }))
                    return
                }
                if (!this.state.currentCountDown) {
                    document.getElementById('beep').play()
                    if (this.state.currentTitle === 'Session') {
                        this.setState(state => ({
                            currentCountDown: state.breakValue * 60,
                            currentTitle: 'Break'
                        }))
                    } else {
                        this.setState(state => ({
                            currentCountDown: state.sessionValue * 60,
                            currentTitle: 'Session'
                        }))
                    }
                    setTimeout(() => {
                        document.getElementById('beep').pause()
                        document.getElementById('beep').currentTime = 0;
                    }, 1000)
                    return
                }
            }, 1000)
            this.setState({
                timeID: intervalID
            })
        } else {
            if (this.state.timeID) {
                clearInterval(this.state.timeID)
            }
        }
    }
    handleReset() {
        document.getElementById('beep').pause()
        document.getElementById('beep').currentTime = 0;
        if (this.state.timeID) {
            clearInterval(this.state.timeID)
        }
        this.setState({
            breakValue: 5,
            sessionValue: 25,
            currentCountDown: 1500,
            currentTitle: 'Session',
            isRunning: false
        })
    }
    handleDecrement(nameValue, title) {
        if (this.state[nameValue] > 1) {
            this.setState(state => ({ [nameValue]: state[nameValue] - 1 }))
        }
        if (this.state.currentTitle === title) {
            this.setState(state => ({ currentCountDown: state[nameValue] * 60 }))
        }
    }
    handleIncrement(nameValue, title) {
        if (this.state[nameValue] !== 60) {
            this.setState((state) => ({ [nameValue]: state[nameValue] + 1 }))
        }
        if (this.state.currentTitle === title) {
            this.setState(state => ({ currentCountDown: state[nameValue] * 60 }))
        }
    }

    render() {
        const {
            currentCountDown,
            currentTitle,
            breakValue,
            sessionValue,
            isRunning
        } = this.state
        return (
            <div className="App">
                <h1>25 + 5 Clock</h1>
                <Lengths
                    breakValue={breakValue}
                    sessionValue={sessionValue}
                    handleDecrement={this.handleDecrement}
                    handleIncrement={this.handleIncrement}
                />
                <Time
                    timeValue={currentCountDown}
                    title={currentTitle}
                />
                <Control
                    isRunning={isRunning}
                    handleReset={this.handleReset}
                    handlePlay={this.handlePlay}
                />
            </div>
        )
    }
}