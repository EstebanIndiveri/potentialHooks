import React, { Fragment, useEffect,useState } from 'react';
import './SimpleForm.css';
import Message from './Message';
const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const {name,email}=formState;

    useEffect(()=>{

    },[]);

    
    useEffect(()=>{
        // console.log('name cambio');
    },[formState]);

    useEffect(()=>{
        // console.log('email cambio');
    },[email]);

    const handleInputChange=(e)=>{
        // console.log(e.target.value);
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    return ( 
        <Fragment>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                placeholder="Tu email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
            </div>
            {(name==='123')&&<Message/>}
        </Fragment>
     );
}
 
export default SimpleForm;