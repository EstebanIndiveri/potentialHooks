import React, { Fragment } from 'react';
import './SimpleForm.css';
import useForm from '../../hooks/useForm';
const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });
    const {name,email,password}=formValues;

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className="form-group">
                <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
     );
}
 
export default FormWithCustomHook;