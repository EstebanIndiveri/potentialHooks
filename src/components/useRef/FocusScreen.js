import React, { useRef } from 'react';

import '../02-useEffect/SimpleForm.css';

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick=()=>{
        inputRef.current.select();
    }

    return ( 
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={inputRef}
            className="form-control"
            placeholder="su nombre"
            />
            <button className="btn btn-secondary mt-5"
            onClick={handleClick}
            > Focus </button>
        </div>
     );
}
 
export default FocusScreen;