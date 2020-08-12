import React, { Fragment } from 'react';
import useCounter from '../../hooks/useCounter';
import './Counter.css';

const CounterWithHook = () => {

    const{state,increment,decrement,reset}=useCounter(100);

    return ( 
        <Fragment>
        <h1>Counter with Hook {state} </h1>
        <hr/>
        <button onClick={()=>increment(2)} className="btn btn-primary">+1</button>
        <button onClick={()=>reset()} className="btn btn-primary">Reset</button>
        <button onClick={()=>decrement(2)} className="btn btn-secondary">-1</button>

        </Fragment>
     );
}
 
export default CounterWithHook;