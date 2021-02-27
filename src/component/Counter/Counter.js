import React from 'react';
import  "./counter.css";




// let number = 0







function Counter(props) {
    return (
        <div >
            <h1>Counter</h1>
            
            <button className="button" onClick={props.minus}>-</button>
            <span className="number">{props.number}</span>
            <button className="button" onClick={props.plus}>+</button>
            
        </div>
    )
}

export default Counter
