import React,{useState, useMemo} from 'react';
import '../02-useEffect/SimpleForm.css';
import useCounterPage from '../../hooks/useCounterPage';
import { procesoPesado } from '../../helpers/procesoPesado';
// import Small from './Small';
// import useCounter from '../../hooks/useCounter';

const MemorizeHook = () => {
    const{counter,increment}=useCounterPage(10);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return ( 
        <div>
            <h1>memohook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
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
 
export default MemorizeHook;