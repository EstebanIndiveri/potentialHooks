import {useState,useEffect,useRef} from 'react';

const useFetch = (url) => {
    const [state, setState] = useState({data:null,loading:true,error:null});

    const isMounted = useRef(true);

    useEffect(() => {
        return()=>{
            isMounted.current=false;
        }
    }, [])

    useEffect(()=>{
        setState({
            data:null,
            loading:true,
            error:null
        })
        fetch(url).then(res=>res.json()).then(data=>{
            if(isMounted.current){
                setState({
                    loading:false,
                    error:null,
                    data
                })
            }
          
        }).catch(()=>{
            setState({
                data:null,
                loading:false,
                error:'no se pudo cargar info'
            })
        })
    },[url])

    return state;
}
 
export default useFetch;