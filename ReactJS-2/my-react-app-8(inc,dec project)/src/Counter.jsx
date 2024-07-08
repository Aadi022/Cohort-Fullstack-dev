import React, {useState} from 'react';

function Counter(){
    const [count, setCount]= useState(0);

    const increment= function(){
        setCount(count+1);
    }

    const decrement= function(){
        setCount(count-1);
    }

    const reset= function(){
        setCount(0);   //This is how we update the entire value of the variable while dynamic changing
    }

    return(
        <>
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button onClick={increment} className="counter-button">Increment</button>
            <button onClick={reset} className="counter-button">Reset</button>
            <button onClick={decrement} className="counter-button">Decrement</button>
        </div>
        </>
    )
}

export default Counter