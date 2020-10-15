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
            currentCountDown: 25,
            currentTitle: 'Session'
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    handlePlay() {

    }
    handleReset() {
        this.setState({
            breakValue: 5,
            sessionValue: 25,
            currentCountDown: 25,
            currentTitle: 'Session'
        })
    }
    handleDecrement(nameValue, title) {
        if (this.state[nameValue] > 1) {
            this.setState(state => ({ [nameValue]: state[nameValue] - 1}))
        }
        if (this.state.currentTitle === title) {
            this.setState(state => ({ currentCountDown: state[nameValue] }))
        }
    }
    handleIncrement(nameValue, title) {
        if (this.state[nameValue] !== 60) {
            this.setState((state) => ({ [nameValue]: state[nameValue] + 1}))
        }
        if (this.state.currentTitle === title) {
            this.setState(state => ({ currentCountDown: state[nameValue] }))
        }
    }

    render() {
        const {
            currentCountDown,
            currentTitle,
            breakValue,
            sessionValue
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
                    handleReset={this.handleReset}
                    handlePlay={this.handlePlay}
                />
            </div>
        )
    }
}