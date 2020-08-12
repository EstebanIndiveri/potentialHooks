import React, { Fragment,useState } from 'react';
import './Counter.css';
const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20
    })
    const{counter1,counter2}=state;
    return (  
        <Fragment>
        <h1>Counter{counter1}</h1>
        <h1>Counter{counter2}</h1>

        <hr/>
        <button 
        className="btn btn-primary"
        onClick={()=>{
            setCounter({
                ...state,
                counter1:counter1+1,
                
            });
        }}
        >+1</button>
        </Fragment>
    );

}
 
export default CounterApp;