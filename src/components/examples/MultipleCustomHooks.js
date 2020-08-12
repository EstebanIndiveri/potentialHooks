import React, { Fragment } from 'react';
import '../02-useEffect/SimpleForm.css';
import useFetch from '../../hooks/useFetch';
import useCounterPage from '../../hooks/useCounterPage';
const MultipleCustomHooks = () => {

    const{counter,increment}=useCounterPage(1);


    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author,quote}=!!data && data[0];
    console.log(author,quote);

    return ( 
        <Fragment>
        <div>BreakingBad Quotes</div>
        <hr/>
        {loading?(
            <div className="alert alert-info text-center">
            Loading
            </div>
        ):(
            <blockquote className="blockquote text-right">
            <p className="mb-0"> {quote}</p>
            <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        )}
        <button className="btn btn-secondary"
        onClick={increment}
        >
            Siguiente quote
        </button>
       
        </Fragment>
     );
}
 
export default MultipleCustomHooks;