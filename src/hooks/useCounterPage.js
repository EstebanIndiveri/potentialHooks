import React, { useState } from 'react';

const useCounterPage = (initalState=10) => {
    const[counter,setState]=useState(initalState);
    const increment=()=>{
        setState(counter+1);
    }
    const decrement=()=>{
        setState(counter-1);
    }
    const reset=()=>{
        setState(counter);
    }
    return{
        counter,
        increment,
        decrement,
        reset
    };
}
 
export default useCounterPage;