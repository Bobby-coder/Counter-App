import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [num, setNum] = useState(0);

    const increaseNum = () => setNum(num + 1)

    const decreaseNum = () => setNum(num - 1)

    const resetNum = () => setNum(0)

    const plusHundred = () => setNum(num + 100)

    const minusHundred = () => setNum(num - 100)

    return (
        <>
            <div className='container'>
                <div className='counter'>
                    <h1>COUNTER</h1>
                    <p>{num}</p>
                    <button className='reset' onClick={resetNum}>RESET</button>
                    <div className='hundred'>
                        <button className='plusMinus100' id='minus100' onClick={minusHundred}>- 100</button>
                        <button className='plusMinus100' id='plus100' onClick={plusHundred}>+ 100</button>
                    </div>
                    <div className='buttons'>
                        <button className='plusMinus' id='minus' onClick={decreaseNum}>-</button>
                        <button className='plusMinus' id='plus' onClick={increaseNum}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;