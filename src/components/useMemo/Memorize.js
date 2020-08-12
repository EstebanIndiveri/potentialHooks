import React,{useState} from 'react';
import '../02-useEffect/SimpleForm.css';
import useCounterPage from '../../hooks/useCounterPage';
import Small from './Small';
// import useCounter from '../../hooks/useCounter';

const Memorize = () => {
    const{counter,increment}=useCounterPage(10);
    const [show, setShow] = useState(true);

    return ( 
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>

            <button
            className="btn btn-danger"
            onClick={increment}
            >
                +1
            </button>

            <button 
            className="btn btn-warning ml-3" 
            onClick={()=>{
                setShow(!show);
            }}>
                show/hide {JSON.stringify(show)}
            </button>
        </div>
     );
}
 
export default Memorize;