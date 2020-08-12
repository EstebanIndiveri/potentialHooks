import React, { useState } from 'react';
import '../02-useEffect/SimpleForm.css';
import MultipleCustomHooks from '../examples/MultipleCustomHooks'
const RealExampleRef = () => {

    const[show,setShow]=useState(false);

  

    return ( <div>
        <h1>Real Example</h1>
            <hr/>
            {
                show&&<MultipleCustomHooks/>
            }
            <button className="btn btn-warning mt-5"
            onClick={()=>{
                setShow(!show);
            }}
            >
                show/hide
            </button>
        </div> );
}
 
export default RealExampleRef;