import React, { Fragment } from 'react';
import useForm from '../../hooks/useForm';

const Tododd = ({handleAddTodo}) => {

    const [{description},handleInputChange,reset] = useForm({
        description:''
    })

    const handleSubmit=e=>{
        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }
        const newTodo={
            id:new Date().getTime(),
            desc:description,
            done:false
        };
        handleAddTodo(newTodo);
        reset();
    }
    return ( 
        <Fragment>
              <h4>Agregar TODO</h4>
                    <hr/>

                    <form
                    onSubmit={handleSubmit}
                    >
                        <input
                        type="text"
                        name="description"
                        placeholder="Comenzar"
                        autoComplete="off"
                        className="form-control"
                        onChange={handleInputChange}
                        value={description}
                        />
                        <button
                        type="submit"
                        className="btn btn-outline-secondary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
        </Fragment>
     );
}
 
export default Tododd;