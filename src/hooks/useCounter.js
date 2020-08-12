import React, { useState } from 'react';

const useCounter = (initalState=10) => {
    const[state,setState]=useState(initalState);
    const increment=(factor=1)=>{
        setState(state+factor);
    }
    const decrement=(factor=1)=>{
        setState(state-factor);
    }
    const reset=()=>{
        setState(initalState);
    }
    return{
        state,
        increment,
        decrement,
        reset
    };
}
 
export default useCounter;