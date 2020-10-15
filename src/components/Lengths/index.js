import React from 'react'
import Length from '../Length'
import './lengths.css'

const Lengths = (props) => {
    const {
        breakValue,
        sessionValue,
        handleDecrement,
        handleIncrement
    } = props
    return (
        <div className="Lengths">
            <Length
                id='break'
                title='Break'
                value={breakValue}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
            />
            <Length
                id='session'
                title='Session'
                value={sessionValue}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
            />
        </div>
    )
}

export default Lengths