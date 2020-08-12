import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEffect/SimpleForm.css';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment=()=>{
    //     setCounter(counter+1);
    // }

    const increment= useCallback((num)=>{
        setCounter(c=>c+num);
    },[setCounter]);


    useEffect(()=>{

    },[increment])

    return ( 
        <div>
            <h1>useCallBack hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>

        </div>
     );
}
 
export default CallBackHook;