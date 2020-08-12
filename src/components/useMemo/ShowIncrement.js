import React from 'react';

const ShowIncrement = ({increment}) => {
    return ( 
        <button
        className="btn btn-warning"
        onClick={()=>{
            increment(5);
        }}
        >
            incrementar
        </button>
     );
}
 
export default ShowIncrement;