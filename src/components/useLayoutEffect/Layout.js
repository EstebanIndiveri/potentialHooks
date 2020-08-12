import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import './Layout.css';
import useFetch from '../../hooks/useFetch';
import useCounterPage from '../../hooks/useCounterPage';
const Layout = () => {

    const{counter,increment}=useCounterPage(1);


    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote}=!!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])

    return ( 
        <Fragment>
        <div>Layout effect</div>
        <hr/>
      
            <blockquote className="blockquote text-right">
            <p className="mb-0"
            ref={pTag}
            > {quote}</p>
            </blockquote>
        
        <pre>
            {JSON.stringify(boxSize,null,3)}
        </pre>

        <button className="btn btn-secondary"
        onClick={increment}
        >
            Siguiente quote
        </button>
       
        </Fragment>
     );
}
 
export default Layout;